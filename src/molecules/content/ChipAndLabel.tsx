import React from 'react';
import { StyleSheet, View, ViewStyle, Text } from 'react-native';
import { ChipLarge, ChipLargeProps } from 'src/molecules/ChipLarge';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    minHeight: 40,
    alignItems: 'center',
  } as ViewStyle,
  Text: {
    marginLeft: 6,
  },
});

type ChipAndLabelProps = {
  chip: ChipLargeProps;
  label: string;
  /**
   * The style for the text label, default is 'title'.
   */
  labelStyle?: 'title' | 'body';
  labelColor?: keyof typeof colors;
};

const defaultTextStyles = {
  title: { ...styles.Text, ...registeredTextStyle('title', colors.uma, 'title') },
  body: { ...styles.Text, ...registeredTextStyle('body', colors.uma, 'body') },
};

const getTextStyle = (props: ChipAndLabelProps) =>
  props.labelColor
    ? {
        ...styles.Text,
        ...registeredTextStyle(props.labelStyle ?? 'title', props.labelColor, 'text'),
      }
    : defaultTextStyles[props.labelStyle ?? 'title'];

export const ChipAndLabelUnmemoized = (props: ChipAndLabelProps) => (
  <View style={styles.Wrapper}>
    <ChipLarge {...props.chip} />
    <Text style={getTextStyle(props)}>{props.label}</Text>
  </View>
);

export const ChipAndLabel = React.memo(ChipAndLabelUnmemoized);
