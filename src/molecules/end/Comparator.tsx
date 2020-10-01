import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { registeredTextStyle, UrbiFontStyles } from 'src/utils/textStyles';
import { comparatorStyles } from '../content/ComparatorSingleModal';

const styles = StyleSheet.create({
  Wrapper: {
    alignItems: 'flex-end',
  },
  Title: registeredTextStyle('titleBold' as keyof UrbiFontStyles),
  Content: {
    marginBottom: 8,
    marginTop: 8,
  },
  BottomPanel: {
    display: 'flex',
    flexDirection: 'row',
  },
});

type ComparatorProps = {
  title: string;
  content: JSX.Element;
  bottomLabel: JSX.Element;
};

export const ComparatorUnmemoized = (props: ComparatorProps) => (
  <View style={[comparatorStyles.Wrapper, styles.Wrapper]}>
    <Text style={styles.Title}>{props.title}</Text>
    <View style={styles.Content}>{props.content}</View>
    <View style={styles.BottomPanel}>{props.bottomLabel}</View>
  </View>
);

export const Comparator = React.memo(ComparatorUnmemoized);
