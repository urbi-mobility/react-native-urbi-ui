import React from 'react';
import { ImageRequireSource, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { LinkCompact } from '../molecules/buttons/LinkCompact';
import { SectionsDivider } from '../molecules/SectionsDivider';
import { colors } from '../utils/colors';
import { textStyle as makeTextStyle } from '../utils/textStyles';
import { ListItemLarge } from './ListItemLarge';
import { IconAndLabel } from '../molecules/content/IconAndLabel';
import { ButtonRegular } from '../molecules/buttons/ButtonRegular';

const styles = StyleSheet.create({
  Wrapper: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: colors.ulisse,
    zIndex: 666,
  } as ViewStyle,
  Cancel: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 12,
  } as ViewStyle,
  TitleOrder: {
    ...makeTextStyle('title', colors.uma),
    marginLeft: 16,
    marginRight: 12,
  } as TextStyle,
  PriceOrder: {
    ...makeTextStyle('hero', colors.uma),
    marginLeft: 16,
    marginRight: 12,
    marginBottom: 12,
  } as TextStyle,
  Footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  } as ViewStyle,
});
type CardProperty = {
  haveCard: boolean;
  labelCard: string;
  imageCard?: ImageRequireSource;
  onCardPress?: () => any;
};
type PaymentPanelProps = {
  show: boolean;
  onCancelPress: () => any;
  title: string;
  nameShop: string;
  price: string;
  paymentTitle: string;
  cardProperty: CardProperty;
  buttonTitle: string;
  cancel: string;
  buttonOnPress: () => any;
};

export const PaymentPanelUnmemoized = (props: PaymentPanelProps) =>
  props.show ? (
    <View style={styles.Wrapper} elevation={5}>
      <View style={styles.Cancel}>
        <LinkCompact text={props.cancel} onPress={props.onCancelPress} uppercase />
      </View>
      <SectionsDivider label={props.title} />
      <Text style={styles.TitleOrder}>{props.nameShop}</Text>
      <Text style={styles.PriceOrder}>{props.price}</Text>
      <View style={{ flex: 1 }}>
        <SectionsDivider label={props.paymentTitle} />
        <ListItemLarge
          onPress={props.cardProperty.onCardPress}
          content={
            <IconAndLabel
              image={props.cardProperty.imageCard}
              label={props.cardProperty.labelCard}
              labelColor={colors.uma}
            />
          }
          icon="disclosure-small"
          backgroundColor={colors.ukko}
        />
      </View>
      <View style={styles.Footer}>
        <ButtonRegular
          buttonStyle="primary"
          label={props.buttonTitle}
          onPress={props.buttonOnPress}
        />
      </View>
    </View>
  ) : (
    undefined
  );

export const PaymentPanel = React.memo(PaymentPanelUnmemoized);
