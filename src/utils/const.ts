import { Dimensions, PixelRatio, Platform } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../assets/json/urbi-font.json';
import { colors } from './colors';

export const onIOS = Platform.OS === 'ios';

export const screenTopMargin = onIOS ? 0 : 20;

export const wrapperStyle = {
  flex: 1,
  backgroundColor: colors.ulisse,
};

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

// TODO replace this horrible hack with something better on the iPhone X
export const onIphoneX = onIOS && windowHeight > 800;

export const hasAndroidTranslucentStatusBar = !onIOS && Platform.Version >= 20;

export const statusBarOffset = onIOS
  ? onIphoneX
    ? 32
    : 20
  : hasAndroidTranslucentStatusBar
  ? 24
  : 0;

export const tabBarHeight = onIOS ? 48 + (windowHeight > 800 ? 34 : 0) : 56;

export const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const pixelRatio = PixelRatio.get();

const pixelRatios: { [ratio: string]: string } = {
  1: 'mdpi',
  ['1.5']: 'hdpi',
  2: 'xhdpi',
  3: 'xxhdpi',
  4: 'xxxhdpi',
};

export const pixelDensity = pixelRatios[pixelRatio.toString()];

// tslint:disable:max-line-length
export const trollAndC = `Welcome to URBI application (“URBI"), operated by URBANnext SA a Swiss company (company number: CHE-149.120.999), with registered offices at Vicolo de’ Calvi, 2 - 6830 Chiasso, Switzerland ("URBANnext"). By accessing URBI or its website found at www.URBI.co, whether through a mobile device, mobile application or computer (collectively, the “Services”) you agree to be bound by these Terms of Use (the “Terms”). If you wish to make use of the Service, please read these Terms.

1. Definitions

1.1. Mobility Services or generally Services means the services tied to the transport of people.

1.2. URBI Services means the Mobility Services intermediated by URBI.

1.3. User or You means the person who accesses URBI app and/or who uses URBI Services.

1.4. Provider means the legal entity offering the Services or aggregating the Services.

1.5. Partner means any third party promoting the Services through promotional campaigns, which, under specific User’s consent and in compliance with local regulations and laws, may give the User discounts, giveaways and so on.`;
// tslint:enable:max-line-length