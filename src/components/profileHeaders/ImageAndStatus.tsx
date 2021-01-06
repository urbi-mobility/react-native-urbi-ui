import React from 'react';
import { Image, ImageRequireSource, StyleSheet, View, ViewStyle } from 'react-native';
import { StatusUnmemoized } from 'src/molecules/content/Status';
import { Testable } from 'src/types';
import { withPixelDensity } from 'src/utils/functions';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
  } as ViewStyle,
  Image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 16,
  },
});

export interface ImageAndStatusProps extends Testable {
  image: ImageRequireSource | string;
  status: React.ReactElement<typeof StatusUnmemoized>;
}

export const ImageAndStatusUnmemoized = (props: ImageAndStatusProps) => (
  <View style={styles.Wrapper}>
    <Image
      source={
        typeof props.image === 'string' ? { uri: withPixelDensity(props.image) } : props.image
      }
      resizeMode="cover"
      style={styles.Image}
    />
    {props.status}
  </View>
);

export const ImageAndStatus = React.memo(ImageAndStatusUnmemoized);
