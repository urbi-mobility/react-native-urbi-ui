import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItemTextInput } from './ListItemTextInput';

type ListItemFormProps = {
  component: React.ReactElement<typeof ListItemTextInput>;
};

const styles = StyleSheet.create({
  Wrapper: {
    marginLeft: 20,
    marginRight: 8,
  },
});

const ListItemFormUnmemoized = (props: ListItemFormProps) => (
  <View style={styles.Wrapper}>{props.component}</View>
);

export const ListItemForm = React.memo(ListItemFormUnmemoized);
