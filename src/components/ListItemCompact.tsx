import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ListItemProps, maybeAddSeparator, renderImageOrIcon } from '../components/ListItem';
import { MaybeTouchable } from './MaybeTouchable';

export const ListItemCompactStyles = {
  ListItemWrapper: {
    height: 40,
    paddingTop: 4,
    paddingRight: 12,
    paddingBottom: 4,
    paddingLeft: 16,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  ContentWithEnd: { flex: 3, marginRight: 8 },
  ContentWithAction: { marginRight: 8 },
};

const styles = StyleSheet.create(ListItemCompactStyles);

const withStyle = (props: ListItemProps) => {
  const { icon, content, end } = props;
  return React.cloneElement(content, {
    style: end ? styles.ContentWithEnd : icon ? styles.ContentWithAction : null,
  });
};

const renderListItem = (props: ListItemProps) => (
  <MaybeTouchable onPress={props.onPress} backgroundColor={props.backgroundColor}>
    <View style={styles.ListItemWrapper}>
      {withStyle(props)}
      {props.end || props.icon
        ? renderImageOrIcon(props.size ?? 20, props.icon, props.iconColor)
        : null}
    </View>
  </MaybeTouchable>
);

const ListItemCompactUnmemoized = (props: ListItemProps) =>
  maybeAddSeparator(props, renderListItem);

export const ListItemCompact = React.memo(ListItemCompactUnmemoized);
