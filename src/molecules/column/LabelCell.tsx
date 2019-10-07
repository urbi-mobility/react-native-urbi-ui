import React from 'react';
import { RegisteredStyle, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

export type LabelCellProps = {
  header: string;
  label: string;
  style?: ViewStyle | RegisteredStyle<ViewStyle>;
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
  Header: {
    marginBottom: 4,
  } as ViewStyle,
});

const categoryStyle = registeredTextStyle('micro', colors.uto, 'category');
const labelStyle = registeredTextStyle('title', colors.uma, 'categoryLabel');

export const LabelCellUnmemoized = (props: LabelCellProps) => (
  <View style={[styles.Wrapper, props.style]}>
    <View style={styles.Header}>
      <Text style={categoryStyle} numberOfLines={1}>
        {props.header.toUpperCase()}
      </Text>
    </View>
    <Text style={labelStyle} numberOfLines={1}>
      {props.label}
    </Text>
  </View>
);

export default React.memo(LabelCellUnmemoized);
