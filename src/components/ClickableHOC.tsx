import React, { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Testable } from 'src/types';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  } as ViewStyle,
});

interface ClickableProps extends Testable {
  children: ReactNode;
  onClick: () => any;
}

export const ClickableUnmemoized = (props: ClickableProps) => (
  <TouchableOpacity style={styles.Wrapper} onPress={props.onClick} testID={props.testID}>
    {props.children}
  </TouchableOpacity>
);

export const Clickable = React.memo(ClickableUnmemoized);
