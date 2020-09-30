import React from 'react';
import { ImageRequireSource, StyleSheet, View, ViewStyle, StyleProp, Text } from 'react-native';
import { ChipLarge, ChipLargeProps } from 'src/molecules/ChipLarge';
import { colors } from 'src/utils/colors';
import { registeredTextStyle, UrbiFontStyles } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
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
};

export const ComparatorSingleModalUnmemoized = (props: ComparatorSingleModalProps) => (
  <View style={styles.Wrapper}>
    <ChipLarge label="" color={colors.transparent} colorIsLight={true} {...props.chip} />
    <Text
      style={[
        registeredTextStyle('micro' as keyof UrbiFontStyles),
        { ...props.chip?.containerStyle },
      ]}
      numberOfLines={1}
    >
      {props.bottomLabel}
    </Text>
  </View>
);

export const ComparatorSingleModal = React.memo(ComparatorSingleModalUnmemoized);
