import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../../utils/colors';
import { registeredTextStyle } from '../../utils/textStyles';

export type LinkProps = {
  text: string;
  onPress: () => any;
  compact?: boolean;
  uppercase?: boolean;
};

const textStyle = registeredTextStyle('titleBold', colors.primary, 'link');
const textStyleCompact = registeredTextStyle('button', colors.primary, 'link-compact');

export const Link = (props: LinkProps) => (
  <TouchableOpacity onPress={props.onPress}>
    <Text style={props.compact ? textStyleCompact : textStyle}>
      {props.uppercase ? props.text.toUpperCase() : props.text}
    </Text>
  </TouchableOpacity>
);

export default React.memo(Link);
