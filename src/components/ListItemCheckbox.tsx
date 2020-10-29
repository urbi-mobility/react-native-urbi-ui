import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Touchable } from 'src/components/Touchable';
import { CheckboxProps } from 'src/molecules/content/Checkbox';
import ControlAndLabel from 'src/molecules/content/ControlAndLabel';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  Touchable: {
    flex: 1,
  },
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
  } as ViewStyle,
  Checkbox: {
    flex: 1,
    minWidth: '60%',
  } as ViewStyle,
  SelectedInfo: {
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  } as ViewStyle,
});

interface ListItemCheckboxProps extends CheckboxProps {
  label: string;
  subtitle?: string;
  onSelectShow?: string;
}

const selectedInfoStyle = registeredTextStyle('titleBold', colors.brand, 'selectedInfo');

export const ListItemCheckboxUnmemoized = (props: ListItemCheckboxProps) => {
  const onLinePress = () => props.onPress(props.id, !props.selected);
  return (
    <View style={styles.Touchable}>
      <Touchable style={styles.Wrapper} onPress={onLinePress}>
        <ControlAndLabel {...props} style={styles.Checkbox} control="checkbox" />
        {props.selected && (
          <View style={styles.SelectedInfo}>
            <Text style={selectedInfoStyle} numberOfLines={1}>
              {props.onSelectShow}
            </Text>
          </View>
        )}
      </Touchable>
    </View>
  );
};

export const ListItemCheckbox = React.memo(ListItemCheckboxUnmemoized);
