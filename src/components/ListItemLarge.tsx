import React from 'react';
import { ImageStyle, StyleSheet, View, ViewStyle } from 'react-native';
import { ListItemProps, renderImageOrIcon } from 'src/components/ListItem';
import MaybeTouchable from 'src/components/MaybeTouchable';

const styles = StyleSheet.create({
  Wrapper: {
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
});

const withStyle = (props: ListItemProps) => {
  const { icon, content, end } = props;
  return React.cloneElement(content, {
    style: end || icon ? styles.ContentWithEnd : null,
  });
};

export const ListItemLargeUnmemoized = (props: ListItemProps) => (
  <MaybeTouchable onPress={props.onPress}>
    <View style={styles.Wrapper}>
      {withStyle(props)}
      {props.icon
        ? renderImageOrIcon(props.size ? props.size : 20, props.icon, props.iconColor)
        : null}
      {props.end}
    </View>
  </MaybeTouchable>
);

export default React.memo(ListItemLargeUnmemoized);
