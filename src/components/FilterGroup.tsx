import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { IconButtonRegular } from '../molecules/buttons/iconButtons/IconButtonRegular';
import { IconToggle } from '../molecules/buttons/toggles/IconToggle';
import { colors } from '../utils/colors';

type FilterButton = { id: string; icon: string; active?: boolean; loading?: boolean };

type FilterGroupProps = {
  filterButtons: FilterButton[];
  onFilterToggle: (id: string, active: boolean) => void;
  onLastButtonClick: () => void;
  style?: ViewStyle;
  managed?: boolean; // whether the state of filters is managed through props
  activeLastButton?: boolean;
};

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
    />
  ));

const FilterGroupUnmemoized = (props: FilterGroupProps) => {
  const maxWidth = props.filterButtons.length * (40 + 28) + 40 /* taxi */ + 16 * 2 /* padding */;
  return (
    <View
      // tslint:disable-next-line:jsx-no-multiline-js
      style={[styles.Wrapper, props.style, { maxWidth }]}
    >
      {buttons(props)}
      <IconButtonRegular
        buttonStyle={props.activeLastButton ? 'brand' : 'primary'}
        icon="taxi"
        onPress={props.onLastButtonClick}
      />
    </View>
  );
};

export const FilterGroup = React.memo(FilterGroupUnmemoized);
