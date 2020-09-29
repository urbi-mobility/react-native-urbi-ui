import React from 'react';
import {
  Image,
  ImageRequireSource,
  ImageStyle,
  StyleSheet,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { colors } from 'src/utils/colors';
import { Icon } from '../utils/const';
import { MaybeTouchable } from './MaybeTouchable';

export const SeparatorStyle = {
  height: 1,
  backgroundColor: colors.ursula,
  marginLeft: 16,
  marginRight: 12,
  borderRadius: 0.5,
};

export const ListItemStyles = {
  Wrapper: {
    flex: 1,
  },
  ListItemWrapper: {
    height: 56,
    minHeight: 56,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 12,
    paddingLeft: 16,
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,
  ContentWithEnd: {
    flex: 1,
    marginRight: 8,
    minWidth: '60%',
  } as ViewStyle,
  End: { marginRight: 12 },
  Action: {
    width: 20,
    height: 20,
  } as ImageStyle,
  Separator: SeparatorStyle,
};

const styles = StyleSheet.create(ListItemStyles);

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
  return end || icon
    ? React.cloneElement(content, {
        style: styles.ContentWithEnd,
      })
    : content;
};

export const renderImageOrIcon = (
  size: number,
  image?: ImageRequireSource | string,
  iconColor?: string,
  style?: StyleProp<ViewStyle>
) => {
  if (typeof image === 'string') {
    return <Icon name={image!} size={size} color={iconColor} style={style!} />;
  } else return <Image source={image!} style={styles.Action} />;
};

const renderListItem = (props: ListItemProps) => (
  <MaybeTouchable onPress={props.onPress} backgroundColor={props.backgroundColor} exactHeight={56}>
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
    <View
      style={
        props.backgroundColor
          ? [styles.Wrapper, { backgroundColor: props.backgroundColor }]
          : styles.Wrapper
      }
    >
      {renderFn(props)}
      <View style={styles.Separator} />
    </View>
  ) : (
    renderFn(props)
  );

export const ListItemUnmemoized = (props: ListItemProps) =>
  maybeAddSeparator(props, renderListItem);

export const ListItem = React.memo(ListItemUnmemoized);
