import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ChipLarge, ChipLargeProps } from 'src/molecules/ChipLarge';

const styles = StyleSheet.create({
  Wrapper: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 0,
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 1,
  } as ViewStyle,
});

type EndChipLargeProps = {
  chip: ChipLargeProps;
};

const EndChipLargeUnmemoized = (props: EndChipLargeProps) => (
  <View style={styles.Wrapper}>
    <ChipLarge {...props.chip} />
  </View>
);

export const EndChipLarge = React.memo(EndChipLargeUnmemoized);
