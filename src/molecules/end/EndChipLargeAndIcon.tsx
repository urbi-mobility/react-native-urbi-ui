import React from 'react';
import { StyleSheet, View, ViewStyle, ImageRequireSource, Image } from 'react-native';
import { ChipLarge, ChipLargeProps } from '../ChipLarge';
import { colors } from 'src/utils/colors';
import { Icon } from 'src/utils/const';

const styles = StyleSheet.create({
  Wrapper: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 0,
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 1,
  } as ViewStyle,
  Icon: {
    marginLeft: 8,
  },
  Image: {
    marginLeft: 8,
    width: 20,
    height: 20,
  },
});

interface EndChipLargeBaseProps {
  chip: ChipLargeProps;
}

interface EndChipLargeAndIconFont extends EndChipLargeBaseProps {
  icon: string;
  iconColor?: keyof typeof colors;
}

interface EndChipLargeAndImage extends EndChipLargeBaseProps {
  image: ImageRequireSource;
}

type EndChipLargeAndIconProps = EndChipLargeAndIconFont | EndChipLargeAndImage;

const hasIcon = (props: EndChipLargeAndIconProps): props is EndChipLargeAndIconFont =>
  (props as unknown)['icon'];

const renderImageOrIcon = (props: EndChipLargeAndIconProps) =>
  hasIcon(props) ? (
    <Icon style={styles.Icon} name={props.icon} size={20} color={props.iconColor} />
  ) : (
    <Image style={styles.Image} source={((props as unknown) as EndChipLargeAndImage).image} />
  );

const EndChipLargeAndIconUnmemoized = (props: EndChipLargeAndIconProps) => (
  <View style={styles.Wrapper}>
    <ChipLarge {...props.chip} />
    {renderImageOrIcon(props)}
  </View>
);

export const EndChipLargeAndIcon = React.memo(EndChipLargeAndIconUnmemoized);
