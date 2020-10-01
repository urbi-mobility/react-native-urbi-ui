import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { registeredTextStyle, UrbiFontStyles } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    height: 72,
    paddingLeft: 10,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  Title: registeredTextStyle('title' as keyof UrbiFontStyles),
  Content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  BottomLabel: {
    ...registeredTextStyle('body' as keyof UrbiFontStyles),
    marginTop: 4,
  },
});

type ComparatorSingleModalProp = {
  title: string;
  content: JSX.Element;
  bottomLabel: string;
};

export const ComparatorSingleModalUnmemoized = (props: ComparatorSingleModalProp) => (
  <View style={styles.Wrapper}>
    <Text style={styles.Title}>{props.title}</Text>
    <View style={styles.Content}>{props.content}</View>
    <Text style={styles.BottomLabel}>{props.bottomLabel}</Text>
  </View>
);

export const ComparatorSingleModal = React.memo(ComparatorSingleModalUnmemoized);
