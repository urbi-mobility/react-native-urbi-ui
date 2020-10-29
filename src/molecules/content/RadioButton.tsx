import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ControlProps } from 'src/molecules/content/Checkbox';
import { colors } from 'src/utils/colors';

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
    borderRadius: 20,
    borderWidth: 1,
    height: 20,
    width: 20,
  },
  Selected: {
    borderRadius: 6,
    height: 12,
    width: 12,
  },
});

export const RadioButtonUnmemoized = (props: ControlProps) => {
  return (
    <View
      style={[
        styles.InnerView,
        {
          borderColor: props.selectedColor || colors.primary,
        },
      ]}
    >
      {props.selected && (
        <View
          style={[styles.Selected, { backgroundColor: props.selectedColor || colors.primary }]}
        />
      )}
    </View>
  );
};

export const RadioButton = React.memo(RadioButtonUnmemoized);
