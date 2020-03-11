import RNSlider from '@react-native-community/slider';
import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from 'src/utils/colors';
import { onIOS } from 'src/utils/const';

const styles = StyleSheet.create({
  Slider: {
    flex: 1,
    height: 40,
    minWidth: 245,
  },
});

export type SliderProps = {
  initialValue: number;
  min: number;
  max: number;
  onChange?: (value: number) => any;
  onSlidingComplete?: (value: number) => any;
  step?: number;
};

export const SliderUnmemoized = (props: SliderProps) => (
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

export const Slider = React.memo(SliderUnmemoized);
