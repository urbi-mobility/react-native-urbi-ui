import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { EndDoubleLabel } from 'src/molecules/end/EndDoubleLabel';
import { Slider, SliderProps } from 'src/molecules/Slider';
import { onIOS } from 'src/utils/const';
import { SeparatorStyle } from './ListItem';

const styles = StyleSheet.create({
  SeparatorWrapper: {
    flex: 1,
  },
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    paddingLeft: onIOS ? 16 : 1,
    paddingRight: 12,
  } as ViewStyle,
  Slider: {
    flex: 1,
    marginRight: onIOS ? 4 : 0,
  },
  Label: {
    flexGrow: 0,
    width: onIOS ? 62 : 58,
  },
  Separator: SeparatorStyle,
});

type ListItemSliderProps = {
  sliderProps: SliderProps;
  endLabelTitle: string;
  endLabelSubtitle: string;
  /**
   * If set, width for the EndDoubleLabel will be set to this number.
   *
   * The default is 58 on Android, and 62 on iOS; set it to the widest
   * the label can go, so that the Slider on the left doesn't shrink or
   * grow according to its current value.
   */
  labelWidth?: number;
  withSeparator?: boolean;
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
    this.renderSlider = this.renderSlider.bind(this);
  }

  onSliderChange(value: number) {
    this.setState({ currentValue: value });
    if (this.props.sliderProps.onChange) {
      this.props.sliderProps.onChange(value);
    }
  }

  renderSlider() {
    const { endLabelTitle, endLabelSubtitle, labelWidth, sliderProps } = this.props;

    return (
      <View style={styles.Wrapper}>
        <View style={styles.Slider}>
          <Slider {...sliderProps} onChange={this.onSliderChange} />
        </View>
        <View style={labelWidth ? [styles.Label, { width: labelWidth }] : styles.Label}>
          <EndDoubleLabel
            label={endLabelTitle}
            subtitle={endLabelSubtitle}
            labelColor={this.state.initialValue === this.state.currentValue ? undefined : 'brand'}
          />
        </View>
      </View>
    );
  }

  render() {
    const { withSeparator } = this.props;

    return withSeparator ? (
      <View style={styles.SeparatorWrapper}>
        {this.renderSlider()}
        <View style={styles.Separator} />
      </View>
    ) : (
      this.renderSlider()
    );
  }
}
