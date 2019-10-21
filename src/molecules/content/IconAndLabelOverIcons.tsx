import React from 'react';
import { Image, ImageRequireSource, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from '../../utils/colors';
import { Icon } from '../../utils/const';
import { registeredTextStyle } from '../../utils/textStyles';

type LabelProps = {
  icon: ImageRequireSource;
  label: string;
  icons: string[];
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
  IconsWrapper: {
    flexDirection: 'row',
  },
});

const titleStyle = registeredTextStyle('title', colors.uma, 'IconAndLabelOverIcon');

const getIcon = (icon: string, i: number) => (
  <Icon key={`icon-${i}`} name={icon} size={20} color={colors.ughina} />
);

const IconAndLabelOverIconsUnmemoized = (props: LabelProps) => (
  <View style={[styles.Wrapper, props.style]}>
    <View style={styles.ImageWrapper}>
      <Image style={{ width: 40, height: 40 }} source={props.icon} />
    </View>
    <View style={{ flex: 1 }}>
      <Text style={[titleStyle, styles.Label]} numberOfLines={2}>
        {props.label}
      </Text>
      <View style={styles.IconsWrapper}>{props.icons.map(getIcon)}</View>
    </View>
  </View>
);

export const IconAndLabelOverIcons = React.memo(IconAndLabelOverIconsUnmemoized);
