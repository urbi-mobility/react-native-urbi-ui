import RNSlider from '@react-native-community/slider';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'src/utils/colors';
import { onIOS } from 'src/utils/const';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    justifyContent: 'center',
    height: 40,
    minWidth: 245,
  },
  Slider: {
    flex: onIOS ? undefined : 1,
    height: onIOS ? 24 : 40,
    maxHeight: onIOS ? 24 : 40,
    minWidth: 245,
  },
});

export interface SliderProps {
  initialValue: number;
  min: number;
  max: number;
  onChange?: (value: number) => any;
  onSlidingComplete?: (value: number) => any;
  step?: number;
}

interface NativeSliderProps extends SliderProps {
  value: number;
}

const NativeSlider = (props: NativeSliderProps) => (
  <RNSlider
    style={styles.Slider}
    minimumValue={props.min}
    maximumValue={props.max}
    value={props.initialValue}
    step={props.step}
    onValueChange={props.onChange}
    onSlidingComplete={props.onSlidingComplete}
    minimumTrackTintColor={colors.primary}
    maximumTrackTintColor={colors.ursula}
    thumbTintColor={onIOS ? colors.ulisse : colors.primary}
  />
);

type SliderState = {
  latestValue: number;
  value: number;
};

export class Slider extends React.PureComponent<SliderProps, SliderState> {
  private timerHandle: number | undefined;

  constructor(props: SliderProps) {
    super(props);
    this.state = { latestValue: props.initialValue, value: props.initialValue };
    this.throttledUpdate = this.throttledUpdate.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  throttledUpdate(value: number) {
    if (onIOS) {
      this.setState({ latestValue: value });
      if (!this.timerHandle) {
        this.timerHandle = setTimeout(this.updateValue, 60);
      }
    } else {
      this.setState({ value });
      this.props.onChange?.(value);
    }
  }

  updateValue() {
    this.timerHandle = undefined;
    this.setState({ value: this.state.latestValue });
    this.props.onChange?.(this.state.latestValue);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
    }
  }

  render() {
    return onIOS ? (
      <View style={styles.Wrapper}>
        <NativeSlider {...this.props} value={this.state.value} onChange={this.throttledUpdate} />
      </View>
    ) : (
      <NativeSlider {...this.props} value={this.state.value} onChange={this.throttledUpdate} />
    );
  }
}
