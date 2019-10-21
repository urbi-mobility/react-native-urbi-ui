import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { IconButtonCompact } from '../molecules/buttons/iconButtons/IconButtonCompact';
import { colors } from '../utils/colors';
import { registeredTextStyle } from '../utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 95,
    height: 45,
  } as ViewStyle,
});

const defaultNumberStyle = registeredTextStyle('title', colors.uma, 'stepper-default');
const numberStyle = registeredTextStyle('titleBold', colors.brand, 'stepper-value');

const onValueChange = (props: StepperProps, action: 'increase' | 'decrease') => () =>
  props.onValueChange(action === 'increase' ? props.value + 1 : props.value - 1);

type StepperProps = {
  value: number;
  defaultValue: number;
  onValueChange: (newValue: number) => any;
  min?: number;
  max?: number;
};

export const StepperUnmemoized = (props: StepperProps) => (
  <View style={styles.Wrapper}>
    <IconButtonCompact
      buttonStyle={props.value === props.min ? 'disabled' : 'default'}
      icon="minus-small"
      onPress={onValueChange(props, 'decrease')}
    />
    <Text style={props.value === props.defaultValue ? defaultNumberStyle : numberStyle}>
      {props.value}
    </Text>
    <IconButtonCompact
      buttonStyle={props.value === props.max ? 'disabled' : 'default'}
      icon="plus-small"
      onPress={onValueChange(props, 'increase')}
    />
  </View>
);

export const Stepper = React.memo(StepperUnmemoized);
