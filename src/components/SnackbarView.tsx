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
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    zIndex: 666,
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
    paddingLeft: 16,
    backgroundColor: colors.tertiary,
  },
  Action: {
    flexGrow: 0,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  SingleLineWrapper: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TwoLineWrapper: {
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ThreeLineWrapper: {
    height: 106,
    paddingBottom: 8,
  },
  TextOneLine: {
    flex: 1,
  },
  TextTwoLines: {
    flex: 1,
    justifyContent: 'center',
  },
  ThreeLineActionContainer: {
    flexDirection: 'row-reverse',
  },
});

export interface SnackbarAction {
  onNewLine?: boolean;
  text: string;
  textColor?: string;
  onPress: () => any;
}

export interface SnackbarMessage {
  bottomMargin?: number;
  hideDelayMillis?: number;
  backgroundColor?: string;
  textColor?: string;
  firstLine: string;
  secondLine?: string;
  action?: SnackbarAction;
}

const textStyle = registeredTextStyle('body', colors.ulisse, 'snackbartext');
const actionTextStyle = registeredTextStyle('button', colors.ulisse, 'snackbaraction');

export type SnackbarViewProps = {
  message: SnackbarMessage;
  onHide: () => any;
};

type SnackbarViewState = {
  initialY: number;
};

const Action = ({
  text,
  textColor,
  onPress,
}: {
  text: string;
  textColor?: string;
  onPress: () => any;
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
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
      (props.message.bottomMargin ?? 0) +
      (props.message.action?.onNewLine ? 106 : props.message.secondLine ? 68 : 48);
    this.translateY = new Animated.Value(initialY);

    this.state = {
      initialY,
    };

    this.getSnackbarStyle = this.getSnackbarStyle.bind(this);
    this.renderSingleLine = this.renderSingleLine.bind(this);
    this.renderTwoLines = this.renderTwoLines.bind(this);
    this.renderThreeLines = this.renderThreeLines.bind(this);
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
    if (this.timeoutHandle) clearTimeout(this.timeoutHandle);
  }

  onActionPress() {
    const { message, onHide } = this.props;
    if (this.timeoutHandle) clearTimeout(this.timeoutHandle);
    message.action?.onPress();
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
    const { action, firstLine, textColor } = this.props.message;
    return (
      <View style={styles.SingleLineWrapper}>
        <Text style={textColor ? [textStyle, { color: textColor }] : textStyle} numberOfLines={1}>
          {firstLine}
        </Text>
        {action ? <Action text={action.text} onPress={this.onActionPress} /> : null}
      </View>
    );
  }

  renderTwoLines() {
    const { action, firstLine, secondLine, textColor } = this.props.message;
    return (
      <View style={styles.TwoLineWrapper}>
        <View style={styles.TextTwoLines}>
          <Text style={textColor ? [textStyle, { color: textColor }] : textStyle} numberOfLines={1}>
            {firstLine}
          </Text>
          <Text style={textColor ? [textStyle, { color: textColor }] : textStyle} numberOfLines={1}>
            {secondLine}
          </Text>
        </View>
        {action ? <Action text={action.text} onPress={this.onActionPress} /> : null}
      </View>
    );
  }

  renderThreeLines() {
    const { action, firstLine, secondLine, textColor } = this.props.message;
    return (
      <View style={styles.ThreeLineWrapper}>
        <View style={styles.TextTwoLines}>
          <Text style={textColor ? [textStyle, { color: textColor }] : textStyle} numberOfLines={1}>
            {firstLine}
          </Text>
          <Text style={textColor ? [textStyle, { color: textColor }] : textStyle} numberOfLines={1}>
            {secondLine}
          </Text>
        </View>
        <View style={styles.ThreeLineActionContainer}>
          <Action text={action!.text} onPress={this.onActionPress} />
        </View>
      </View>
    );
  }

  render() {
    const { action, bottomMargin, secondLine } = this.props.message;

    return (
      <Animated.View
        style={{
          ...styles.Wrapper,
          bottom: 16 + (bottomMargin ?? 0),
          transform: [{ translateY: this.translateY }],
        }}
      >
        <View style={this.getSnackbarStyle()}>
          {action?.onNewLine
            ? this.renderThreeLines()
            : secondLine
            ? this.renderTwoLines()
            : this.renderSingleLine()}
        </View>
      </Animated.View>
    );
  }
}
