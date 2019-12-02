import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '../../utils/colors';
import { onIOS } from '../../utils/const';
import { Touchable } from '../Touchable';
import { ImageAndStatus, ImageAndStatusProps } from './ImageAndStatus';

export const headerShadowStyle = {
  backgroundColor: colors.ulisse,
  marginBottom: onIOS ? 8 : 0,
  shadowRadius: 4,
  shadowOffset: { height: 2, width: 0 },
  shadowColor: colors.shadowBorder,
  shadowOpacity: 1,
};

export const headerHeight = 112; // TODO fix this with flex, it's padding + Status.height + margin

const styles = StyleSheet.create({
  Wrapper: headerShadowStyle,
  ContentWrapper: {
    height: headerHeight,
    backgroundColor: colors.ulisse,
    paddingVertical: 32,
    paddingRight: 12,
    paddingLeft: 16,
  } as ViewStyle,
});

interface AccountHeaderProps extends ImageAndStatusProps {
  onPress: () => any;
  flexExpand?: boolean;
}

export const AccountHeaderUnmemoized = (props: AccountHeaderProps) => (
  <View style={props.flexExpand ? [styles.Wrapper, { flex: 1 }] : styles.Wrapper} elevation={5}>
    <Touchable onPress={props.onPress}>
      <View style={styles.ContentWrapper}>
        <ImageAndStatus {...props} />
      </View>
    </Touchable>
  </View>
);

export const AccountHeader = React.memo(AccountHeaderUnmemoized);
