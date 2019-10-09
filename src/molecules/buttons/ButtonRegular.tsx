import React from 'react';
import Button from '../../molecules/buttons/Button';
import { ButtonProps } from '../../molecules/buttons/types';
import { styles } from './ButtonStyles';

export const sizes = {
  height: 44,
  horizontalPadding: 20,
  loadingSize: 6,
  maxWidth: 660,
  minWidth: 240,
};

export const ButtonRegularUnmemoized = (props: ButtonProps) => (
  <Button textStyle="button" isUppercase {...sizes} {...styles(props)} {...props} />
);

export default React.memo(ButtonRegularUnmemoized);
