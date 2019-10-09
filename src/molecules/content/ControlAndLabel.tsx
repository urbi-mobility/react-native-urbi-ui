import React from 'react';
import { RegisteredStyle, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Checkbox, { ControlProps } from '../../molecules/content/Checkbox';
import RadioButton from '../../molecules/content/RadioButton';
import { colors } from '../../utils/colors';
import { registeredTextStyle } from '../../utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
    paddingLeft: 16,
    paddingRight: 12,
  } as ViewStyle,
  Right: {
    marginLeft: 8,
    marginRight: 12, // this is here so that long text can be cut
  },
  Label: {
    marginBottom: 4,
  },
});

const labelStyle = registeredTextStyle('title', colors.uma, 'ctrlLabel');
const subtitleStyle = registeredTextStyle('body', colors.uma, 'ctrlSubtitle');

interface ControlAndLabelProps extends ControlProps {
  control: 'checkbox' | 'radiobutton';
  label: string;
  style?: ViewStyle | RegisteredStyle<ViewStyle>;
  subtitle?: string;
}

const renderSingleLineLabel = (props: ControlAndLabelProps) => (
  <Text style={[styles.Right, labelStyle]} numberOfLines={1}>
    {props.label}
  </Text>
);

const renderDoubleLineLabel = (props: ControlAndLabelProps) => (
  <View style={styles.Right}>
    <Text style={[styles.Label, labelStyle]} numberOfLines={2}>
      {props.label}
    </Text>
    <Text style={subtitleStyle} numberOfLines={2}>
      {props.subtitle}
    </Text>
  </View>
);

const ControlAndLabel = (props: ControlAndLabelProps) => {
  const renderFunc = props.subtitle ? renderDoubleLineLabel : renderSingleLineLabel;
  const Control = props.control === 'checkbox' ? Checkbox : RadioButton;
  return (
    <View style={[styles.Wrapper, props.subtitle ? { minHeight: 70 } : undefined, props.style]}>
      <Control {...props} />
      {renderFunc(props)}
    </View>
  );
};

export default React.memo(ControlAndLabel);
