import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from 'src/utils/colors';
import { registeredTextStyle, UrbiFontStyles } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  ComparatorWrapper: {
    height: 72,
    paddingLeft: 10,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  ChipWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  BottomLabel: {
    marginTop: 4,
  },
});

type ComparatorSingleModalProp = {
  title: string;
  content: JSX.Element;
  bottomLabel: string;
};

export const ComparatorSingleModalUnmemoized = (props: ComparatorSingleModalProp) => (
  <View style={styles.ComparatorWrapper}>
    <Text style={[registeredTextStyle('title' as keyof UrbiFontStyles)]}>{props.title}</Text>
    <View style={styles.ChipWrapper}>{props.content}</View>
    <Text style={[registeredTextStyle('body' as keyof UrbiFontStyles), styles.BottomLabel]}>
      {props.bottomLabel}
    </Text>
  </View>
);

export const ComparatorSingleModal = React.memo(ComparatorSingleModalUnmemoized);
