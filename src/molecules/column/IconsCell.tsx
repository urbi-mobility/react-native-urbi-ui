import React, { ReactElement } from 'react';
import { RegisteredStyle, StyleSheet, View, ViewStyle } from 'react-native';
import { IconButtonCompactUnmemoized } from '../../molecules/buttons/iconButtons/IconButtonCompact';
import { colors } from '../../utils/colors';
import { Icon } from '../../utils/const';

export type IconsCellProps = {
  icons: Array<string | ReactElement<typeof IconButtonCompactUnmemoized>>;
  style?: ViewStyle | RegisteredStyle<ViewStyle>;
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  Icon: {
    marginRight: 12,
  },
});

const getIcon = (icon: string | ReactElement<typeof IconButtonCompactUnmemoized>, i: number) =>
  typeof icon === 'string' ? (
    <View key={`icon-${i}`} style={styles.Icon}>
      <Icon name={icon} size={20} color={colors.primary} />
    </View>
  ) : (
    <View key={`icon-${i}`} style={styles.Icon}>
      {icon}
    </View>
  );

export const IconsCellUnmemoized = (props: IconsCellProps) => (
  <View style={[styles.Wrapper, props.style]}>{props.icons.map(getIcon)}</View>
);

export default React.memo(IconsCellUnmemoized);
