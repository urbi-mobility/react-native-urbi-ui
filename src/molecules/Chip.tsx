import React from 'react';
import { StyleSheet, View, ViewStyle, Text } from 'react-native';
import { registeredTextStyle } from 'src/utils/textStyles';
import { colors } from 'src/utils/colors';

const styles = StyleSheet.create({
  Wrapper: {
    alignSelf: 'flex-start', // the only way to make sure that the element won't grow
    paddingHorizontal: 4,
    borderRadius: 7,
    height: 14,
    backgroundColor: colors.tertiary,
  } as ViewStyle,
  Text: registeredTextStyle('micro', colors.ulisse, 'chip-text'),
});

type ChipProps = {
  label: string;
  bgState: 'default' | 'success' | 'error';
};

export const ChipUnmemoized = (props: ChipProps) => (
  <View
    style={
      props.bgState === 'default'
        ? styles.Wrapper
        : [styles.Wrapper, { backgroundColor: colors[props.bgState] }]
    }
  >
    <Text style={styles.Text}>{props.label.toUpperCase()}</Text>
  </View>
);

export const Chip = React.memo(ChipUnmemoized);
