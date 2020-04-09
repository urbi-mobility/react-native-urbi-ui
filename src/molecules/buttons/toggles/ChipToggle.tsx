import React from 'react';
import { ChipLarge, ChipLargeProps } from 'src/molecules/ChipLarge';
import { hexToRgba } from 'src/utils/colors';

type ChipToggleState = {
  active: boolean;
  pendingUpdates: number;
};

type ChipToggleProps = {
  active: boolean;
  chipProps: ChipLargeProps;
  id: string;
  setActive: (id: string, isActive: boolean) => any;
};

export class ChipToggle extends React.PureComponent<ChipToggleProps, ChipToggleState> {
  static getDerivedStateFromProps(props: ChipToggleProps, state: ChipToggleState) {
    if (state.pendingUpdates === 0 && props.active !== state.active) {
      return { active: props.active };
    }
    return null;
  }

  constructor(props: ChipToggleProps) {
    super(props);
    const { active } = props;
    this.state = { active, pendingUpdates: 0 };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    const { active, pendingUpdates } = this.state;
    const { id, setActive } = this.props;
    const newState = !active;
    this.setState({ active: newState, pendingUpdates: pendingUpdates + 1 }, () => {
      setActive(id, newState);
      this.setState({ pendingUpdates: this.state.pendingUpdates - 1 });
    });
  }

  render() {
    const { active } = this.state;
    const { chipProps } = this.props;
    return (
      <ChipLarge
        {...chipProps}
        onPress={this.toggleState}
        color={active ? chipProps.color : hexToRgba(chipProps.color, 0.3)}
      />
    );
  }
}
