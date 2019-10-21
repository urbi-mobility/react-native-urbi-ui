import React, { ReactElement } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ListItemUnmemoized } from '../components/ListItem';
import { ListItemLargeUnmemoized } from '../components/ListItemLarge';
import { StepperUnmemoized } from '../molecules/Stepper';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 12,
  } as ViewStyle,
});

type ListItemStepperProps = {
  content: ReactElement<typeof ListItemUnmemoized> | ReactElement<typeof ListItemLargeUnmemoized>;
  stepper: ReactElement<typeof StepperUnmemoized>;
};

export const ListItemStepperUnmemoized = (props: ListItemStepperProps) => (
  <View style={styles.Wrapper}>
    {props.content}
    {props.stepper}
  </View>
);

export const ListItemStepper = React.memo(ListItemStepperUnmemoized);
