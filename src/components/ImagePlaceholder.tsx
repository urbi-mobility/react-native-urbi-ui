import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from 'src/utils/colors';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  } as ViewStyle,
  Placeholder: {
    backgroundColor: colors.ukko,
    borderRadius: 8,
  },
});

type ImagePlaceholderProps = {
  height: number;
  width: number;
  placeholderColor?: string;
};

const ImagePlaceholderUnmemoized = (props: ImagePlaceholderProps) => (
  <View style={[styles.Wrapper, { width: props.width, height: props.height }]}>
    <View
      style={
        props.placeholderColor
          ? [styles.Placeholder, { backgroundColor: props.placeholderColor }]
          : styles.Placeholder
      }
    />
  </View>
);

export const ImagePlaceholder = React.memo(ImagePlaceholderUnmemoized);
