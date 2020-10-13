import React from 'react';
import { FlexStyle, StyleProp, StyleSheet, View, ViewStyle, Text } from 'react-native';
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
  bgState: 'default' | 'success' | 'error' | 'ulisse' | 'brand';
  alignSelf?: FlexStyle['alignSelf'];
};

const chipText = registeredTextStyle('micro', colors.ulisse, 'chip-text');
const chipTextOnUlisse = registeredTextStyle('micro', colors.uto, 'chip-text-ulisse-bg');

const getWrapperStyle = (
  bgState: ChipProps['bgState'],
  alignSelf: ChipProps['alignSelf']
): StyleProp<ViewStyle> => {
  switch (bgState) {
    case 'default':
      return [styles.Wrapper, { alignSelf }];
    default:
      return [styles.Wrapper, { alignSelf, backgroundColor: colors[bgState] }];
  }
};

export const ChipUnmemoized = ({ label, bgState, alignSelf }: ChipProps) => (
  <View style={getWrapperStyle(bgState, alignSelf)}>
    <Text style={bgState === 'ulisse' ? chipTextOnUlisse : chipText}>{label.toUpperCase()}</Text>
  </View>
);

ChipUnmemoized.defaultProps = {
  alignSelf: 'flex-start',
};

export const Chip = React.memo(ChipUnmemoized);
