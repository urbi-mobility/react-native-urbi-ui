import React from 'react';
import { IconButton } from 'src/molecules/buttons/iconButtons/IconButton';
import { colors } from 'src/utils/colors';
import { IconToggle } from './IconToggle';

export const size = 40;

export class ImageToggle extends IconToggle {
  render() {
    const { active } = this.state;
    return (
      <IconButton
        testID={this.props.testID ?? this.props.testID}
        onPress={this.toggleState}
        // we set a button style, but it's overridden explicitly here
        buttonStyle="default"
        backgroundColor={colors.transparent}
        borderColor={active ? colors.ukko : undefined}
        color={active ? colors.ulisse : colors.primary}
        icon={this.props.icon}
        size={size}
        innerIconSize={size}
        noShadow={!active}
        opacity={active ? 1 : 0.3}
      />
    );
  }
}
