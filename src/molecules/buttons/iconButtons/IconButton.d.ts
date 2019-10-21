// make TSC happy, while at the same time keeping the RN runtime
// resolution of platform-dependent files (*.android vs *.ios)
import { IconButton as IconButtonAndroid } from './IconButton.android';
export const IconButton = IconButtonAndroid;
