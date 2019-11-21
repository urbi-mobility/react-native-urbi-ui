import React from 'react';
import { Image, ImageRequireSource, StyleSheet, View, ViewStyle } from 'react-native';
import { IconButtonCompactUnmemoized } from '../../molecules/buttons/iconButtons/IconButtonCompact';
import { colors } from '../../utils/colors';
import { withPixelDensity } from '../../utils/functions';
import { Touchable } from '../Touchable';
import { headerShadowStyle, headerHeight } from 'src/components/profileHeaders/AccountHeader';

const styles = StyleSheet.create({
  Wrapper: {
    ...headerShadowStyle,
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: colors.ulisse,
    paddingTop: 13,
    paddingBottom: 23,
    height: headerHeight, // TODO fix this with flex, it's padding + Status.height + margin
  } as ViewStyle,
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
  button: React.ReactElement<typeof IconButtonCompactUnmemoized>;
  onPress: () => any;
};

export const ProfilePicUnmemoized = (props: ProfilePicProps) => (
  <View style={styles.Wrapper} elevation={5}>
    <Touchable onPress={props.onPress}>
      <View style={styles.ImageWrapper}>
        <Image
          source={
            typeof props.image === 'string' ? { uri: withPixelDensity(props.image) } : props.image
          }
          resizeMode="contain"
          style={styles.ImageWrapper}
        />
        <View style={styles.Button}>{props.button}</View>
      </View>
    </Touchable>
  </View>
);

export const ProfilePic = React.memo(ProfilePicUnmemoized);
