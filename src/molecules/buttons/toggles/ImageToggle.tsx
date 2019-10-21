import React from 'react';
import { IconButton } from '../../../molecules/buttons/iconButtons/IconButton';
import { colors } from '../../../utils/colors';
import { onIOS } from '../../../utils/const';
import { IconToggle } from './IconToggle';

export const size = 40;
const innerIconSize = onIOS ? 40 : 44; // this way no padding is shown around the image

export class ImageToggle extends IconToggle {
  render() {
    const { active } = this.state;
    return (
      <IconButton
        onPress={this.toggleState}
        // we set a button style, but it's overridden explicitly here
        buttonStyle="default"
        backgroundColor={colors.transparent}
        borderColor={active ? colors.ukko : undefined}
        color={active ? colors.ulisse : colors.primary}
        icon={this.props.icon}
        size={size}
        innerIconSize={innerIconSize}
        noShadow={!active}
        opacity={active ? 1 : 0.3}
      />
    );
  }
}
