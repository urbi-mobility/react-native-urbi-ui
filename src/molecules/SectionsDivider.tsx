import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: colors.ukko,
    height: 40,
  },
  Label: {
    ...registeredTextStyle('small', colors.ughina, 'SectionsDivider'),
    marginLeft: 16,
    marginRight: 7,
    marginBottom: 12,
    marginTop: 14,
  },
});

type SectionsDividersProps = {
  label: string;
  backgroundColor?: string;
  labelColor?: string;
};

const SectionsDividerUnmemoized = (props: SectionsDividersProps) => {
  const { backgroundColor, labelColor } = props;
  const wrapperStyle = backgroundColor ? [styles.Wrapper, { backgroundColor }] : styles.Wrapper;
  return (
    <View style={wrapperStyle}>
      <Text style={labelColor ? [styles.Label, { color: labelColor }] : styles.Label}>
        {props.label.toUpperCase()}
      </Text>
    </View>
  );
};

export const SectionsDivider = React.memo(SectionsDividerUnmemoized);
