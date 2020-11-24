import React from 'react';
import { RegisteredStyle, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

type LabelProps = {
  text: string;
  style?: ViewStyle | RegisteredStyle<ViewStyle>;
  textColor?: string;
  numberOfLines?: 1 | 2;
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
});

const textStyle = registeredTextStyle('title', colors.uma, 'Label');

export const LabelUnmemoized = (props: LabelProps) => (
  <View style={[styles.Wrapper, props.style]}>
    <Text
      style={[textStyle, { color: props.textColor || colors.uma }]}
      numberOfLines={props.numberOfLines ?? 1}
    >
      {props.text}
    </Text>
  </View>
);

export const Label = React.memo(LabelUnmemoized);
