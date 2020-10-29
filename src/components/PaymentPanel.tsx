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
import { ListItem } from 'src/components/ListItem';
import { ButtonRegular } from 'src/molecules/buttons/ButtonRegular';
import { LinkCompact } from 'src/molecules/buttons/LinkCompact';
import { IconAndLabel } from 'src/molecules/content/IconAndLabel';
import { SectionsDivider } from 'src/molecules/SectionsDivider';
import { colors } from 'src/utils/colors';
import { IPHONE_X_HOME_AREA_HEIGHT } from 'src/utils/const';
import { textStyle as makeTextStyle } from 'src/utils/textStyles';

const footerMarginBottom = 24;

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
    height: 380,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    shadowOffset: { height: 4, width: 0 },
    backgroundColor: colors.ulisse,
  } as ViewStyle,
  LoadingWrapper: {
    paddingTop: 150,
    paddingBottom: 150,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  } as ViewStyle,
  ContentWrapper: {
    flex: 1,
  },
  Cancel: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 12,
  } as ViewStyle,
  TitleOrder: {
    ...makeTextStyle('title', colors.uma),
    marginLeft: 16,
    marginRight: 12,
    marginBottom: 4,
  } as TextStyle,
  PriceOrder: {
    ...makeTextStyle('hero', colors.uma),
    marginLeft: 16,
    marginRight: 12,
    marginBottom: 12,
  } as TextStyle,
  PaymentMethodWrapper: {
    flexGrow: 1,
    flexShrink: 1,
  },
  Footer: {
    flexGrow: 0,
    flexBasis: 56,
    flexShrink: 0,
    justifyContent: 'center',
    marginBottom: footerMarginBottom,
    paddingHorizontal: 40,
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
  onIphoneX: boolean;
  accountForBottomTabs?: boolean;
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
        <View
          style={
            props.onIphoneX && !props.accountForBottomTabs
              ? [styles.WrapperChild, { height: 380 + IPHONE_X_HOME_AREA_HEIGHT }]
              : styles.WrapperChild
          }
        >
          {props.loading ? (
            <View style={styles.LoadingWrapper}>
              <ActivityIndicator size="large" color={colors.brand} />
            </View>
          ) : (
            <View style={styles.ContentWrapper}>
              <View style={styles.Cancel}>
                <LinkCompact text={props.cancel} onPress={props.onCancelPress} uppercase />
              </View>
              <SectionsDivider label={props.title} backgroundColor={colors.ulisse} />
              <Text style={styles.TitleOrder}>{props.nameShop}</Text>
              <Text style={styles.PriceOrder}>{props.price}</Text>
              <SectionsDivider label={props.paymentTitle} backgroundColor={colors.ulisse} />
              <View style={styles.PaymentMethodWrapper}>
                <ListItem
                  onPress={props.cardProperty.onCardPress}
                  content={
                    <IconAndLabel
                      image={props.cardProperty.imageCard}
                      label={props.cardProperty.labelCard}
                      labelColor={colors.uma}
                    />
                  }
                  backgroundColor={colors.ulisse}
                  icon="disclosure-small"
                />
              </View>
              <View
                style={
                  props.onIphoneX && !props.accountForBottomTabs
                    ? [
                        styles.Footer,
                        { marginBottom: footerMarginBottom + IPHONE_X_HOME_AREA_HEIGHT },
                      ]
                    : styles.Footer
                }
              >
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
