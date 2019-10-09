import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';
import { registeredTextStyle } from '../utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: colors.ukko,
    height: 40,
  },
  Label: {
    marginLeft: 16,
    marginRight: 7,
    marginBottom: 12,
    marginTop: 14,
  },
});

const textStyle = registeredTextStyle('small', colors.uto, 'SectionsDivider');
const labelStyle = [styles.Label, textStyle];

type SectionsDividersProps = {
  label: string;
  backgroundColor?: string;
  labelColor?: string;
};

const SectionsDivider = (props: SectionsDividersProps) => {
  const { backgroundColor, labelColor } = props;
  const wrapperStyle = backgroundColor ? [styles.Wrapper, { backgroundColor }] : styles.Wrapper;
  return (
    <View style={wrapperStyle}>
      <Text style={[labelStyle, labelColor ? { color: labelColor } : undefined]}>
        {props.label.toUpperCase()}
      </Text>
    </View>
  );
};

export default React.memo(SectionsDivider);
