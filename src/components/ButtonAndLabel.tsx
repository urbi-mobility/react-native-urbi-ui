import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 60,
    paddingTop: 12,
    paddingRight: 20,
    paddingBottom: 16,
    paddingLeft: 20,
  },
});

type ButtonAndLabelProps = {
  button: JSX.Element;
  label: JSX.Element;
};

export const ButtonAndLabelUnmemoized = (props: ButtonAndLabelProps) => (
  <View style={styles.Wrapper}>
    {React.cloneElement(props.button, { style: { marginRight: 10 } })}
    {React.cloneElement(props.label, { style: { marginLeft: 10 } })}
  </View>
);

export const ButtonAndLabel = React.memo(ButtonAndLabelUnmemoized);
