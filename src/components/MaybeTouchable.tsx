import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Touchable } from 'src/components/Touchable';
import { Testable } from 'src/types';
import { colors } from 'src/utils/colors';
import { onIOS } from 'src/utils/const';

interface MaybeTouchableProps extends Testable {
  children: JSX.Element;
  onPress?: () => any;
  borderRadius?: number;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  withShadow?: boolean;
  backgroundColor?: string;
  exactHeight?: number;
}

const withStyle = (props: MaybeTouchableProps) =>
  ({
    flex: 1,
    backgroundColor: props.backgroundColor ?? props.onPress ? colors.ulisse : undefined,
    borderRadius: props.borderRadius,
    margin: props.margin,
    marginTop: props.marginTop,
    marginBottom: props.marginBottom,
    overflow: onIOS ? undefined : 'hidden',
    shadowRadius: props.withShadow ? 2 : undefined,
    shadowColor: props.withShadow ? colors.shadowBorder : undefined,
    shadowOffset: props.withShadow ? { height: 4, width: 0 } : undefined,
    shadowOpacity: props.withShadow ? 1 : undefined,
  } as ViewStyle);

const childrenWithBackground = (props: MaybeTouchableProps) => {
  const { backgroundColor, children } = props;
  return backgroundColor
    ? React.cloneElement(children, { style: { ...(children.props.style ?? {}), backgroundColor } })
    : children;
};

const MaybeTouchableUnmemoized = (props: MaybeTouchableProps) => {
  const {
    backgroundColor,
    borderRadius,
    exactHeight,
    margin,
    marginTop,
    marginBottom,
    onPress,
    withShadow,
  } = props;

  if (!onPress) {
    return margin ? (
      <View style={withStyle(props)} elevation={withShadow ? 3 : undefined}>
        {childrenWithBackground(props)}
      </View>
    ) : (
      childrenWithBackground(props)
    );
  }

  const touchable = (
    <Touchable
      style={
        exactHeight
          ? {
              flexBasis: exactHeight,
              flexGrow: 1,
              flexShrink: 0,
              backgroundColor,
              borderRadius,
              overflow: onIOS ? undefined : 'hidden',
            }
          : onIOS
          ? withStyle(props)
          : { flex: 1, backgroundColor }
      }
      onPress={onPress}
      testID={props.testID}
    >
      {childrenWithBackground(props)}
    </Touchable>
  );

  if (!props.withShadow) {
    return (
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'flex-start',
          maxHeight: exactHeight,
          margin,
          marginTop,
          marginBottom,
          backgroundColor,
          borderRadius,
          overflow: onIOS ? undefined : 'hidden',
        }}
      >
        {touchable}
      </View>
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
