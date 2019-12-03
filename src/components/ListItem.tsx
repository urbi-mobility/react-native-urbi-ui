import React from 'react';
import { Image, ImageRequireSource, ImageStyle, StyleSheet, View, ViewStyle } from 'react-native';
import { Icon } from '../utils/const';
import { MaybeTouchable } from './MaybeTouchable';
import { colors } from 'src/utils/colors';

type Styles = {
  Wrapper: ViewStyle;
  ListItemWrapper: ViewStyle;
  ContentWithEnd: ViewStyle;
  Action: ImageStyle;
  Separator: ViewStyle;
};

const styles: Styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
  ListItemWrapper: {
    height: 56,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 12,
    paddingLeft: 16,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ContentWithEnd: {
    flex: 1,
    marginRight: 8,
    minWidth: '60%',
  },
  End: { marginRight: 12 },
  Action: {
    width: 20,
    height: 20,
  } as ImageStyle,
  Separator: {
    height: 1,
    backgroundColor: colors.ursula,
    marginLeft: 16,
    marginRight: 12,
    borderRadius: 0.5,
  },
});

export type ListItemProps = {
  size?: number;
  content: JSX.Element;
  icon?: ImageRequireSource | string;
  end?: JSX.Element;
  onPress?: () => any;
  iconColor?: string;
  backgroundColor?: string;
  withSeparator?: boolean;
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

const renderListItem = (props: ListItemProps) => (
  <MaybeTouchable onPress={props.onPress} backgroundColor={props.backgroundColor}>
    <View style={styles.ListItemWrapper}>
      {Content(props)}
      {props.icon
        ? renderImageOrIcon(props.size ? props.size : 20, props.icon, props.iconColor)
        : null}
      {props.end}
    </View>
  </MaybeTouchable>
);

export const maybeAddSeparator = (props: ListItemProps, renderFn: (props: ListItemProps) => any) =>
  props.withSeparator ? (
    <View style={styles.Wrapper}>
      {renderFn(props)}
      <View style={styles.Separator} />
    </View>
  ) : (
    renderFn(props)
  );

export const ListItemUnmemoized = (props: ListItemProps) =>
  maybeAddSeparator(props, renderListItem);

export const ListItem = React.memo(ListItemUnmemoized);
