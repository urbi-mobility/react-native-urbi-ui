import React from 'react';
import { Image, ImageRequireSource, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

type LabelProps = {
  label: string;
  subtitle: string;
  icon: ImageRequireSource;
  style?: ViewStyle;
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'row',
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Label: {
    marginBottom: 4,
  },
  ImageWrapper: {
    minWidth: 40,
    marginRight: 8,
  },
});

const titleStyle = registeredTextStyle('title', colors.uma, 'IconAndDoubleLabel');
const subtitleStyle = registeredTextStyle('body', colors.uto, 'IconAndDoubleLabelSubtitle');

const IconAndDoubleLabelUnmemoized = (props: LabelProps) => (
  <View style={[styles.Wrapper, props.style]}>
    <View style={styles.ImageWrapper}>
      <Image style={{ width: 40, height: 40 }} source={props.icon} />
    </View>
    <View style={{ flex: 1 }}>
      <Text style={[titleStyle, styles.Label]} numberOfLines={2}>
        {props.label}
      </Text>
      <Text style={subtitleStyle}>{props.subtitle}</Text>
    </View>
  </View>
);

export const IconAndDoubleLabel = React.memo(IconAndDoubleLabelUnmemoized);
