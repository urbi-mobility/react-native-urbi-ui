import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from 'src/utils/colors';
import { ListItemStyles } from 'src/components/ListItem';
import { ListItemCompactStyles } from 'src/components/ListItemCompact';
import { ListItemLargeStyles } from 'src/components/ListItemLarge';

const sharedStyles = {
  SingleTextLineWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 8,
  } as ViewStyle,
  TwoTextLinesWrapper: {
    flexDirection: 'column',
    marginLeft: 8,
  } as ViewStyle,
};

const stylesRegular = StyleSheet.create({
  ...sharedStyles,
  Image: {
    backgroundColor: colors.ukko,
    height: 40,
    width: 40,
    borderRadius: 20,
    flexGrow: 0,
  },
  SingleTextLine: {
    backgroundColor: colors.ukko,
    width: 200,
    height: 20,
  },
  LineOne: {
    backgroundColor: colors.ukko,
    width: 200,
    height: 16,
    marginBottom: 8,
  },
  LineTwo: {
    backgroundColor: colors.ukko,
    width: 130,
    height: 10,
  },
});

const stylesCompact = StyleSheet.create({
  ...sharedStyles,
  Image: {
    backgroundColor: colors.ukko,
    height: 20,
    width: 20,
    borderRadius: 10,
    flexGrow: 0,
  },
  SingleTextLine: {
    backgroundColor: colors.ukko,
    width: 200,
    height: 16,
  },
  LineOne: {
    backgroundColor: colors.ukko,
    width: 200,
    height: 10,
    marginBottom: 6,
  },
  LineTwo: {
    backgroundColor: colors.ukko,
    width: 130,
    height: 8,
  },
});

type ListItemPlaceholderProps = {
  variant?: 'compact' | 'large';
  lines: 1 | 2;
  placeholderColor?: string;
};

const listItemStyles = {
  default: { ...ListItemStyles.ListItemWrapper, justifyContent: 'flex-start' } as ViewStyle,
  compact: { ...ListItemCompactStyles.ListItemWrapper, justifyContent: 'flex-start' } as ViewStyle,
  large: { ...ListItemLargeStyles.ListItemWrapper, justifyContent: 'flex-start' } as ViewStyle,
};

export const ListItemPlaceholderUnmemoized = (props: ListItemPlaceholderProps) => {
  const styles = props.variant === 'compact' ? stylesCompact : stylesRegular;
  const placeholderColor = props.placeholderColor
    ? { backgroundColor: props.placeholderColor }
    : undefined;

  return (
    <View style={listItemStyles[props.variant ?? 'default']}>
      <View style={props.placeholderColor ? [styles.Image, placeholderColor] : styles.Image} />
      {props.lines === 1 ? (
        <View style={styles.SingleTextLineWrapper}>
          <View
            style={
              props.placeholderColor
                ? [styles.SingleTextLine, placeholderColor]
                : styles.SingleTextLine
            }
          />
        </View>
      ) : (
        <View style={styles.TwoTextLinesWrapper}>
          <View
            style={props.placeholderColor ? [styles.LineOne, placeholderColor] : styles.LineOne}
          />
          <View
            style={props.placeholderColor ? [styles.LineTwo, placeholderColor] : styles.LineTwo}
          />
        </View>
      )}
    </View>
  );
};

export const ListItemPlaceholder = React.memo(ListItemPlaceholderUnmemoized);
