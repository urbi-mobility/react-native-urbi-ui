import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Touchable } from '../components/Touchable';
import { ControlProps } from '../molecules/content/Checkbox';
import ControlAndLabel from '../molecules/content/ControlAndLabel';

const styles = StyleSheet.create({
  Touchable: {
    flex: 1,
  },
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
  } as ViewStyle,
});

export interface ListItemRadioProps extends ControlProps {
  label: string;
  subtitle?: string;
}

export const ListItemRadioUnmemoized = (props: ListItemRadioProps) => {
  const onLinePress = () => props.onPress(props.id, true);
  return (
    <View style={styles.Touchable}>
      <Touchable style={styles.Wrapper} onPress={onLinePress}>
        <ControlAndLabel {...props} control="radiobutton" />
      </Touchable>
    </View>
  );
};

export const ListItemRadio = React.memo(ListItemRadioUnmemoized);
