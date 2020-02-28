import React from 'react';
import { Image, ImageRequireSource, ImageStyle, StyleSheet, View, ViewStyle } from 'react-native';
import { withPixelDensity } from '../../utils/functions';

const styles = StyleSheet.create({
  Wrapper: {
    flexGrow: 1,
    flexShrink: 0,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 8,
    height: 66,
    maxWidth: 120,
  } as ViewStyle,
  Transit: {
    height: 40,
    width: 40,
  } as ImageStyle,
  ProviderLogo: {
    height: 26,
  },
});

type TransitImgProps = {
  /**
   * The resource to use as image, or a URL that points at the image to be used.
   */
  image: ImageRequireSource | string;
  providerLogo: ImageRequireSource;
};

export const TransitImgUnmemoized = (props: TransitImgProps) => {
  let logoStyle: ImageStyle = styles.ProviderLogo;
  if (typeof props.providerLogo !== 'string') {
    const { width, height } = Image.resolveAssetSource(props.providerLogo);
    logoStyle = { height: 26, aspectRatio: width / height };
  }
  return (
    <View style={styles.Wrapper}>
      <Image
        source={
          typeof props.image === 'string' ? { uri: withPixelDensity(props.image) } : props.image
        }
        style={styles.Transit}
      />
      <Image source={props.providerLogo} style={logoStyle} resizeMode="contain" />
    </View>
  );
};

export const TransitImg = React.memo(TransitImgUnmemoized);
