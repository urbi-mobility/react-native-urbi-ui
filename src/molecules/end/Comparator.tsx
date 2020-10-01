import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { registeredTextStyle, UrbiFontStyles } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  ComparatorBodyWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
  },
  EndWrapper: {
    height: 72,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
});

type ComparatorProps = {
  title: string;
  content: JSX.Element;
  bottomLabel: JSX.Element;
};

export const ComparatorUnmemoized = (props: ComparatorProps) => (
  <View style={styles.EndWrapper}>
    <Text style={registeredTextStyle('titleBold' as keyof UrbiFontStyles)}>{props.title}</Text>
    <View style={{ marginTop: 8 }}></View>
    <View style={styles.ComparatorBodyWrapper}>{props.content}</View>
  </View>
);

export const Comparator = React.memo(ComparatorUnmemoized);
