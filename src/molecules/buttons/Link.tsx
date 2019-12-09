import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../../utils/colors';
import { registeredTextStyle } from '../../utils/textStyles';

export type LinkProps = {
  text: string;
  onPress: () => any;
  compact?: boolean;
  uppercase?: boolean;
  center?: boolean;
};

const textStyle = registeredTextStyle('titleBold', colors.primary, 'link');
const textStyleCompact = registeredTextStyle('button', colors.primary, 'link-compact');

export const LinkUnmemoized = (props: LinkProps) => {
  const { center, compact, onPress } = props;
  const style = compact ? textStyleCompact : textStyle;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={center ? [style, { textAlign: 'center' }] : style}>
        {props.uppercase ? props.text.toUpperCase() : props.text}
      </Text>
    </TouchableOpacity>
  );
};

export const Link = React.memo(LinkUnmemoized);
