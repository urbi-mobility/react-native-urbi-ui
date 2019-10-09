import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from '../../utils/colors';
import { registeredTextStyle } from '../../utils/textStyles';

type EndDoubleLabelProps = {
  label: string;
  subtitle: string;
  style?: ViewStyle;
};

const styles = StyleSheet.create({
  Wrapper: {
    height: 40,
    justifyContent: 'center',
    flex: 0,
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 1,
  },
  Text: {
    textAlign: 'right',
  },
});

const labelStyle = registeredTextStyle('titleBold', colors.uma, 'EndDoubleLabel');
const subtitleStyle = registeredTextStyle('body', colors.uto, 'EndDoubleLabelSubtitle');

const EndDoubleLabel = (props: EndDoubleLabelProps) => (
  <View style={[styles.Wrapper, props.style]}>
    <Text style={[labelStyle, styles.Text]} numberOfLines={1}>
      {props.label}
    </Text>
    <Text style={[subtitleStyle, styles.Text]} numberOfLines={1}>
      {props.subtitle}
    </Text>
  </View>
);

export default React.memo(EndDoubleLabel);
