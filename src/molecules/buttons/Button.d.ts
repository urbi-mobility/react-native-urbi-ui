// make TSC happy, while at the same time keeping the RN runtime
// resolution of platform-dependent files (*.android vs *.ios)
import { Button as ButtonAndroid } from './Button.android';
export const Button = ButtonAndroid;
