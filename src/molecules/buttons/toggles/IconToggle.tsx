import React from 'react';
import { styles } from '../../../molecules/buttons/ButtonStyles';
import IconButton from '../../../molecules/buttons/iconButtons/IconButton';
import { sizes } from '../../../molecules/buttons/iconButtons/IconButtonRegular';
import { ToggleProps } from '../../../molecules/buttons/types';
import { colors } from '../../../utils/colors';
import { showAlert } from '../../../utils/functions';

type ToggleState = {
  active: boolean;
};

class IconToggle extends React.PureComponent<ToggleProps, ToggleState> {
  constructor(props: ToggleProps) {
    super(props);
    if (props.id === 'thinking') showAlert('initialized');
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
