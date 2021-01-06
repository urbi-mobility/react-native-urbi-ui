import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { IconButtonRegular } from 'src/molecules/buttons/iconButtons/IconButtonRegular';
import { IconToggle } from 'src/molecules/buttons/toggles/IconToggle';
import { Testable } from 'src/types';

type FilterButton = { id: string; icon: string; active?: boolean; loading?: boolean };

interface FilterGroupProps extends Testable {
  filterButtons: FilterButton[];
  lastButton?: { active: boolean; icon: string; onPress: () => any };
  onFilterToggle: (id: string, active: boolean) => void;
  managed?: boolean; // whether the state of filters is managed through props
  style?: ViewStyle;
}

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 12,
    paddingBottom: 12,
    height: 68,
  } as ViewStyle,
});

const buttons = (props: FilterGroupProps) =>
  props.filterButtons.map((b) => (
    <IconToggle
      key={`filterButton-${b.id}`}
      id={b.id}
      icon={b.icon}
      active={b.active || false}
      setActive={props.onFilterToggle}
      managed={props.managed}
      loading={b.loading}
      testID={`${props.testID ?? 'filterGroupToggle'}-${b.id}`}
    />
  ));

const FilterGroupUnmemoized = (props: FilterGroupProps) => {
  const maxWidth =
      props.filterButtons.length * (40 + 28) +
      (props.lastButton /* taxi */ ? 40 : 0) +
      16 * 2 /* padding */;
  return (
    <View
      // tslint:disable-next-line:jsx-no-multiline-js
      style={[styles.Wrapper, props.style, { maxWidth }]}
    >
      {buttons(props)}
      {props.lastButton ? (
        <IconButtonRegular
          buttonStyle={props.lastButton.active ? 'brand' : 'primary'}
          icon={props.lastButton.icon}
          onPress={props.lastButton.onPress}
          testID={`${props.testID ?? 'filterGroupToggle'}-last`}
        />
      ) : null}
    </View>
  );
};

export const FilterGroup = React.memo(FilterGroupUnmemoized);
