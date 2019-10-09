import React from 'react';
import { Image, ImageRequireSource, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from '../../utils/colors';
import { registeredTextStyle } from '../../utils/textStyles';

type EndDoubleLabelAndIconProps = {
  label: string;
  subtitle: string;
  icon: ImageRequireSource;
  style?: ViewStyle;
};

const styles = StyleSheet.create({
  Wrapper: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 0,
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 1,
  },
  TextView: {
    marginRight: 8,
    minWidth: 0,
  },
  Text: {
    textAlign: 'right',
  },
  Icon: {
    minWidth: 20,
    minHeight: 20,
  },
});

const textStyle = registeredTextStyle('titleBold', colors.uma, 'EndDoubleLabelAndIcon');
const subtitleStyle = registeredTextStyle('body', colors.uto, 'EndDoubleLabelSubtitle');

const EndDoubleLabelAndIcon = (props: EndDoubleLabelAndIconProps) => (
  <View style={[styles.Wrapper, props.style]}>
    <View style={styles.TextView}>
      <Text style={[textStyle, styles.Text]} numberOfLines={1}>
        {props.label}
      </Text>
      <Text style={[subtitleStyle, styles.Text]} numberOfLines={1}>
        {props.subtitle}
      </Text>
    </View>
    <View style={styles.Icon}>
      <Image style={{ width: 20, height: 20 }} source={props.icon} />
    </View>
  </View>
);

export default React.memo(EndDoubleLabelAndIcon);
