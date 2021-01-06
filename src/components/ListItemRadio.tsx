import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Touchable } from 'src/components/Touchable';
import { ControlProps } from 'src/molecules/content/Checkbox';
import ControlAndLabel from 'src/molecules/content/ControlAndLabel';

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
      <Touchable style={styles.Wrapper} onPress={onLinePress} testID={props.testID}>
        <ControlAndLabel {...props} control="radiobutton" />
      </Touchable>
    </View>
  );
};

export const ListItemRadio = React.memo(ListItemRadioUnmemoized);
