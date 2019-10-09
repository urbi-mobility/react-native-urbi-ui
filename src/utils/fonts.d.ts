// make TSC happy, while at the same time keeping the RN runtime
// resolution of platform-dependent files (*.android vs *.ios)
import FontsIOS, { fontStyles as fontStylesIOS } from './fonts.ios';
export const fontStyles = fontStylesIOS;
export default FontsIOS;
