import React, { ReactElement } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ButtonCompact } from 'src/molecules/buttons/ButtonCompact';
import { PurchaseProps, PurchaseUnmemoized } from 'src/molecules/content/Purchase';
import { colors } from 'src/utils/colors';

export const purchasePanelHeight = 92;
const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    height: purchasePanelHeight,
    backgroundColor: colors.ulisse,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    shadowColor: colors.uma,
    shadowOpacity: 1.0,
    shadowOffset: { height: 4, width: 0 },
    justifyContent: 'center',
    paddingLeft: 24,
    paddingRight: 12,
  },
  DetailWithButtonWrapper: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export type PurchasePanelProps = {
  label: string;
  onButtonPress: () => any;
  purchase: ReactElement<typeof PurchaseUnmemoized>;
  style?: ViewStyle;
};

export const PurchasePanelUnmemoized = (props: PurchasePanelProps) => (
  <View style={[styles.Wrapper, props.style]} elevation={5}>
    <View style={styles.DetailWithButtonWrapper}>
      {/* TODO fix this exoteric layout, this magic number makes both sides take up to 50% width */}
      {React.cloneElement(props.purchase, { style: { minWidth: '18%' } } as Partial<PurchaseProps>)}
      <ButtonCompact onPress={props.onButtonPress} label={props.label} buttonStyle="primary" />
    </View>
  </View>
);

export const PurchasePanel = React.memo(PurchasePanelUnmemoized);
