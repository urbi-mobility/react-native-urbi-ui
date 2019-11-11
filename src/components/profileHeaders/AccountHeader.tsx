import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/colors';
import { onIOS, statusBarOffset } from '../../utils/const';
import { MaybeTouchable } from '../MaybeTouchable';
import { ImageAndStatus, ImageAndStatusProps } from './ImageAndStatus';

// on iOS we need to rely on a hack inside the view, so we account for the offset there
export const navigationTopPadding = (onIOS ? 0 : statusBarOffset) + 40;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    paddingTop: 8 + navigationTopPadding,
    paddingRight: 12,
    paddingBottom: 32,
    paddingLeft: 16,
  } as ViewStyle,
});

interface AccountHeaderProps extends ImageAndStatusProps {
  onPress: () => any;
}

export const AccountHeaderUnmemoized = (props: AccountHeaderProps) => (
  <MaybeTouchable onPress={props.onPress}>
    <LinearGradient style={styles.Wrapper} colors={[colors.secondary, colors.uma]}>
      <ImageAndStatus {...props} />
    </LinearGradient>
  </MaybeTouchable>
);

export const AccountHeader = React.memo(AccountHeaderUnmemoized);
