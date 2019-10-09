import React from 'react';
import Button from '../../molecules/buttons/Button';
import { ButtonProps } from '../../molecules/buttons/types';
import { styles } from './ButtonStyles';

export const sizes = {
  height: 32,
  horizontalPadding: 16,
  loadingSize: 4,
  maxWidth: 290,
  minWidth: 80,
};

const ButtonCompact = (props: ButtonProps) => (
  <Button textStyle="button" isUppercase {...sizes} {...styles(props)} {...props} />
);

export default React.memo(ButtonCompact);
