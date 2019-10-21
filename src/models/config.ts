import { ImageRequireSource } from 'react-native';
import { PasswordEncoding } from './user';
import { Coordinates, PinType } from './vehicles';

export interface Provider {
  id: string;
  name: string;
  types: PinType[];
  hasFullFeed: boolean;
  passwordEncoding: PasswordEncoding;
  canLogin?: boolean;
  canEditPIN?: boolean;
  canOpen?: boolean;
  pin?: string;
  img?: string;
  color?: string;
}

export interface City {
  id: string;
  center: Coordinates;
  icon: ImageRequireSource;
  providers: string[];
  transitProvider?: string;
  bounds: {
    topLeft: Coordinates;
    bottomRight: Coordinates;
  };
}

export interface DeviceInfo {
  build: number;
  locale: string;
  platform: 'ios' | 'android';
  deviceId: string;
  deviceName: string;
  model: string;
  instanceId: string;
  apiLevel?: number;
  osVersion?: string;
}
