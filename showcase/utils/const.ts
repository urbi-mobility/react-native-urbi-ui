import { Platform } from 'react-native';
import { hasNotch } from 'react-native-device-info';

const isOnIphoneX = Platform.OS === 'ios' && hasNotch();

export const onIphoneX = isOnIphoneX;
