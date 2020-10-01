import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { registeredTextStyle, UrbiFontStyles } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    height: 72,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  BottomPanel: {
    display: 'flex',
    flexDirection: 'row',
  },
  LineSpacing: {
    marginBottom: 8,
    marginTop: 8,
  },
  Title: registeredTextStyle('titleBold' as keyof UrbiFontStyles),
});

type ComparatorProps = {
  title: string;
  content: JSX.Element;
  bottomLabel: JSX.Element;
};

export const ComparatorUnmemoized = (props: ComparatorProps) => (
  <View style={styles.Wrapper}>
    <Text style={styles.Title}>{props.title}</Text>
    <View style={styles.LineSpacing}>{props.content}</View>
    <View style={styles.BottomPanel}>{props.bottomLabel}</View>
  </View>
);

export const Comparator = React.memo(ComparatorUnmemoized);
