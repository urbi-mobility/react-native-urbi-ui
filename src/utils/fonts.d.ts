// make TSC happy, while at the same time keeping the RN runtime
// resolution of platform-dependent files (*.android vs *.ios)
import FontsAndroid, { fontStyles as fontStylesAndroid } from './fonts.android';
export const fontStyles = fontStylesAndroid;
export default FontsAndroid;
