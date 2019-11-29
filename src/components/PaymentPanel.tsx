import React, { useLayoutEffect, useRef } from 'react';
import {
  ActivityIndicator,
  ImageRequireSource,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Transition, Transitioning, TransitioningView } from 'react-native-reanimated';
import { ButtonRegular } from '../molecules/buttons/ButtonRegular';
import { LinkCompact } from '../molecules/buttons/LinkCompact';
import { IconAndLabel } from '../molecules/content/IconAndLabel';
import { SectionsDivider } from '../molecules/SectionsDivider';
import { colors } from '../utils/colors';
import { textStyle as makeTextStyle } from '../utils/textStyles';
import { ListItemLarge } from './ListItemLarge';

const styles = StyleSheet.create({
  Wrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 666,
  } as ViewStyle,
  WrapperChild: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    shadowOffset: { height: 4, width: 0 },
    backgroundColor: colors.ulisse,
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
  ContainerCenter: {
    paddingTop: 150,
    paddingBottom: 150,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  } as ViewStyle,
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
  loading: boolean;
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

const transition = (
  <Transition.In type="slide-bottom" durationMs={150} interpolation="easeIn" propagation="bottom" />
);

export const PaymentPanelUnmemoized = (props: PaymentPanelProps) => {
  const ref = useRef<TransitioningView>();

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current!.animateNextTransition();
    }
  }, [props.show]);

  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={props.show ? styles.Wrapper : { height: 0 }}
      elevation={5}
    >
      {props.show && (
        <View style={styles.WrapperChild}>
          {props.loading ? (
            <View style={styles.ContainerCenter}>
              <ActivityIndicator size="large" color={colors.brand} />
            </View>
          ) : (
            <View>
              <View style={styles.Cancel}>
                <LinkCompact text={props.cancel} onPress={props.onCancelPress} uppercase />
              </View>
              <SectionsDivider
                label={props.title}
                labelColor={colors.ughina}
                backgroundColor={colors.ulisse}
              />
              <Text style={styles.TitleOrder}>{props.nameShop}</Text>
              <Text style={styles.PriceOrder}>{props.price}</Text>
              <View style={{ flex: 1 }}>
                <SectionsDivider
                  label={props.paymentTitle}
                  labelColor={colors.ughina}
                  backgroundColor={colors.ulisse}
                />
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
          )}
        </View>
      )}
    </Transitioning.View>
  );
};

export const PaymentPanel = React.memo(PaymentPanelUnmemoized);
