import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

type LabelProps = {
  text: string;
  style?: ViewStyle;
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
  },
});

const textStyle = registeredTextStyle('title', colors.uma);

const LabelTitleUnmemoized = (props: LabelProps) => (
  <View style={[styles.Wrapper, props.style]}>
    <Text style={textStyle} numberOfLines={1}>
      {props.text}
    </Text>
  </View>
);

export const LabelTitle = React.memo(LabelTitleUnmemoized);
