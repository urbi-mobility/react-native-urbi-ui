import React from 'react';
import { styles } from '../../../molecules/buttons/ButtonStyles';
import { IconButton } from '../../../molecules/buttons/iconButtons/IconButton';
import { sizes } from '../../../molecules/buttons/iconButtons/IconButtonRegular';
import { ToggleProps } from '../../../molecules/buttons/types';
import { colors } from '../../../utils/colors';

type ToggleState = {
  active: boolean;
  pendingUpdates: number;
};

export class IconToggle extends React.PureComponent<ToggleProps, ToggleState> {
  static getDerivedStateFromProps(props: ToggleProps, state: ToggleState) {
    if (props.managed && state.pendingUpdates === 0 && props.active !== state.active) {
      return { active: props.active };
    }
    return null;
  }

  constructor(props: ToggleProps) {
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
    const buttonStyle = active ? 'primary' : 'switched-off';
    const computedStyle = styles({ ...this.props, buttonStyle });
    if (active) {
      computedStyle.backgroundColor = colors.ulisse;
      computedStyle.color = colors.uma;
    }
    return (
      <IconButton
        buttonStyle={buttonStyle}
        onPress={this.toggleState}
        icon={this.props.icon}
        style={this.props.style}
        {...sizes}
        {...computedStyle}
      />
    );
  }
}
