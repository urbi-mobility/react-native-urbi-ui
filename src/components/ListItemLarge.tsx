import React from 'react';
import { ImageStyle, StyleSheet, View, ViewStyle } from 'react-native';
import { ListItemProps, renderImageOrIcon, maybeAddSeparator } from '../components/ListItem';
import { MaybeTouchable } from '../components/MaybeTouchable';

export const ListItemLargeStyles = {
  ListItemWrapper: {
    height: 70,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 12,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,
  ContentWithEnd: { flex: 1, marginRight: 8, minWidth: '60%' },
  Action: {
    width: 20,
    height: 20,
  } as ImageStyle,
};

const styles = StyleSheet.create(ListItemLargeStyles);

const withStyle = (props: ListItemLargeProps) => {
  const { icon, content, end } = props;
  return end || icon
    ? React.cloneElement(content, {
        style: styles.ContentWithEnd,
      })
    : content;
};

const getCustomStyle = (height: number) => {
  return {
    ...styles.ListItemWrapper,
    height,
  };
};

const renderListItem = (props: ListItemLargeProps) => (
  <MaybeTouchable
    onPress={props.onPress}
    backgroundColor={props.backgroundColor}
    exactHeight={props.height}
  >
    <View style={getCustomStyle(props.height)}>
      {withStyle(props)}
      {props.icon
        ? renderImageOrIcon(props.size ? props.size : 20, props.icon, props.iconColor)
        : null}
      {props.end}
    </View>
  </MaybeTouchable>
);

interface ListItemLargeProps extends ListItemProps {
  height?: number;
}

export const ListItemLargeUnmemoized = (props: ListItemLargeProps) =>
  maybeAddSeparator(props, renderListItem);

ListItemLargeUnmemoized.defaultProps = {
  height: 70,
};

export const ListItemLarge = React.memo(ListItemLargeUnmemoized);
