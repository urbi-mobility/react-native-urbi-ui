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
    marginTop: 8,
  },
  BottomPanel: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
  },
});

type ComparatorProps = {
  title: string;
  content?: JSX.Element;
  bottomLabel?: JSX.Element;
};

export const ComparatorUnmemoized = ({ title, content, bottomLabel }: ComparatorProps) => (
  <View style={[comparatorStyles.Wrapper, styles.Wrapper]}>
    <Text style={styles.Title}>{title}</Text>
    {content && <View style={styles.Content}>{content}</View>}
    <View style={styles.BottomPanel}>{bottomLabel}</View>
  </View>
);

export const Comparator = React.memo(ComparatorUnmemoized);
