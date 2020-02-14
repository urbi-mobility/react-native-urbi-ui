import React from 'react';
import { Image, ImageRequireSource, ImageStyle, StyleSheet, View, ViewStyle } from 'react-native';
import { withPixelDensity } from '../../utils/functions';

const styles = StyleSheet.create({
  Wrapper: {
    flexGrow: 1,
    flexShrink: 0,
    alignItems: 'flex-end',
    marginLeft: 8,
    height: 66,
    width: 120,
  } as ViewStyle,
  Transit: {
    height: 40,
    width: 40,
  } as ImageStyle,
  ProviderLogo: {
    height: 26,
    maxWidth: 120,
  },
});

type TransitImgProps = {
  /**
   * The resource to use as image, or a URL that points at the image to be used.
   */
  image: ImageRequireSource | string;
  providerLogo: ImageRequireSource;
};

export const TransitImgUnmemoized = (props: TransitImgProps) => (
  <View style={styles.Wrapper}>
    <Image
      source={
        typeof props.image === 'string' ? { uri: withPixelDensity(props.image) } : props.image
      }
      style={styles.Transit}
    />
    <Image source={props.providerLogo} style={styles.ProviderLogo} resizeMode="contain" />
  </View>
);

export const TransitImg = React.memo(TransitImgUnmemoized);
