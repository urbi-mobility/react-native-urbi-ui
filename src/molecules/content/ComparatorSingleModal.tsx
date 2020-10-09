import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { registeredTextStyle, UrbiFontStyles } from 'src/utils/textStyles';
import { layoutStyles } from 'src/utils/styles';

const styles = StyleSheet.create({
  Wrapper: {
    height: 72,
    ...layoutStyles.ColumnJustifyStart,
    alignItems: 'flex-start',
    width: '60%',
  },
  Title: registeredTextStyle('title' as keyof UrbiFontStyles),
  Content: {
    ...layoutStyles.RowAlignCenter,
    justifyContent: 'flex-start',
  },
  BottomLabel: {
    ...registeredTextStyle('body' as keyof UrbiFontStyles),
    marginTop: 4,
  },
});

export type ComparatorSingleModalProps = {
  content: JSX.Element;
  title: string;
  bottomLabel?: string;
};

export const ComparatorSingleModalUnmemoized = ({
  title,
  content,
  bottomLabel,
}: ComparatorSingleModalProps) => (
  <View style={styles.Wrapper}>
    <Text style={styles.Title}>{title}</Text>
    <View style={styles.Content}>{content}</View>
    <Text style={styles.BottomLabel}>{bottomLabel}</Text>
  </View>
);

export const ComparatorSingleModal = React.memo(ComparatorSingleModalUnmemoized);
