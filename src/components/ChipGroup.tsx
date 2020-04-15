import React from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { ChipLargeProps } from 'src/molecules/ChipLarge';
import { ChipToggle } from 'src/molecules/buttons/toggles/ChipToggle';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    height: 46,
    minHeight: 46,
  } as ViewStyle,
  ScrollView: {
    flex: 1,
    height: 46,
    minHeight: 46,
  } as ViewStyle,
  ScrollViewContent: {
    paddingTop: 8,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 4,
  },
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
};

const getStateFromProps = (props: ChipGroupProps) => ({
  chipStates: props.chips.reduce((prev, cp) => {
    prev[cp.id] = true;
    return prev;
  }, {} as { [id: string]: boolean }),
});

export class ChipGroup extends React.PureComponent<ChipGroupProps, ChipGroupState> {
  private scrollView: React.RefObject<ScrollView>;

  constructor(props: ChipGroupProps) {
    super(props);

    this.state = getStateFromProps(props);

    this.toggleActive = this.toggleActive.bind(this);

    this.scrollView = React.createRef();
  }

  componentDidUpdate(prevProps: ChipGroupProps) {
    if (prevProps.chips !== this.props.chips) {
      this.setState(getStateFromProps(this.props));
      if (this.scrollView.current)
        this.scrollView.current.scrollTo({ x: 0, y: 0, animated: false });
    }
  }

  toggleActive(id: string, isActive: boolean) {
    const newChipStates = { ...this.state.chipStates };
    const chips = Object.values(newChipStates);
    const active = Object.entries(newChipStates)
      .filter(([_, v]) => v)
      .map(([k]) => k);

    /*
     * The logic here is:
     * - if all toggles are active, toggling one should disable all the other
     * - if I'm disabling the last active toggle, all toggles should be enabled
     */
    if (active.length === chips.length || (active.length === 1 && active[0] === id)) {
      Object.keys(newChipStates).forEach((k) => {
        newChipStates[k] = active.length < chips.length;
      });
      newChipStates[id] = true;
    } else {
      newChipStates[id] = isActive;
    }
    this.setState({ chipStates: newChipStates });
    this.props.onActiveChanged(
      Object.entries(newChipStates)
        .filter(([_, v]) => v)
        .map(([k]) => k)
    );
  }

  render() {
    return (
      <View style={styles.Wrapper}>
        <ScrollView
          ref={this.scrollView}
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollViewContent}
          horizontal
        >
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
    );
  }
}
