import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItemProps, maybeAddSeparator } from '../components/ListItem';
import { ListItemLargeStyles } from '../components/ListItemLarge';
import { MaybeTouchable } from '../components/MaybeTouchable';

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
