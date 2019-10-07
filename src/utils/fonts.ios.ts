import { human, sanFranciscoWeights } from 'react-native-typography';
import { UrbiFontStyles } from './textStyles';

export const fontStyles: UrbiFontStyles = {
  hero: {
    ...human.largeTitleObject,
    ...sanFranciscoWeights.semibold,
    lineHeight: 40,
  },
  title2: {
    ...human.title1Object,
    lineHeight: 32,
  },
  title1: {
    ...human.title3Object,
    ...sanFranciscoWeights.semibold,
    lineHeight: 26,
  },
  titleBold: {
    ...human.headlineObject,
    ...sanFranciscoWeights.semibold,
    lineHeight: 22,
  },
  title: {
    ...human.bodyObject,
    lineHeight: 22,
  },
  body: {
    ...human.subheadObject,
    lineHeight: 20,
  },
  button: {
    ...human.subheadObject,
    ...sanFranciscoWeights.semibold,
    lineHeight: 20,
  },
  small: {
    ...human.footnoteObject,
    ...sanFranciscoWeights.semibold,
    lineHeight: 16,
  },
  micro: {
    ...human.caption2Object,
    ...sanFranciscoWeights.semibold,
    lineHeight: 14,
    textTransform: 'uppercase',
  },
};
