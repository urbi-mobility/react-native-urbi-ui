import React, { ReactElement } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ButtonCompact } from '../molecules/buttons/ButtonCompact';
import { PurchaseUrmemoraized } from '../molecules/content/Purchase';
import { colors } from '../utils/colors';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    height: 92,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ulisse,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    shadowOffset: { height: 4, width: 0 },
  },
  WrapperChild: {
    flex: 1,
  },
  DetailWithButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export type PurchasePanelProps = {
  label: string;
  onButtonPress: () => any;
  purchase: ReactElement<typeof PurchaseUrmemoraized>;
  style?: ViewStyle;
};

export const PurchasePanelUrmemoraized = (props: PurchasePanelProps) => (
  <View style={[styles.Wrapper, props.style]}>
    <View style={styles.DetailWithButtonWrapper}>
      {props.purchase}
      <ButtonCompact onPress={props.onButtonPress} label={props.label} buttonStyle={'primary'} />
    </View>
  </View>
);

export const PurchasePanel = React.memo(PurchasePanelUrmemoraized);
