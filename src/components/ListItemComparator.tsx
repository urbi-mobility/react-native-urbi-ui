import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItemProps, SeparatorStyle } from '../components/ListItem';
import { ListItemLargeStyles } from '../components/ListItemLarge';

const styles = StyleSheet.create(ListItemLargeStyles);

const ListItemComparatorUnmemoized = (props: ListItemProps) => (
  <>
    <View style={{ ...styles.ListItemWrapper, height: 96 }}>
      {props.content}
      {props.end}
    </View>
    <View style={SeparatorStyle} />
  </>
);

export const ListItemComparator = React.memo(ListItemComparatorUnmemoized);
