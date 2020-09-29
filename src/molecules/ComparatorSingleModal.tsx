import React from 'react';
import { StyleSheet, View, ViewStyle, Text } from 'react-native';
import { ChipLarge, ChipLargeProps } from 'src/molecules/ChipLarge';
import { colors } from 'src/utils/colors';

const styles = StyleSheet.create({
  ChipWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  DurationText: {
    color: colors.uto,
    fontSize: 11,
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    marginTop: 0,
  },
});

type ComparatorSingleModalProps = {
  chip: ChipLargeProps;
  bottomLabel: string;
  /**
   * The style for the bottom text label, default is 'body'.
   */
  bottomLabelStyle?: 'title' | 'body' | 'minDurationStyle';
  bottomLabelColor?: keyof typeof colors;
};

export const ComparatorSingleModalUnmemoized = (props: ComparatorSingleModalProps) => (
  <View style={styles.ChipWrapper}>
    <ChipLarge {...props.chip} />
    <Text style={styles.DurationText} numberOfLines={1}>
      {props.bottomLabel}
    </Text>
  </View>
);

export const ComparatorSingleModal = React.memo(ComparatorSingleModalUnmemoized);
