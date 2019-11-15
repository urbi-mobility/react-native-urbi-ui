import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../utils/colors';
import { registeredTextStyle } from '../utils/textStyles';

const fontStyle = registeredTextStyle('title1', colors.ulisse);

type TopBarTitleProps = {
  text: string;
  textColor?: string;
};

const TopBarTitleUnmemoized = (props: TopBarTitleProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'stretch' }}>
      <Text style={props.textColor ? [fontStyle, { color: props.textColor }] : fontStyle}>
        {props.text}
      </Text>
    </View>
  );
};

export const TopBarTitle = React.memo(TopBarTitleUnmemoized);
