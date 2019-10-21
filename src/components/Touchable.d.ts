// make TSC happy, while at the same time keeping the RN runtime
// resolution of platform-dependent files (*.android vs *.ios)
import { Touchable as TouchableAndroid } from './Touchable.android';
export const Touchable = TouchableAndroid;
