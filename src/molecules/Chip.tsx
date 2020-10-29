import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, Text } from 'react-native';
import { registeredTextStyle } from 'src/utils/textStyles';
import { colors } from 'src/utils/colors';

const styles = StyleSheet.create({
  Wrapper: {
    paddingHorizontal: 4,
    borderRadius: 7,
    height: 14,
    backgroundColor: colors.tertiary, // default bgState maps to this
  } as ViewStyle,
});

export type ChipProps = {
  label: string;
  bgState: 'default' | 'success' | 'error';
  bgColor?: 'ulisse' | 'brand';
  alignSelf?: 'flex-start' | 'center' | 'flex-end';
};

const chipText = registeredTextStyle('micro', colors.ulisse, 'chip-text');
const chipTextOnUlisse = registeredTextStyle('micro', colors.uto, 'chip-text-ulisse-bg');

const getWrapperStyle = (
  bgState: ChipProps['bgState'],
  alignSelf: ChipProps['alignSelf'],
  bgColor?: ChipProps['bgColor']
): StyleProp<ViewStyle> => {
  if (bgState === 'default') return [styles.Wrapper, { alignSelf }];
  if (bgColor) return [styles.Wrapper, { alignSelf, backgroundColor: colors[bgColor] }];
  return [styles.Wrapper, { alignSelf, backgroundColor: colors[bgState] }];
};

export const ChipUnmemoized = ({ label, bgState, alignSelf, bgColor }: ChipProps) => (
  <View style={getWrapperStyle(bgState, alignSelf, bgColor)}>
    <Text style={bgColor === 'ulisse' ? chipTextOnUlisse : chipText}>{label.toUpperCase()}</Text>
  </View>
);

ChipUnmemoized.defaultProps = {
  alignSelf: 'flex-start',
};

export const Chip = React.memo(ChipUnmemoized);
