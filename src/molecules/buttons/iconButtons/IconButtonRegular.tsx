import React from 'react';
import { styles } from '../../../molecules/buttons/ButtonStyles';
import IconButton from '../../../molecules/buttons/iconButtons/IconButton';
import { IconButtonProps } from '../../../molecules/buttons/types';

export const sizes = {
  size: 44,
  innerIconSize: 40,
};

const IconButtonRegular = (props: IconButtonProps) => (
  <IconButton icon={props.icon} {...styles(props)} {...sizes} {...props} />
);

export default React.memo(IconButtonRegular);
