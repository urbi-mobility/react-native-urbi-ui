import React from 'react';
import { Image, ImageRequireSource, StyleSheet, View, ViewStyle } from 'react-native';
import { IconButtonCompactUnmemoized } from '../../molecules/buttons/iconButtons/IconButtonCompact';
import { colors } from '../../utils/colors';
import { withPixelDensity } from '../../utils/functions';
import { Touchable } from '../Touchable';
import { headerShadowStyle, headerHeight } from 'src/components/profileHeaders/AccountHeader';

const wrapper = {
  ...headerShadowStyle,
  flexGrow: 1,
  alignItems: 'center',
  backgroundColor: colors.ulisse,
  paddingTop: 13,
  paddingBottom: 23,
  height: headerHeight, // TODO fix this with flex, it's padding + Status.height + margin
};

const styles = StyleSheet.create({
  Wrapper: wrapper as ViewStyle,
  WrapperExpanded: { ...wrapper, flex: 1 } as ViewStyle,
  ImageWrapper: {
    width: 80,
    height: 80,
  },
  Button: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

type ProfilePicProps = {
  image: ImageRequireSource | string;
  button?: React.ReactElement<typeof IconButtonCompactUnmemoized>;
  onPress?: () => any;
  flexExpand?: boolean;
};

const renderImage = (image: ProfilePicProps['image']) => (
  <Image
    source={typeof image === 'string' ? { uri: withPixelDensity(image) } : image}
    resizeMode="contain"
    style={styles.ImageWrapper}
  />
);

export const ProfilePicUnmemoized = (props: ProfilePicProps) => (
  <View style={props.flexExpand ? styles.WrapperExpanded : styles.Wrapper} elevation={5}>
    {props.button ? (
      <Touchable onPress={props.onPress}>
        <View style={styles.ImageWrapper}>
          {renderImage(props.image)}
          <View style={styles.Button}>{props.button}</View>
        </View>
      </Touchable>
    ) : (
      <View style={styles.ImageWrapper}>{renderImage(props.image)}</View>
    )}
  </View>
);

export const ProfilePic = React.memo(ProfilePicUnmemoized);
