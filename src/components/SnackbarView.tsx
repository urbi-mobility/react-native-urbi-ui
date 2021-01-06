import React from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import { Testable } from 'src/types';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

const textStyle = registeredTextStyle('body', colors.ulisse, 'snackbartext');
const actionTextStyle = registeredTextStyle('button', colors.ulisse, 'snackbaraction');

const styles = StyleSheet.create({
  Wrapper: {
    zIndex: 666,
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 16,
    left: 16,
    right: 16,
  } as ViewStyle,
  Snackbar: {
    flex: 1,
    borderRadius: 6,
    maxWidth: 500,
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: colors.tertiary,
  },
  Action: {
    flex: 0,
    flexBasis: 'auto',
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  TextWithAction: {
    ...textStyle,
    flexGrow: 1,
    flexShrink: 1,
  },
  SingleLineWrapper: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ActionOnNewLineWrapper: {
    flex: 1,
    padding: 16,
  },
  TextWithActionOnNewLine: {
    flex: 1,
    justifyContent: 'center',
  },
  ThreeLineActionContainer: {
    marginTop: 12,
    flexDirection: 'row-reverse',
  },
});

export interface SnackbarAction {
  onNewLine?: boolean;
  text: string;
  textColor?: string;
  onPress: () => any;
}

export interface SnackbarMessage extends Testable {
  bottomMargin?: number;
  hideDelayMillis?: number;
  backgroundColor?: string;
  textColor?: string;
  message: string;
  action?: SnackbarAction;
}

export type SnackbarViewProps = {
  message: SnackbarMessage;
  onHide: () => any;
};

type SnackbarViewState = {
  initialY: number;
  skipOnHide: boolean;
};

const Action = ({
  text,
  textColor,
  onPress,
  testID,
}: {
  text: string;
  textColor?: string;
  onPress: () => any;
  testID?: string;
}) => (
  <TouchableWithoutFeedback onPress={onPress} testID={testID}>
    <View style={styles.Action}>
      <Text style={textColor ? [actionTextStyle, { color: textColor }] : actionTextStyle}>
        {text}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

export class SnackbarView extends React.PureComponent<SnackbarViewProps, SnackbarViewState> {
  static options = {
    overlay: {
      interceptTouchOutside: false,
    },
  };

  private timeoutHandle?: number;
  private translateY: Animated.Value;

  constructor(props: SnackbarViewProps) {
    super(props);

    const initialY =
      (props.message.bottomMargin ?? 0) + (props.message.action?.onNewLine ? 106 : 68);
    this.translateY = new Animated.Value(initialY);

    this.state = {
      initialY,
      skipOnHide: false,
    };

    this.getSnackbarStyle = this.getSnackbarStyle.bind(this);
    this.renderSingleLine = this.renderSingleLine.bind(this);
    this.renderWithActionOnNewLine = this.renderWithActionOnNewLine.bind(this);
    this.onActionPress = this.onActionPress.bind(this);
  }

  componentDidMount() {
    const { message, onHide } = this.props;
    Animated.timing(this.translateY, {
      toValue: 0,
      duration: 150,
      easing: Easing.in(Easing.quad),
      useNativeDriver: true,
    }).start();
    this.timeoutHandle = setTimeout(() => {
      Animated.timing(this.translateY, {
        toValue: this.state.initialY * 2,
        duration: 100,
        easing: Easing.out(Easing.linear),
        useNativeDriver: true,
      }).start();
      setTimeout(onHide, 150);
    }, message.hideDelayMillis ?? 4000);
  }

  componentWillUnmount() {
    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
      // call the callback without animations
      if (!this.state.skipOnHide) this.props.onHide();
    }
  }

  onActionPress() {
    const { message, onHide } = this.props;
    if (this.timeoutHandle) clearTimeout(this.timeoutHandle);
    message.action?.onPress();
    this.setState({ skipOnHide: true });
    requestAnimationFrame(onHide);
  }

  getSnackbarStyle() {
    const { message } = this.props;
    if (!message) return styles.Snackbar;
    const { backgroundColor } = message;
    if (!backgroundColor) return styles.Snackbar;
    return [styles.Snackbar, { backgroundColor: backgroundColor ?? colors.tertiary }];
  }

  renderSingleLine() {
    const { action, message, textColor } = this.props.message;
    const s = action ? styles.TextWithAction : textStyle;
    const tStyle = textColor ? [s, { color: textColor }] : s;
    return (
      <View style={styles.SingleLineWrapper}>
        <Text testID="snackbarTextTestID" style={tStyle} numberOfLines={2}>
          {message}
        </Text>
        {action ? <Action text={action.text} onPress={this.onActionPress} /> : null}
      </View>
    );
  }

  renderWithActionOnNewLine() {
    const { action, message, testID, textColor } = this.props.message;
    return (
      <View style={styles.ActionOnNewLineWrapper}>
        <View style={styles.TextWithActionOnNewLine}>
          <Text style={textColor ? [textStyle, { color: textColor }] : textStyle} numberOfLines={2}>
            {message}
          </Text>
        </View>
        <View style={styles.ThreeLineActionContainer}>
          <Action text={action!.text} onPress={this.onActionPress} testID={testID} />
        </View>
      </View>
    );
  }

  render() {
    const { action, bottomMargin } = this.props.message;

    return (
      <Animated.View
        style={{
          ...styles.Wrapper,
          bottom: 16 + (bottomMargin ?? 0),
          transform: [{ translateY: this.translateY }],
        }}
      >
        <View style={this.getSnackbarStyle()}>
          {action?.onNewLine ? this.renderWithActionOnNewLine() : this.renderSingleLine()}
        </View>
      </Animated.View>
    );
  }
}
