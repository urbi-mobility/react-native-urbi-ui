import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { registeredTextStyle, UrbiFontStyles } from 'src/utils/textStyles';

export const layoutStyle = StyleSheet.create({
  ColumnJustifyStart: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  RowAlignCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  noPaddings: { paddingLeft: 0, paddingRight: 0 },
  margins: { marginRight: 2, marginTop: 4 },
});

const styles = StyleSheet.create({
  Wrapper: {
    height: 72,
    ...layoutStyle.ColumnJustifyStart,
    alignItems: 'flex-start',
    width: '60%',
  },
  Title: registeredTextStyle('title' as keyof UrbiFontStyles),
  Content: {
    ...layoutStyle.RowAlignCenter,
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
