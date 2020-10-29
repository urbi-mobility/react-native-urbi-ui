import React from 'react';
import { styles } from 'src/molecules/buttons/ButtonStyles';
import { IconButton } from 'src/molecules/buttons/iconButtons/IconButton';
import { IconButtonProps } from 'src/molecules/buttons/types';

export const sizes = {
  size: 44,
  innerIconSize: 40,
};

const getSize = (props: IconButtonProps) =>
  props.iconSizeOverride ? { size: sizes.size, innerIconSize: props.iconSizeOverride } : sizes;

const IconButtonRegularUnmemoized = (props: IconButtonProps) => (
  <IconButton icon={props.icon} {...styles(props)} {...getSize(props)} {...props} />
);

export const IconButtonRegular = React.memo(IconButtonRegularUnmemoized);
