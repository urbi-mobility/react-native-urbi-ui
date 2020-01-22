import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../assets/json/urbi-font.json';
import { colors } from './colors';

export const onIOS = Platform.OS === 'ios';

export const screenTopMargin = 0; // since RNN v3

export const wrapperStyle = {
  flex: 1,
  backgroundColor: colors.ulisse,
};

export const getWindowHeight = (hasNotch: boolean) =>
  onIOS
    ? Dimensions.get('window').height
    : hasNotch
    ? Dimensions.get('screen').height - StatusBar.currentHeight
    : Dimensions.get('window').height;

export const getTabBarHeight = (hasNotch: boolean) =>
  onIOS ? 48 + (getWindowHeight(hasNotch) > 800 ? 34 : 0) : 56;

export const IPHONE_X_HOME_AREA_HEIGHT = 34;

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
