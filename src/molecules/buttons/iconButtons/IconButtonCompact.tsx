import React from 'react';
import { styles } from 'src/molecules/buttons/ButtonStyles';
import { IconButton } from 'src/molecules/buttons/iconButtons/IconButton';
import { IconButtonProps } from 'src/molecules/buttons/types';

export const sizes = {
  size: 24,
  innerIconSize: 18,
};

export const IconButtonCompactUnmemoized = (props: IconButtonProps) => (
  <IconButton icon={props.icon} {...styles(props)} {...sizes} {...props} />
);

export const IconButtonCompact = React.memo(IconButtonCompactUnmemoized);
