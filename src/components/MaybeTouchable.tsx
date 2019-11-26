import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Touchable } from '../components/Touchable';
import { colors } from '../utils/colors';
import { onIOS } from '../utils/const';

type MaybeTouchableProps = {
  children: JSX.Element;
  onPress?: () => any;
  borderRadius?: number;
  margin?: number;
  marginTop?: number;
  withShadow?: boolean;
  backgroundColor?: string;
};

const withStyle = (props: MaybeTouchableProps) =>
  ({
    flex: 1,
    backgroundColor: props.backgroundColor ?? props.onPress ? colors.ulisse : undefined,
    borderRadius: props.borderRadius,
    margin: props.margin,
    marginTop: props.marginTop,
    overflow: onIOS ? undefined : 'hidden',
    shadowRadius: props.withShadow ? 2 : undefined,
    shadowColor: props.withShadow ? colors.shadowBorder : undefined,
    shadowOffset: props.withShadow ? { height: 4, width: 0 } : undefined,
    shadowOpacity: props.withShadow ? 1 : undefined,
  } as ViewStyle);

const MaybeTouchableUnmemoized = (props: MaybeTouchableProps) => {
  if (!props.onPress) {
    return props.margin ? (
      <View style={{ flex: 1, margin: props.margin, marginTop: props.marginTop }}>
        {props.children}
      </View>
    ) : (
      props.children
    );
  }
  const touchable = (
    <Touchable style={(onIOS && withStyle(props)) || { flex: 1 }} onPress={props.onPress}>
      {props.children}
    </Touchable>
  );
  if (!props.withShadow) {
    return (
      <View style={{ flex: 1, margin: props.margin, marginTop: props.marginTop }}>{touchable}</View>
    );
  }
  return onIOS ? (
    touchable
  ) : (
    <View elevation={2} style={withStyle(props)}>
      {touchable}
    </View>
  );
};

export const MaybeTouchable = React.memo(MaybeTouchableUnmemoized);
