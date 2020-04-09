import React from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { ChipLargeProps } from 'src/molecules/ChipLarge';
import { ChipToggle } from 'src/molecules/buttons/toggles/ChipToggle';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    height: 42,
    minHeight: 42,
    paddingTop: 4,
    paddingLeft: 16,
    paddingBottom: 16,
  } as ViewStyle,
  ScrollViewWrapper: {
    height: 22,
    maxHeight: 22,
  } as ViewStyle,
  ScrollView: {
    flex: 1,
  } as ViewStyle,
  ScrollViewItem: {
    marginRight: 8,
  },
});

type ChipGroupItem = {
  id: string;
  props: ChipLargeProps;
};

type ChipGroupProps = {
  chips: ChipGroupItem[];
  onActiveChanged: (activeIds: string[]) => any;
};

type ChipGroupState = {
  chipStates: { [id: string]: boolean };
  firstChipToggled: boolean;
};

export class ChipGroup extends React.PureComponent<ChipGroupProps, ChipGroupState> {
  constructor(props: ChipGroupProps) {
    super(props);

    this.state = {
      firstChipToggled: false,
      chipStates: props.chips.reduce((prev, cp) => {
        prev[cp.id] = true;
        return prev;
      }, {} as { [id: string]: boolean }),
    };

    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(id: string, isActive: boolean) {
    const newChipStates = { ...this.state.chipStates };
    if (!this.state.firstChipToggled) {
      Object.keys(newChipStates).forEach((k) => {
        newChipStates[k] = false;
      });
      newChipStates[id] = true;
      this.setState({ firstChipToggled: true, chipStates: newChipStates });
      this.props.onActiveChanged([id]);
    } else {
      newChipStates[id] = isActive;
      this.setState({ chipStates: newChipStates });
      this.props.onActiveChanged(
        Object.entries(newChipStates)
          .filter(([_, v]) => v)
          .map(([k]) => k)
      );
    }
  }

  render() {
    return (
      <View style={styles.Wrapper}>
        <View style={styles.ScrollViewWrapper}>
          <ScrollView style={styles.ScrollView} horizontal>
            {this.props.chips.map((chip) => (
              <View key={`chip-${chip.id}`} style={styles.ScrollViewItem}>
                <ChipToggle
                  id={chip.id}
                  chipProps={chip.props}
                  active={this.state.chipStates[chip.id]}
                  setActive={this.toggleActive}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
