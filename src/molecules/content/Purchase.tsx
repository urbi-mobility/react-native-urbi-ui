import React from 'react';
import { ImageRequireSource, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Touchable } from '../../components/Touchable';
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
    flex: 1,
    paddingLeft: 4,
  },
  Struckout: {
    paddingLeft: 8,
    textDecorationLine: 'line-through',
  },
});

const small = registeredTextStyle('small', colors.primary, 'detailsmall');
const body = registeredTextStyle('body', colors.uto, 'detailmicro');
const title1 = registeredTextStyle('title1', colors.uma, 'bodybrand');


export type PurchaseProps = {
  detail: string;
  price: string;
  oldPrice?: string;
  icon: string | ImageRequireSource;
  onPress: () => any;
  buttonStyle?: ButtonStyle;
  style?: ViewStyle;
};

export const PurchaseUnmemoized = (props: PurchaseProps) => (
  <View style={[styles.WrapperChild, props.style]}>
    <Touchable onPress={props.onPress}>
      <View>
        <View style={styles.DetailWithButtonWrapper}>
          <IconButtonCompact
            icon={props.icon}
            onPress={props.onPress}
            buttonStyle={props.buttonStyle ? props.buttonStyle : 'default'}
          />
          <Text style={[small, styles.DetailWithIcon]} numberOfLines={1}>
            {props.detail.toUpperCase()}
          </Text>
        </View>
        <View style={styles.DetailWithButtonWrapper}>
          <Text style={title1} numberOfLines={1}>
            {props.price}
          </Text>
          <Text style={[body, styles.Struckout]} numberOfLines={1}>
            {props.oldPrice}
          </Text>
        </View>
      </View>
      {/* <View style={{ flex: 1 }}>
      </View> */}
    </Touchable>
  </View>
);

export const Purchase = React.memo(PurchaseUnmemoized);
