import { ImageRequireSource } from 'react-native';
import { ButtonStyle } from 'src/molecules/buttons/types';

export type DialogPickerOption = {
  id: string;
  label: string;
};

export type DialogPickerProps = {
  show: boolean;
  title: string;
  /** the buttons to show. Index 0 must store the cancel option */
  options: DialogPickerOption[];
  onSelect: (selectedId: string) => any;
  onCancel: () => any;
};

export type RemoteImage = {
  uri: string;
  width: number;
  height: number;
};

export type CTA = {
  label: string;
  onPress: () => any;
  style?: ButtonStyle;
};

export type OnboardingPage = {
  title: string;
  content: string;
  image: ImageRequireSource | RemoteImage;
};

export const isRemoteImage = (img: ImageRequireSource | RemoteImage): img is RemoteImage =>
  (img as any).uri !== undefined;
