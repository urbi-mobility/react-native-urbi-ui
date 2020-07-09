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

export type SliderProps = {
  initialValue: number;
  min: number;
  max: number;
  onChange?: (value: number) => any;
  onSlidingComplete?: (value: number) => any;
  step?: number;
};

const NativeSlider = (props: SliderProps) => (
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

export const SliderUnmemoized = (props: SliderProps) =>
  onIOS ? (
    <View style={styles.Wrapper}>
      <NativeSlider {...props} />
    </View>
  ) : (
    <NativeSlider {...props} />
  );

export const Slider = React.memo(SliderUnmemoized);
