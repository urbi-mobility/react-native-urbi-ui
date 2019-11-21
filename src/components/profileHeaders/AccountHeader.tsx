import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '../../utils/colors';
import { MaybeTouchable } from '../MaybeTouchable';
import { ImageAndStatus, ImageAndStatusProps } from './ImageAndStatus';

export const headerShadowStyle = {
  marginBottom: 8,
  shadowRadius: 4,
  shadowOffset: { height: 2, width: 0 },
  shadowColor: colors.shadowBorder,
  shadowOpacity: 1,
};

export const headerHeight = 120; // TODO fix this with flex, it's padding + Status.height + margin

const styles = StyleSheet.create({
  Wrapper: {
    ...headerShadowStyle,
    height: headerHeight,
  },
  ContentWrapper: {
    flexGrow: 1,
    backgroundColor: colors.ulisse,
    paddingTop: 40,
    paddingBottom: 32,
    paddingRight: 12,
    paddingLeft: 16,
  } as ViewStyle,
});

interface AccountHeaderProps extends ImageAndStatusProps {
  onPress: () => any;
}

export const AccountHeaderUnmemoized = (props: AccountHeaderProps) => (
  <View style={styles.Wrapper}>
    <MaybeTouchable onPress={props.onPress}>
      <View style={styles.ContentWrapper}>
        <ImageAndStatus {...props} />
      </View>
    </MaybeTouchable>
  </View>
);

export const AccountHeader = React.memo(AccountHeaderUnmemoized);
