import React from 'react';
import { Animated, StyleSheet, View, ViewStyle, LayoutChangeEvent } from 'react-native';
import {
  Tooltip,
  TooltipContainer as ITooltipContainer,
  TooltipProps,
} from 'src/components/Tooltip';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 999,
  } as ViewStyle,
});

type TooltipContainerState = {
  fadeAnimation: Animated.Value;
  height: number;
  tooltip?: TooltipProps;
};

export class TooltipContainer extends React.PureComponent<{}, TooltipContainerState>
  implements ITooltipContainer {
  constructor(props: {}) {
    super(props);

    this.state = { height: 0, fadeAnimation: new Animated.Value(0) };

    this.onLayout = this.onLayout.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  showTooltip(props: TooltipProps) {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    this.setState({ tooltip: props });
  }

  onLayout(event: LayoutChangeEvent) {
    this.setState({ height: event.nativeEvent.layout.height });
  }

  hideTooltip() {
    this.setState({ tooltip: undefined, fadeAnimation: new Animated.Value(0) }, () =>
      this.state.tooltip?.onHide()
    );
  }

  render() {
    const { height, tooltip } = this.state;
    const anchorY = tooltip
      ? tooltip.anchorYIsFromBottom
        ? tooltip.anchorY
        : height - tooltip.anchorY
      : 0;

    return (
      <View
        style={styles.Wrapper}
        onLayout={this.onLayout}
        pointerEvents={tooltip?.show ? 'auto' : 'none'}
      >
        <Animated.View style={{ flex: 1, opacity: this.state.fadeAnimation }}>
          {tooltip ? <Tooltip {...tooltip} anchorY={anchorY} onHide={this.hideTooltip} /> : null}
        </Animated.View>
      </View>
    );
  }
}
