import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '../../utils/colors';
import { Icon } from '../../utils/const';

const styles = StyleSheet.create({
  Touchable: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  } as ViewStyle,
  InnerView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 1,
    height: 20,
    width: 20,
  },
});

export interface ControlProps {
  id: string;
  onPress: (id: string, selected: boolean) => any;
  selected: boolean;
  selectedColor?: string;
}

export interface CheckboxProps extends ControlProps {
  selectedBGColor?: string;
}

export const CheckboxUnmemoized = (props: CheckboxProps) => (
  <View
    style={[
      styles.InnerView,
      {
        backgroundColor: (props.selected && (props.selectedBGColor || colors.primary)) || undefined,
        borderColor: props.selectedBGColor || colors.primary,
      },
    ]}
  >
    {props.selected && (
      <Icon name="checkmark" color={props.selectedColor || colors.ulisse} size={14} />
    )}
  </View>
);

export const Checkbox = React.memo(CheckboxUnmemoized);
