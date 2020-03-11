import React, { ReactElement } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SliderProps, Slider } from 'src/molecules/Slider';
import { EndDoubleLabel } from 'src/molecules/end/EndDoubleLabel';
import { colors } from 'src/utils/colors';

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
  sliderProps: SliderProps;
  endLabelTitle: string;
  endLabelSubtitle: string;
};

type ListItemSliderState = {
  initialValue: number;
  currentValue: number;
};

export class ListItemSlider extends React.PureComponent<ListItemSliderProps, ListItemSliderState> {
  constructor(props: ListItemSliderProps) {
    super(props);
    this.state = {
      initialValue: props.sliderProps.initialValue,
      currentValue: props.sliderProps.initialValue,
    };

    this.onSliderChange = this.onSliderChange.bind(this);
  }

  onSliderChange(value: number) {
    this.setState({ currentValue: value });
    if (this.props.sliderProps.onChange) {
      this.props.sliderProps.onChange(value);
    }
  }

  render() {
    return (
      <View style={styles.Wrapper}>
        <View style={styles.Slider}>
          <Slider {...this.props.sliderProps} onChange={this.onSliderChange} />
        </View>
        <View style={styles.Label}>
          <EndDoubleLabel
            label={this.props.endLabelTitle}
            subtitle={this.props.endLabelSubtitle}
            labelColor={this.state.initialValue === this.state.currentValue ? undefined : 'brand'}
          />
        </View>
      </View>
    );
  }
}
