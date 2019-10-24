import React from 'react';
import { ImageRequireSource, StyleSheet, View, ViewStyle } from 'react-native';
import { PinType } from '../types';
import { IconButtonCompact } from '../molecules/buttons/iconButtons/IconButtonCompact';
import { IconAndLabelOverIcons } from '../molecules/content/IconAndLabelOverIcons';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
  } as ViewStyle,
  Actions: {
    flexDirection: 'row',
    marginRight: 12,
    marginLeft: 12,
    flexGrow: 0,
  } as ViewStyle,
  Login: {
    marginRight: 20,
  } as ViewStyle,
});

type ProviderSettingsProps = {
  providerLogo: ImageRequireSource;
  providerName: string;
  pinTypes: PinType[];
  onInfoPress: () => any;
  onLoginPress?: () => any;
};

const getLoginButton = (props: ProviderSettingsProps) => (
  <IconButtonCompact
    buttonStyle="default"
    icon="login-small"
    onPress={props.onLoginPress!}
    style={styles.Login}
  />
);

export const ProviderSettingsUnmemoized = (props: ProviderSettingsProps) => (
  <View style={styles.Wrapper}>
    <IconAndLabelOverIcons
      icon={props.providerLogo}
      label={props.providerName}
      icons={props.pinTypes.map((t) => `${t}-small`)}
    />
    <View style={styles.Actions}>
      {props.onLoginPress && getLoginButton(props)}
      <IconButtonCompact buttonStyle="default" icon="more-info-small" onPress={props.onInfoPress} />
    </View>
  </View>
);

export const ProviderSettings = React.memo(ProviderSettingsUnmemoized);
