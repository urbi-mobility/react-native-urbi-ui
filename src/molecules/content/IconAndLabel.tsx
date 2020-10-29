import React from 'react';
import {
  Image,
  ImageRequireSource,
  RegisteredStyle,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { colors } from 'src/utils/colors';
import { Icon } from 'src/utils/const';
import { textStyle } from 'src/utils/textStyles';
import { RequireOnlyOne } from 'src/utils/types';

const styles = StyleSheet.create({
  Wrapper: {
    minHeight: 40,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type ExpandedIconAndLabelProps = {
  image?: ImageRequireSource;
  icon?: string;
  iconColor?: string;
  label: string;
  labelColor?: string;
  style?: ViewStyle | RegisteredStyle<ViewStyle>;
  smallIcon?: boolean;
};

type IconAndLabelProps = RequireOnlyOne<ExpandedIconAndLabelProps, 'image' | 'icon'>;

const renderImageOrIcon = (
  size: number,
  image?: ImageRequireSource,
  icon?: string,
  iconColor?: string
) => {
  return image ? (
    <Image style={{ width: size, height: size }} source={image} />
  ) : (
    <Icon name={icon!} size={size} color={iconColor} />
  );
};

export const IconAndLabelUnmemoized = (props: IconAndLabelProps) => {
  const { icon, iconColor, image, label, smallIcon, style } = props;
  const iconSize = smallIcon ? 20 : 40;
  return (
    <View style={[styles.Wrapper, style]}>
      <View style={{ minWidth: iconSize, marginRight: 8 }}>
        {renderImageOrIcon(iconSize, image, icon, iconColor)}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={textStyle('title', props.labelColor || colors.uma)} numberOfLines={1}>
          {label}
        </Text>
      </View>
    </View>
  );
};

export const IconAndLabel = React.memo(IconAndLabelUnmemoized);
