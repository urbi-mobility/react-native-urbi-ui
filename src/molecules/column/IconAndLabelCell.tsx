import React, { ReactElement } from 'react';
import { RegisteredStyle, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { IconButtonCompactUnmemoized } from '../../molecules/buttons/iconButtons/IconButtonCompact';
import { colors } from '../../utils/colors';
import { Icon } from '../../utils/const';
import { registeredTextStyle } from '../../utils/textStyles';

export type IconAndLabelCellProps = {
  header: string;
  label: string;
  icon: string | ReactElement<typeof IconButtonCompactUnmemoized>;
  style?: ViewStyle | RegisteredStyle<ViewStyle>;
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
  Header: {
    marginBottom: 4,
  },
  Content: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  Icon: {
    marginRight: 8,
  },
});

const categoryStyle = registeredTextStyle('micro', colors.uto, 'category');
const labelStyle = registeredTextStyle('title', colors.uma, 'categoryLabel');

const getIcon = (props: IconAndLabelCellProps) =>
  typeof props.icon === 'string' ? (
    <Icon name={props.icon} size={20} color={colors.primary} />
  ) : (
    props.icon
  );

export const IconAndLabelCellUnmemoized = (props: IconAndLabelCellProps) => (
  <View style={[styles.Wrapper, props.style]}>
    <View style={styles.Header}>
      <Text style={categoryStyle} numberOfLines={1}>
        {props.header.toUpperCase()}
      </Text>
    </View>
    <View style={styles.Content}>
      <View style={styles.Icon}>{getIcon(props)}</View>
      <Text style={labelStyle} numberOfLines={1}>
        {props.label}
      </Text>
    </View>
  </View>
);

export const IconAndLabelCell = React.memo(IconAndLabelCellUnmemoized);
