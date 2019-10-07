import React from 'react';
import { styles } from 'src/molecules/buttons/ButtonStyles';
import IconButton from 'src/molecules/buttons/iconButtons/IconButton';
import { sizes } from 'src/molecules/buttons/iconButtons/IconButtonRegular';
import { ToggleProps } from 'src/molecules/buttons/types';
import { colors } from 'src/utils/colors';

type ToggleState = {
  active: boolean;
};

class IconToggle extends React.PureComponent<ToggleProps, ToggleState> {
  constructor(props: ToggleProps) {
    super(props);
    const { active } = props;
    this.state = { active };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    const { active } = this.state;
    const { id, managed, setActive } = this.props;
    if (managed && this.props.active !== active) return; // debounce click events
    // execute the callback after a render() took place, as we want the button to change state
    this.setState({ active: !active }, () => requestAnimationFrame(() => setActive(id, !active)));
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

export default IconToggle;
