import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, Text } from 'react-native';
import { registeredTextStyle } from 'src/utils/textStyles';
import { colors } from 'src/utils/colors';

const styles = StyleSheet.create({
  Wrapper: {
    alignSelf: 'flex-start', // the only way to make sure that the element won't grow
    paddingHorizontal: 4,
    borderRadius: 7,
    height: 14,
    backgroundColor: colors.tertiary, // default bgState maps to this
  } as ViewStyle,
});

export type ChipProps = {
  label: string;
  bgState: 'default' | 'success' | 'error' | 'ulisse';
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
};

const getWrapperStyle = (
  labelStyle: ChipProps['bgState'],
  alignSelf: ChipProps['alignSelf']
): StyleProp<ViewStyle> => {
  switch (labelStyle) {
    case 'default':
      return [styles.Wrapper, { alignSelf }];
    default:
      return [styles.Wrapper, { alignSelf, backgroundColor: colors[labelStyle] }];
  }
};

const getTextStyle = (labelStyle: ChipProps['bgState']) => {
  switch (labelStyle) {
    case 'ulisse':
      return registeredTextStyle('micro', colors.uto, 'chip-text');
    default:
      return registeredTextStyle('micro', colors.ulisse, 'chip-text');
  }
};

export const ChipUnmemoized = ({ label, bgState, alignSelf }: ChipProps) => (
  <View style={getWrapperStyle(bgState, alignSelf)}>
    <Text style={getTextStyle(bgState)}>{label.toUpperCase()}</Text>
  </View>
);

export const Chip = React.memo(ChipUnmemoized);
