import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItemProps } from '../components/ListItem';
import { MaybeTouchable } from './MaybeTouchable';

const styles = StyleSheet.create({
  Wrapper: {
    height: 40,
    paddingTop: 4,
    paddingRight: 12,
    paddingBottom: 4,
    paddingLeft: 16,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContentWithEnd: { flex: 3, marginRight: 8 },
  ContentWithAction: { marginRight: 8 },
});

const withStyle = (props: ListItemProps) => {
  const { icon, content, end } = props;
  return React.cloneElement(content, {
    style: end ? styles.ContentWithEnd : icon ? styles.ContentWithAction : null,
  });
};

const ListItemCompactUnmemoized = (props: ListItemProps) => (
  <MaybeTouchable onPress={props.onPress} backgroundColor={props.backgroundColor}>
    <View style={styles.Wrapper}>
      {withStyle(props)}
      {props.end || props.icon || null}
    </View>
  </MaybeTouchable>
);

export const ListItemCompact = React.memo(ListItemCompactUnmemoized);
