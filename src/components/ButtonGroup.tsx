import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonCompact } from '../molecules/buttons/ButtonCompact';

type ButtonGroupEntry = {
  onPress: () => any;
  onLongPress?: () => any;
  label: string;
  active: boolean;
};

type ButtonGroupProps = {
  buttons: ButtonGroupEntry[];
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 12,
    marginRight: 20,
    marginBottom: 16,
    marginLeft: 20,
  },
  WithMargin: {
    marginRight: 20,
  },
});

/**
 * A group of buttons all having the same "priority". See https://zpl.io/bznZYPM
 */
const ButtonGroupUnmemoized = (props: ButtonGroupProps) => (
  <View style={styles.Wrapper}>
    {props.buttons.map((b, i) => (
      <ButtonCompact
        key={`b-${i}`}
        buttonStyle={b.active ? 'brand' : 'primary'}
        style={i === props.buttons.length - 1 ? undefined : styles.WithMargin}
        label={b.label}
        onLongPress={b.onLongPress}
        onPress={b.onPress}
      />
    ))}
  </View>
);

export const ButtonGroup = React.memo(ButtonGroupUnmemoized);
