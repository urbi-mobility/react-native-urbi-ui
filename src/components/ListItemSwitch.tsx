import React, { ReactElement } from 'react';
import { Platform, StyleSheet, Switch, View, ViewStyle } from 'react-native';
import { ProviderSettingsUnmemoized } from '../components/ProviderSettings';
import { IconAndLabelUnmemoized } from '../molecules/content/IconAndLabel';
import { LabelUnmemoized } from '../molecules/content/Label';
import { colors } from '../utils/colors';
import { onIOS } from '../utils/const';

export interface ListItem {
  content:
    | ReactElement<typeof IconAndLabelUnmemoized>
    | ReactElement<typeof LabelUnmemoized>
    | ReactElement<typeof ProviderSettingsUnmemoized>;
  onSwitchToggle: (value: boolean) => any;
  enabled: boolean;
  transitioning?: boolean;
  backgroundColor?: string;
}

const styles = StyleSheet.create({
  Row: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
    paddingRight: 12,
    paddingLeft: 16,
  } as ViewStyle,
  Switch: {
    marginLeft: onIOS ? 8 : 0,
  } as ViewStyle,
});

const getSwitch = (item: ListItem) =>
  Platform.select({
    ios: (
      <Switch
        style={styles.Switch}
        trackColor={{ true: colors.uma, false: colors.ukko }}
        value={item.enabled}
        onValueChange={item.onSwitchToggle}
      />
    ),
    android: (
      <Switch
        style={styles.Switch}
        trackColor={{ true: colors.ughina, false: colors.ursula }}
        // the property does exist, type definitions haven't been updated (if you use the old prop you get a warning)
        thumbColor={item.enabled ? colors.uma : colors.ukko}
        value={item.transitioning && !onIOS ? !item.enabled : item.enabled}
        onValueChange={item.onSwitchToggle}
      />
    ),
  });

export const ListItemSwitchUnmemoized = (item: ListItem) => (
  <View style={[styles.Row, { backgroundColor: item.backgroundColor }]}>
    {item.content}
    {getSwitch(item)}
  </View>
);

export const ListItemSwitch = React.memo(ListItemSwitchUnmemoized);
