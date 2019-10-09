import React, { ReactElement } from 'react';
import { Image, ImageRequireSource, StyleSheet, Text, View, ViewStyle } from 'react-native';
import MaybeTouchable from '../components/MaybeTouchable';
import { CardHeaderUnmemoized, CardHeaderProps } from '../molecules/card/CardHeader';
import { BikeImgUnmemoized } from '../molecules/img/BikeImg';
import { VehicleImgUnmemoized } from '../molecules/img/VehicleImg';
import { colors } from '../utils/colors';
import { withPixelDensity } from '../utils/functions';
import { registeredTextStyle } from '../utils/textStyles';

type CardProps = {
  header: ReactElement<typeof CardHeaderUnmemoized>;
  image?: ReactElement<typeof VehicleImgUnmemoized> | ReactElement<typeof BikeImgUnmemoized>;
  logo?: ImageRequireSource | string;
  onPress?: () => any;
  description?: string;
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    padding: 12,
  } as ViewStyle,
  TouchableWrapper: {
    backgroundColor: colors.ulisse,
  },
  Top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  ImageWrapper: {
    flex: 0,
    flexBasis: 'auto',
    flexGrow: 0,
  },
  Logo: {
    height: 40,
    width: 40,
  },
  HeaderWithImage: {
    marginRight: 8,
    flex: 2,
  } as ViewStyle,
});

const description = registeredTextStyle('body', colors.uma, 'carddescription');

const logoWrapper = (logo: ImageRequireSource | string) => (
  <Image
    source={typeof logo === 'string' ? { uri: withPixelDensity(logo) } : logo}
    style={styles.Logo}
  />
);

const getTop = (props: CardProps) =>
  props.image || props.logo ? (
    <View style={styles.Top}>
      {React.cloneElement(props.header, { style: styles.HeaderWithImage } as Partial<
        CardHeaderProps
      >)}
      <View style={styles.ImageWrapper}>{props.image || logoWrapper(props.logo!)}</View>
    </View>
  ) : (
    props.header
  );

const getBottom = (desc: string) => (
  <Text style={description} numberOfLines={1}>
    {desc}
  </Text>
);

export const CardUnmemoized = (props: CardProps) => (
  <MaybeTouchable onPress={props.onPress} borderRadius={10} margin={12} marginTop={0} withShadow>
    <View style={styles.Wrapper}>
      {getTop(props)}
      {props.description && getBottom(props.description!)}
    </View>
  </MaybeTouchable>
);

export default React.memo(CardUnmemoized);
