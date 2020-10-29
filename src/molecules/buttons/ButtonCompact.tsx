import React from 'react';
import { Button } from 'src/molecules/buttons/Button';
import { ButtonProps } from 'src/molecules/buttons/types';
import { styles } from './ButtonStyles';

export const sizes = {
  height: 32,
  horizontalPadding: 16,
  loadingSize: 4,
  maxWidth: 290,
  minWidth: 80,
};

export const ButtonCompactUnmemoized = (props: ButtonProps) => (
  <Button textStyle="button" isUppercase {...sizes} {...styles(props)} {...props} />
);

export const ButtonCompact = React.memo(ButtonCompactUnmemoized);
