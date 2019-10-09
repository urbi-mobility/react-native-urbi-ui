import { Alert, AlertButton, StatusBar, ToastAndroid } from 'react-native';
import { onIOS, pixelDensity } from './const';

export const statusBarHeight = StatusBar.currentHeight || 0;

export const showAlert = (message: string, titleIOS?: string, messageIOS?: string) => {
  if (onIOS) Alert.alert(titleIOS || 'Alert', messageIOS || message);
  else ToastAndroid.show(message, ToastAndroid.SHORT);
};

export const showLongAlert = (message: string) =>
  onIOS ? Alert.alert('Warning!', message) : ToastAndroid.show(message, ToastAndroid.LONG);

export const prompt = (message: string, title: string, options: AlertButton[]) =>
  Alert.alert(title, message, options, { cancelable: false });

// tslint:disable-next-line:no-console
export const showWarning = (message: string) => console.warn(message);

export const onPress = (message: string, titleIOS?: string, messageIOS?: string) =>
  onIOS
    ? () => Alert.alert(titleIOS || 'Alert', messageIOS || message)
    : () => ToastAndroid.show(message, ToastAndroid.SHORT);

export const onPressNoOp = () => null;

export const onPressShowNotYet = () => showAlert(`Not yet available 🤷‍♂️`);

export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 * Taken from https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/shallowEqual.js
 */
const is = (x: any, y: any): boolean => {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
};

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 * Taken from https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/shallowEqual.js
 */
export const shallowEqual = (objA: any, objB: any): boolean => {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (const key of keysA) {
    if (!hasOwnProperty.call(objB, key) || !is(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
};

export const toTitle = (text: string) =>
  onIOS ? text.toUpperCase() : `${text.charAt(0).toUpperCase()}${text.substring(1)}`;

export const toHex = (s: string) =>
  unescape(encodeURIComponent(s))
    .split('')
    .map((c) => c.charCodeAt(0).toString(16))
    .join('');

export const findValue = <T>(obj: { [key: string]: T }, filter: (i: T) => boolean) =>
  Object.values(obj).find(filter);

export const withPixelDensity = (url?: string) => (url || '').replace('{density}', pixelDensity);

export const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);
