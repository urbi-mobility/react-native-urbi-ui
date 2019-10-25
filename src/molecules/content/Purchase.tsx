import React from 'react';
import { ImageRequireSource, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from '../../utils/colors';
import { registeredTextStyle } from '../../utils/textStyles';
import { IconButtonCompact } from '../buttons/iconButtons/IconButtonCompact';
import { ButtonStyle } from '../buttons/types';

const styles = StyleSheet.create({
  WrapperChild: {
    flex: 1,
  },
  DetailWithButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DetailWithIcon: {
    marginLeft: 4,
  },
  Struckout: {
    marginLeft: 8,
    textDecorationLine: 'line-through',
  },
});

const small = registeredTextStyle('small', colors.primary, 'detailsmall');
const micro = registeredTextStyle('micro', colors.uto, 'detailmicro');
const body = registeredTextStyle('body', colors.brand, 'bodybrand');

export type PurchaseProps = {
  detail: string;
  price: string;
  oldprice?: string;
  icon: string | ImageRequireSource;
  onPressIcon?: () => any;
  buttonStyle?: ButtonStyle;
  style?: ViewStyle;
};

const getTop = (props: PurchaseProps) => (
  <View style={styles.DetailWithButtonWrapper}>
    <IconButtonCompact
      icon={props.icon}
      onPress={props.onPressIcon}
      buttonStyle={props.buttonStyle ? props.buttonStyle : 'default'}
    />
    <Text style={[small, styles.DetailWithIcon]} numberOfLines={1}>
      {props.detail.toUpperCase()}
    </Text>
  </View>
);
const getBottom = (props: PurchaseProps) => (
  <View style={styles.DetailWithButtonWrapper}>
    <Text style={body} numberOfLines={1}>
      {props.price}
    </Text>
    <Text style={[micro, styles.Struckout]} numberOfLines={1}>
      {props.oldprice}
    </Text>
  </View>
);

export const PurchaseUrmemoraized = (props: PurchaseProps) => (
  <View style={[styles.WrapperChild, props.style]}>
    {getTop(props)}
    {getBottom(props)}
  </View>
);

export const Purchase = React.memo(PurchaseUrmemoraized);
