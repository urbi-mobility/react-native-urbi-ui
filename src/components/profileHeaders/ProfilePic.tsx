import React from 'react';
import { Image, ImageRequireSource, StyleSheet, View, ViewStyle } from 'react-native';
import { headerHeight, headerShadowStyle } from 'src/components/profileHeaders/AccountHeader';
import { Touchable } from 'src/components/Touchable';
import { colors } from 'src/utils/colors';
import { Icon } from 'src/utils/const';
import { withPixelDensity } from 'src/utils/functions';

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
    borderRadius: 40,
  },
  CameraIcon: {
    backgroundColor: colors.ulisse,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    marginBottom: 1,
    shadowColor: colors.shadowBorder,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
});

type ProfilePicProps = {
  image: ImageRequireSource | string;
  onPress?: () => any;
  withCameraIcon?: boolean;
  flexExpand?: boolean;
};

const renderImage = (image: ProfilePicProps['image']) => (
  <Image
    source={typeof image === 'string' ? { uri: withPixelDensity(image) } : image}
    resizeMode="cover"
    style={styles.ImageWrapper}
  />
);

export const ProfilePicUnmemoized = (props: ProfilePicProps) => (
  <View style={props.flexExpand ? styles.WrapperExpanded : styles.Wrapper} elevation={5}>
    {props.onPress ? (
      <Touchable onPress={props.onPress} style={styles.ImageWrapper}>
        <View style={styles.ImageWrapper}>
          {renderImage(props.image)}
          {props.withCameraIcon && (
            <View style={styles.CameraIcon} elevation={1}>
              <Icon name="camera-small" size={18} color={colors.primary} />
            </View>
          )}
        </View>
      </Touchable>
    ) : (
      <View style={styles.ImageWrapper}>{renderImage(props.image)}</View>
    )}
  </View>
);

export const ProfilePic = React.memo(ProfilePicUnmemoized);
