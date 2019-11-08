import React from 'react';
import { Image, ImageRequireSource, StyleSheet, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IconButtonCompactUnmemoized } from '../../molecules/buttons/iconButtons/IconButtonCompact';
import { colors } from '../../utils/colors';
import { statusBarOffset } from '../../utils/const';
import { withPixelDensity } from '../../utils/functions';
import { Touchable } from '../Touchable';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 8 + statusBarOffset + 40,
    paddingBottom: 10,
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
  <LinearGradient style={styles.Wrapper} colors={[colors.secondary, colors.uma]}>
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
  </LinearGradient>
);

export const ProfilePic = React.memo(ProfilePicUnmemoized);
