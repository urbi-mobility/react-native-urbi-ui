import React from 'react';
import { Image, ImageRequireSource, ImageStyle, StyleSheet, View, ViewStyle } from 'react-native';

type BikeImgProps = {
  image: ImageRequireSource | string;
  providerLogo: ImageRequireSource;
};

const styles = StyleSheet.create({
  Wrapper: {
    height: 66,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  } as ViewStyle,
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
      source={typeof props.image === 'string' ? { uri: props.image } : props.image}
      resizeMode="contain"
    />
    <Image source={props.providerLogo} style={styles.ProviderLogo} />
  </View>
);

export default React.memo<BikeImgProps>(BikeImgUnmemoized);
