import { material, robotoWeights } from 'react-native-typography';
import { UrbiFontStyles } from './textStyles';

export const fontStyles: UrbiFontStyles = {
  hero: {
    ...material.display1Object,
    ...robotoWeights.medium,
    lineHeight: 40,
  },
  title2: {
    ...material.headlineObject,
    lineHeight: 32,
  },
  title1: {
    ...material.titleObject,
    lineHeight: 26,
  },
  titleBold: {
    ...material.subheadingObject,
    ...robotoWeights.medium,
    lineHeight: 22,
  },
  title: {
    ...material.subheadingObject,
    lineHeight: 22,
  },
  body: {
    ...material.body1Object,
    lineHeight: 20,
  },
  button: {
    ...material.buttonObject,
    lineHeight: 20,
  },
  small: {
    ...material.captionObject,
    ...robotoWeights.medium,
    lineHeight: 16,
  },
  micro: {
    ...material.buttonObject,
    fontSize: 10,
    lineHeight: 14,
  },
};
