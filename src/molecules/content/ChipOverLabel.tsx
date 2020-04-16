import React from 'react';
import { StyleSheet, View, ViewStyle, Text } from 'react-native';
import { ChipLarge, ChipLargeProps } from '../../molecules/ChipLarge';
import { colors } from '../../utils/colors';
import { registeredTextStyle } from '../../utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    height: 46,
    minHeight: 46,
  } as ViewStyle,
  ChipWrapper: {
    flexDirection: 'row',
  },
  Text: {
    marginTop: 4,
    marginRight: 20,
  },
});

type ChipOverLabelProps = {
  chip: ChipLargeProps;
  label: string;
  /**
   * The style for the text label, default is 'body'.
   */
  labelStyle?: 'title' | 'body';
  labelColor?: keyof typeof colors;
};

const defaultTextStyles = {
  title: { ...styles.Text, ...registeredTextStyle('title', colors.uma, 'title') },
  body: { ...styles.Text, ...registeredTextStyle('body', colors.uma, 'body') },
};

const getTextStyle = (props: ChipOverLabelProps) =>
  props.labelColor
    ? {
        ...styles.Text,
        ...registeredTextStyle(props.labelStyle ?? 'body', props.labelColor, 'text'),
      }
    : defaultTextStyles[props.labelStyle ?? 'body'];

export const ChipOverLabelUnmemoized = (props: ChipOverLabelProps) => (
  <View style={styles.Wrapper}>
    <View style={styles.ChipWrapper}>
      <ChipLarge {...props.chip} />
    </View>
    <Text style={getTextStyle(props)} numberOfLines={1}>
      {props.label}
    </Text>
  </View>
);

export const ChipOverLabel = React.memo(ChipOverLabelUnmemoized);
