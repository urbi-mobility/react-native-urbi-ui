import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItemProps, maybeAddSeparator } from 'src/components/ListItem';
import { ListItemLargeStyles } from 'src/components/ListItemLarge';
import { MaybeTouchable } from 'src/components/MaybeTouchable';

const styles = StyleSheet.create(ListItemLargeStyles);

const renderListItem = (props: ListItemProps) => (
  <MaybeTouchable onPress={props.onPress} backgroundColor={props.backgroundColor} exactHeight={96}>
    <View style={{ ...styles.ListItemWrapper, height: 96 }}>
      {props.content}
      {props.end}
    </View>
  </MaybeTouchable>
);

export const ListItemComparatorUnmemoized = (props: ListItemProps) =>
  maybeAddSeparator(props, renderListItem);

export const ListItemComparator = React.memo(ListItemComparatorUnmemoized);
