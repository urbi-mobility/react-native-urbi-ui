import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from 'src/utils/colors';

type BottomTriangleProps = {
  color?: keyof typeof colors;
};

export const BottomTriangle = (props: BottomTriangleProps) => (
  <Svg width={15} height={9} viewBox="0 0 15 9" fill="none">
    <Path
      d="M9.1 7.867a2 2 0 01-3.2 0L0 0h15L9.1 7.867z"
      fill={props.color ? colors[props.color] : colors.tertiary}
    />
  </Svg>
);
