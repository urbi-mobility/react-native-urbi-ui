import React from 'react';
import { Image, ImageRequireSource, ImageStyle, StyleSheet, View, ViewStyle } from 'react-native';
import { Icon } from '../utils/const';
import { MaybeTouchable } from './MaybeTouchable';

type Styles = {
  Wrapper: ViewStyle;
  ContentWithEnd: ViewStyle;
  Action: ImageStyle;
};

const styles: Styles = StyleSheet.create({
  Wrapper: {
    height: 56,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 12,
    paddingLeft: 16,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,
  ContentWithEnd: {
    flex: 1,
    marginRight: 8,
    minWidth: '60%',
  } as ViewStyle,
  End: { marginRight: 12 } as ViewStyle,
  Action: {
    width: 20,
    height: 20,
  } as ImageStyle,
});

export type ListItemProps = {
  size?: number;
  content: JSX.Element;
  icon?: ImageRequireSource | string;
  end?: JSX.Element;
  onPress?: () => any;
  iconColor?: string;
};

const Content = (props: ListItemProps) => {
  const { icon, content, end } = props;
  return React.cloneElement(content, {
    style: end || icon ? styles.ContentWithEnd : null,
  });
};

export const renderImageOrIcon = (
  size: number,
  image?: ImageRequireSource | string,
  iconColor?: string
) => {
  if (typeof image === 'string') {
    return <Icon name={image!} size={size} color={iconColor} />;
  } else return <Image source={image!} style={styles.Action} />;
};

export const ListItemUnmemoized = (props: ListItemProps) => (
  <MaybeTouchable onPress={props.onPress}>
    <View style={styles.Wrapper}>
      {Content(props)}
      {props.icon
        ? renderImageOrIcon(props.size ? props.size : 20, props.icon, props.iconColor)
        : null}
      {props.end}
    </View>
  </MaybeTouchable>
);

export const ListItem = React.memo(ListItemUnmemoized);
