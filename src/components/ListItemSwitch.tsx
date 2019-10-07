import React, { ReactElement } from 'react';
import { Platform, StyleSheet, Switch, View, ViewStyle } from 'react-native';
import { ProviderSettings } from 'src/components/ProviderSettings';
import IconAndLabel from 'src/molecules/content/IconAndLabel';
import Label from 'src/molecules/content/Label';
import { colors } from 'src/utils/colors';
import { onIOS } from 'src/utils/const';

export interface ListItem {
  content:
    | ReactElement<typeof IconAndLabel>
    | ReactElement<typeof Label>
    | ReactElement<typeof ProviderSettings>;
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

export const ListItemSwitch = (item: ListItem) => (
  <View style={[styles.Row, { backgroundColor: item.backgroundColor }]}>
    {item.content}
    {getSwitch(item)}
  </View>
);

export default React.memo(ListItemSwitch);
