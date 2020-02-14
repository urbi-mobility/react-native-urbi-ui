import React from 'react';
import { Image, ImageRequireSource, ImageStyle, StyleSheet, View, ViewStyle } from 'react-native';
import { withPixelDensity } from '../../utils/functions';

type BikeImgProps = {
  /**
   * The resource to use as image, or a URL that points at the image to be used.
   */
  image: ImageRequireSource | string;
  providerLogo: ImageRequireSource;
};

const styles = StyleSheet.create({
  Wrapper: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 8,
    height: 66,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  } as ViewStyle,
  Image: {
    height: 66,
    width: 120,
  },
  ProviderLogo: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 40,
    width: 40,
  } as ImageStyle,
});

export const BikeImgUnmemoized = (props: BikeImgProps) => (
  <View style={styles.Wrapper}>
    <Image
      source={
        typeof props.image === 'string' ? { uri: withPixelDensity(props.image) } : props.image
      }
      resizeMode="contain"
      style={styles.Image}
    />
    <Image source={props.providerLogo} style={styles.ProviderLogo} />
  </View>
);

export const BikeImg = React.memo<BikeImgProps>(BikeImgUnmemoized);
