import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

export type EndLabelProps = {
  label: string;
  style?: ViewStyle;
  textColor?: keyof typeof colors;
};

export const endLabelStyles = {
  Wrapper: {
    height: 40,
    justifyContent: 'center',
    flex: 0,
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 1,
  } as ViewStyle,
  Text: {
    textAlign: 'right',
  } as TextStyle,
};

const styles = StyleSheet.create(endLabelStyles);

export const labelStyle = registeredTextStyle('titleBold', colors.uma, 'EndLabel');

const EndLabelUnmemoized = (props: EndLabelProps) => (
  <View style={[styles.Wrapper, props.style]}>
    <Text
      style={[labelStyle, styles.Text, { color: colors[props.textColor] || colors.uma }]}
      numberOfLines={1}
    >
      {props.label}
    </Text>
  </View>
);

export const EndLabel = React.memo(EndLabelUnmemoized);
