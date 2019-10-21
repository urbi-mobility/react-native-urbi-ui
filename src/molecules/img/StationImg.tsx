import React from 'react';
import { Image, ImageRequireSource, ImageStyle, StyleSheet, View, ViewStyle } from 'react-native';

type StationImgProps = {
  providerLogo: ImageRequireSource;
};

const styles = StyleSheet.create({
  Wrapper: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    height: 66,
  } as ViewStyle,
  Image: {
    height: 40,
    width: 40,
  } as ImageStyle,
});

export const StationImgUnmemoized = (props: StationImgProps) => (
  <View style={styles.Wrapper}>
    <Image source={props.providerLogo} style={styles.Image} />
  </View>
);

export const StationImg = React.memo(StationImgUnmemoized);
