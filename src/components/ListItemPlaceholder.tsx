import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ListItemStyles } from './ListItem';
import { ListItemLargeStyles } from './ListItemLarge';
import { ListItemCompactStyles } from './ListItemCompact';
import { colors } from 'src/utils/colors';

const styles = StyleSheet.create({
  Image: {
    backgroundColor: colors.ukko,
    height: 40,
    width: 40,
    borderRadius: 20,
    flexGrow: 0,
  },
  ImageCompact: {
    backgroundColor: colors.ukko,
    height: 20,
    width: 20,
    borderRadius: 10,
    flexGrow: 0,
  },
  SingleTextLine: {
    backgroundColor: colors.ukko,
    width: 200,
    height: 20,
  },
  SingleTextLineCompact: {
    backgroundColor: colors.ukko,
    width: 200,
    height: 16,
  },
  LineOne: {
    backgroundColor: colors.ukko,
    width: 200,
    height: 18,
    marginBottom: 4,
  },
  LineOneCompact: {
    backgroundColor: colors.ukko,
    width: 200,
    height: 14,
    marginBottom: 4,
  },
  LineTwo: {
    backgroundColor: colors.ukko,
    width: 200,
    height: 18,
  },
  LineTwoCompact: {
    backgroundColor: colors.ukko,
    width: 200,
    height: 14,
  },
  SingleTextLineWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 8,
  },
  TwoTextLinesWrapper: {
    flexDirection: 'column',
    marginLeft: 8,
  },
});

type ListItemPlaceholderProps = {
  variant?: 'compact' | 'large';
  lines: 1 | 2;
};

const listItemStyles = {
  default: { ...ListItemStyles.ListItemWrapper, justifyContent: 'flex-start' } as ViewStyle,
  compact: { ...ListItemCompactStyles.ListItemWrapper, justifyContent: 'flex-start' } as ViewStyle,
  large: { ...ListItemLargeStyles.ListItemWrapper, justifyContent: 'flex-start' } as ViewStyle,
};

export const ListItemPlaceholderUnmemoized = (props: ListItemPlaceholderProps) => (
  <View style={listItemStyles[props.variant ?? 'default']}>
    <View style={props.variant === 'compact' ? styles.ImageCompact : styles.Image} />
    {props.lines === 1 ? (
      <View style={styles.SingleTextLineWrapper}>
        <View
          style={props.variant === 'compact' ? styles.SingleTextLineCompact : styles.SingleTextLine}
        />
      </View>
    ) : (
      <View style={styles.TwoTextLinesWrapper}>
        <View style={props.variant === 'compact' ? styles.LineOneCompact : styles.LineOne} />
        <View style={props.variant === 'compact' ? styles.LineTwoCompact : styles.LineTwo} />
      </View>
    )}
  </View>
);

export const ListItemPlaceholder = React.memo(ListItemPlaceholderUnmemoized);
