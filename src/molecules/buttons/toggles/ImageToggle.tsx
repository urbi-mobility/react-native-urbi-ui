import React from 'react';
import IconButton from 'src/molecules/buttons/iconButtons/IconButton';
import IconToggle from './IconToggle';
import { colors } from 'src/utils/colors';

export const size = 40;
const innerIconSize = 44; // this way no padding is shown around the image

class ImageToggle extends IconToggle {
  render() {
    const { active } = this.state;
    return (
      <IconButton
        onPress={this.toggleState}
        // we set a button style, but it's overridden explicitly here
        buttonStyle="default"
        backgroundColor={active ? colors.ukko : colors.ursula}
        borderColor={active ? colors.ukko : undefined}
        color={active ? colors.ulisse : colors.primary}
        icon={this.props.icon}
        size={size}
        innerIconSize={innerIconSize}
        noShadow={!active}
        style={{ opacity: active ? 1 : 0.3, shadowOpacity: active ? 1 : 0 }}
      />
    );
  }
}

export default ImageToggle;
