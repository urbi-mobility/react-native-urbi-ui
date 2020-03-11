import React, { ReactElement } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SliderUnmemoized } from 'src/molecules/Slider';
import { EndDoubleLabel } from 'src/molecules/end/EndDoubleLabel';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 12,
  } as ViewStyle,
  Slider: {
    flex: 1,
    marginRight: 8,
  },
  Label: {
    flexGrow: 0,
  },
});

type ListItemSliderProps = {
  slider: ReactElement<typeof SliderUnmemoized>;
  endLabelTitle: string;
  endLabelSubtitle: string;
};

export const ListItemSliderUnmemoized = (props: ListItemSliderProps) => (
  <View style={styles.Wrapper}>
    <View style={styles.Slider}>{props.slider}</View>
    <View style={styles.Label}>
      <EndDoubleLabel label={props.endLabelTitle} subtitle={props.endLabelSubtitle} />
    </View>
  </View>
);

export const ListItemSlider = React.memo(ListItemSliderUnmemoized);
