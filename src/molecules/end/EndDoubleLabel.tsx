import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from '../../utils/colors';
import { registeredTextStyle } from '../../utils/textStyles';

type EndDoubleLabelProps = {
  label: string;
  labelColor?: keyof typeof colors;
  subtitle: string;
  subtitleColor?: keyof typeof colors;
  style?: ViewStyle;
};

const styles = StyleSheet.create({
  Wrapper: {
    height: 40,
    justifyContent: 'center',
    flex: 0,
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 1,
  },
  Text: {
    textAlign: 'right',
  },
});

const labelStyle = {
  ...registeredTextStyle('titleBold', colors.uma, 'EndDoubleLabel'),
  ...styles.Text,
};
const subtitleStyle = {
  ...registeredTextStyle('body', colors.uto, 'EndDoubleLabelSubtitle'),
  ...styles.Text,
};

const EndDoubleLabelUnmemoized = (props: EndDoubleLabelProps) => (
  <View style={[styles.Wrapper, props.style]}>
    <Text
      style={props.labelColor ? [labelStyle, { color: colors[props.labelColor] }] : labelStyle}
      numberOfLines={1}
    >
      {props.label}
    </Text>
    <Text
      style={
        props.subtitleColor
          ? [subtitleStyle, { color: colors[props.subtitleColor] }]
          : subtitleStyle
      }
      numberOfLines={1}
    >
      {props.subtitle}
    </Text>
  </View>
);

export const EndDoubleLabel = React.memo(EndDoubleLabelUnmemoized);
