import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from '../../utils/colors';
import { registeredTextStyle } from '../../utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    height: 48,
  } as ViewStyle,
});

export interface StatusProps {
  title: string;
  content: string;
  minWidth?: number;
  titleColor?: string;
  contentColor?: string;
}

const titleStyle = registeredTextStyle('title', colors.ulisse, 'statustitle');
const contentStyle = registeredTextStyle('title1', colors.ulisse, 'contenttitle');

export const StatusUnmemoized = (props: StatusProps) => (
  <View style={[styles.Wrapper, { minWidth: props.minWidth }]}>
    <Text
      style={props.titleColor ? [titleStyle, { color: props.titleColor }] : titleStyle}
      numberOfLines={1}
    >
      {props.title}
    </Text>
    <Text
      style={props.contentColor ? [contentStyle, { color: props.contentColor }] : contentStyle}
      numberOfLines={1}
    >
      {props.content}
    </Text>
  </View>
);

export const Status = React.memo(StatusUnmemoized);
