import { ImageRequireSource, RegisteredStyle, ViewStyle } from 'react-native';
import { fontStyles } from 'src/utils/fonts';

export type ButtonStyle =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'disabled'
  | 'switched-off'
  | 'brand';

export interface ButtonProps {
  label: string;
  onPress: () => any;
  buttonStyle: ButtonStyle;
  style?: ViewStyle | RegisteredStyle<ViewStyle>;
  colorOverride?: string;
  onLongPress?: () => any;
  onPressIn?: () => any;
  loading?: boolean;
}

export interface ExtendedButtonProps extends ButtonProps {
  backgroundColor: string;
  borderColor?: string;
  borderWidth?: number;
  color: string;
  height: number;
  horizontalPadding: number;
  isUppercase: boolean;
  loadingColor: string;
  loadingSize: number;
  maxWidth: number;
  minWidth: number;
  noShadow?: boolean;
  textStyle: keyof typeof fontStyles;
}

export interface IconButtonProps {
  icon: string | ImageRequireSource;
  onPress: () => any;
  buttonStyle: ButtonStyle;
  style?: ViewStyle | RegisteredStyle<ViewStyle>;
  colorOverride?: string;
  onLongPress?: () => any;
  onPressIn?: () => any;
  iconSizeOverride?: number;
  testID?: string;
}

export interface IconButtonExtendedProps extends IconButtonProps {
  backgroundColor: string;
  color: string;
  size: number;
  innerIconSize: number;
  borderColor?: string;
  borderWidth?: number;
  noShadow?: boolean;
  opacity?: number;
}

export interface ToggleProps {
  active: boolean;
  setActive: (id: string, isActive: boolean) => void;
  id: string;
  icon: string | ImageRequireSource;
  style?: ViewStyle | RegisteredStyle<ViewStyle>;
  managed?: boolean; // whether the state of this button is managed through props
  loading?: boolean;
}
