import React, { PureComponent } from 'react';
import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import { BottomTriangle } from 'src/molecules/BottomTriangle';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

const textStyle = registeredTextStyle('body', colors.ulisse, 'tooltip-text');

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
  TooltipWrapper: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999999,
  } as ViewStyle,
  InnerWrapper: {
    flex: 1,
    flexDirection: 'column-reverse',
    position: 'absolute',
    alignItems: 'center',
    left: 8,
    right: 8,
  },
  Text: {
    ...textStyle,
    backgroundColor: colors.tertiary,
    overflow: 'hidden',
    borderRadius: 4,
    padding: 16,
  },
});

export interface TooltipProps {
  anchorY: number;
  anchorYIsFromBottom?: boolean;
  onHide: () => any;
  text: string;
  show: boolean;
}

export interface TooltipContainer {
  showTooltip: (props: TooltipProps) => any;
  hideTooltip: () => any;
}

export const TooltipUnmemoized = (props: TooltipProps) =>
  props.show ? (
    <TouchableWithoutFeedback onPressIn={props.onHide}>
      <View style={styles.TooltipWrapper}>
        <View
          style={[
            styles.InnerWrapper,
            {
              bottom: props.anchorY + 4,
            },
          ]}
        >
          <BottomTriangle />
          <Text style={styles.Text}>{props.text}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  ) : null;

export const Tooltip = React.memo(TooltipUnmemoized);

interface WithTooltipProps {
  tooltipContainer: React.RefObject<TooltipContainer>;
  text: string;
  show: boolean;
  onHide: () => any;
}

type WithTooltipState = {
  anchorY: number;
};

export class WithTooltip extends PureComponent<WithTooltipProps, WithTooltipState> {
  private wrapper: React.RefObject<View>;

  constructor(props: WithTooltipProps) {
    super(props);

    this.state = { anchorY: 0 };
    this.wrapper = React.createRef();

    this.onLayout = this.onLayout.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  onLayout(event: LayoutChangeEvent) {
    const fallbackY = event.nativeEvent.layout.y;
    this.wrapper.current?.measure((_: number, y: number) => {
      // note: y can be 0 in this case on Android for unknown reasons, hence the fallback
      // see https://github.com/facebook/react-native/issues/4753
      this.setState({ anchorY: y || fallbackY });
    });
  }

  showTooltip() {
    const show = (container: TooltipContainer) =>
      container.showTooltip({
        text: this.props.text,
        onHide: this.props.onHide,
        show: this.props.show,
        anchorY: this.state.anchorY,
      });

    if (this.props.tooltipContainer.current) {
      show(this.props.tooltipContainer.current);
    } else {
      // we're in the initial rendering, the external container hasn't rendered yet
      requestAnimationFrame(() => show(this.props.tooltipContainer.current!));
    }
  }

  componentDidMount() {
    if (this.props.show) {
      // give some time for the wrapped component to be rendered and measured
      // (note: requestAnimationFrame doesn't appear to work in this case)
      setTimeout(this.showTooltip, 500);
    }
  }

  componentDidUpdate(prevProps: WithTooltipProps) {
    if (this.props.tooltipContainer.current) {
      if (this.props.show && !prevProps.show) {
        this.showTooltip();
      } else if (prevProps.show && !this.props.show) {
        this.props.tooltipContainer.current.hideTooltip();
      }
    }
  }

  render() {
    return (
      <View ref={this.wrapper} style={styles.Wrapper} onLayout={this.onLayout}>
        {this.props.children}
      </View>
    );
  }
}
