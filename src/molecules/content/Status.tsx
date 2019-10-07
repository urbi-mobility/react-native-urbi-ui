import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

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
}

const titleStyle = registeredTextStyle('title', colors.ulisse, 'statustitle');
const contentStyle = registeredTextStyle('title1', colors.ulisse, 'statustitle');

export const Status = (props: StatusProps) => (
  <View style={[styles.Wrapper, { minWidth: props.minWidth }]}>
    <Text style={titleStyle} numberOfLines={1}>
      {props.title}
    </Text>
    <Text style={contentStyle} numberOfLines={1}>
      {props.content}
    </Text>
  </View>
);

export default React.memo(Status);
