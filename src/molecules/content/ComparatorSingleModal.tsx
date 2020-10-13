import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { registeredTextStyle } from 'src/utils/textStyles';
import { layoutStyles } from 'src/utils/styles';

const styles = StyleSheet.create({
  Wrapper: {
    height: 72,
    ...layoutStyles.ColumnJustifyStart,
    alignItems: 'flex-start',
    width: '60%',
  },
  Title: registeredTextStyle('title'),
  Content: {
    ...layoutStyles.RowAlignCenter,
    justifyContent: 'flex-start',
  },
  BottomLabel: {
    ...registeredTextStyle('body'),
    marginTop: 4,
  },
});

export type ComparatorSingleModalProps = {
  content: JSX.Element;
  title: string;
  bottomLabel?: string;
};

export const ComparatorSingleModalUnmemoized = (props: ComparatorSingleModalProps) => (
  <View style={styles.Wrapper}>
    <Text style={styles.Title}>{props.title}</Text>
    <View style={styles.Content}>{props.content}</View>
    <Text style={styles.BottomLabel}>{props.bottomLabel}</Text>
  </View>
);

export const ComparatorSingleModal = React.memo(ComparatorSingleModalUnmemoized);
