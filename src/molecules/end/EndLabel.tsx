import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

type EndLabelProps = {
  label: string;
  style?: ViewStyle;
  textColor?: string;
};

const styles = StyleSheet.create({
  Wrapper: {
    height: 40,
    justifyContent: 'center',
    flex: 0,
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 1,
    marginRight: 4,
  },
  Text: {
    textAlign: 'right',
  },
});

const textStyle = registeredTextStyle('titleBold', colors.uma, 'EndLabel');

const EndLabel = (props: EndLabelProps) => (
  <View style={[styles.Wrapper, props.style]}>
    <Text
      style={[textStyle, styles.Text, { color: props.textColor || colors.uma }]}
      numberOfLines={1}
    >
      {props.label}
    </Text>
  </View>
);

export default React.memo(EndLabel);
