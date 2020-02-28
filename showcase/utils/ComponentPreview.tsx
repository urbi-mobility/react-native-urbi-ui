import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from 'react-native-urbi-ui/utils/colors';
import { onPress } from 'react-native-urbi-ui/utils/functions';
import { textStyle } from 'react-native-urbi-ui/utils/textStyles';

const styles = StyleSheet.create({
  Spinner: {
    flex: 1,
    padding: 20,
  },
  Row: {
    backgroundColor: '#eee',
    alignItems: 'center',
    margin: 10,
    marginBottom: 10,
  },
  Component: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  Text: { ...textStyle('body', colors.secondary), textAlign: 'center', padding: 6 },
  Label: { backgroundColor: '#ddd', flex: 1, alignSelf: 'stretch' },
});

export const renderComponent = (name: string, component: JSX.Element, key?: string) => (
  <View key={key} style={styles.Row}>
    <View style={styles.Component}>{component}</View>
    <View style={styles.Label}>
      <Text style={styles.Text}>{name}</Text>
    </View>
  </View>
);

export const onButtonPress = onPress(
  'Clickity click',
  'iOS detected!',
  'This is a Toast on Android'
);

export const sleep = (millis: number) => new Promise((resolve) => setTimeout(resolve, millis));

export const onPressNoOp = () => null;

export const placeholder = require('../assets/thinking.png');
export const carPlaceholder = require('../assets/car.png');
export const bikePlaceholder = require('../assets/ic_bike.png');
export const kickscooterPlaceholder = require('../assets/ic_kickscooter.png');
export const scooterPlaceholder = require('../assets/ic_scooter.png');
export const boomEmoji = require('../assets/boom.png');
export const pukeEmoji = require('../assets/puke.png');
export const starryEmoji = require('../assets/starry.png');
export const zanyEmoji = require('../assets/zany.png');
export const fiftyByFiftyWhitePlaceholder = require('../assets/account.png');
export const eightyByEightyWhitePlaceholder = require('../assets/accountLarge.png');
export const userAvaterPlaceholder = require('../assets/avatar.png');
export const transitProviderLogoPlaceholder = require('../assets/transit_provider.png');
export const emovIcon = require('../assets/ic_emov.png');
