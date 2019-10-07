import React, { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  } as ViewStyle,
});

type ClickableProps = {
  children: ReactNode;
  onClick: () => any;
};

export const Clickable = (props: ClickableProps) => (
  <TouchableOpacity style={styles.Wrapper} onPress={props.onClick}>
    {props.children}
  </TouchableOpacity>
);

export default React.memo(Clickable);
