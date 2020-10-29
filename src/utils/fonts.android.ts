import { material, robotoWeights } from 'react-native-typography';
import { UrbiFontStyles } from 'src/utils/textStyles';

export const fontStyles: UrbiFontStyles = {
  hero: {
    ...material.display1Object,
    ...robotoWeights.medium,
    fontFamily: 'Roboto-Medium',
    lineHeight: 40,
  },
  title2: {
    ...material.headlineObject,
    fontFamily: 'Roboto-Regular',
    lineHeight: 32,
  },
  title1: {
    ...material.titleObject,
    fontFamily: 'Roboto-Medium',
    lineHeight: 26,
  },
  titleBold: {
    ...material.subheadingObject,
    ...robotoWeights.medium,
    fontFamily: 'Roboto-Medium',
    lineHeight: 22,
  },
  title: {
    ...material.subheadingObject,
    fontFamily: 'Roboto-Regular',
    lineHeight: 22,
  },
  body: {
    ...material.body1Object,
    fontFamily: 'Roboto-Regular',
    lineHeight: 20,
  },
  button: {
    ...material.buttonObject,
    fontFamily: 'Roboto-Medium',
    lineHeight: 20,
  },
  small: {
    ...material.captionObject,
    ...robotoWeights.medium,
    fontFamily: 'Roboto-Medium',
    lineHeight: 16,
  },
  micro: {
    ...material.buttonObject,
    fontFamily: 'Roboto-Medium',
    fontSize: 10,
    lineHeight: 14,
  },
};
