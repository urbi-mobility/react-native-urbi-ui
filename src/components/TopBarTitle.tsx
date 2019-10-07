import React from 'react';
import { Text, View } from 'react-native';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

const fontStyle = registeredTextStyle('title1', colors.ulisse);

type TopBarTitleProps = {
  text: string;
};

const TopBarTitle = (props: TopBarTitleProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'stretch' }}>
      <Text style={fontStyle}>{props.text}</Text>
    </View>
  );
};

export default React.memo(TopBarTitle);
