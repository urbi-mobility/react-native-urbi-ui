import React from 'react';
import { Image, ImageRequireSource, StyleSheet, View, ViewStyle } from 'react-native';
import { StatusUnmemoized } from '../../molecules/content/Status';
import { withPixelDensity } from '../../utils/functions';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
  } as ViewStyle,
  Image: {
    height: 50,
    width: 50,
    marginRight: 16,
  },
});

export interface ImageAndStatusProps {
  image: ImageRequireSource | string;
  status: React.ReactElement<typeof StatusUnmemoized>;
}

export const ImageAndStatusUnmemoized = (props: ImageAndStatusProps) => (
  <View style={styles.Wrapper}>
    <Image
      source={
        typeof props.image === 'string' ? { uri: withPixelDensity(props.image) } : props.image
      }
      resizeMode="contain"
      style={styles.Image}
    />
    {props.status}
  </View>
);

export const ImageAndStatus = React.memo(ImageAndStatusUnmemoized);
