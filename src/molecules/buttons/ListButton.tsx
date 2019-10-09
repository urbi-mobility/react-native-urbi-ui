import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Touchable from '../../components/Touchable';
import IconButtonCompact from '../../molecules/buttons/iconButtons/IconButtonCompact';
import { colors } from '../../utils/colors';
import { registeredTextStyle } from '../../utils/textStyles';

const styles = StyleSheet.create({
  Touchable: {
    flex: 1,
    alignSelf: 'stretch',
  },
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 12,
  },
  Icon: {
    marginLeft: 16,
    marginRight: 12,
  },
});

const textStyle = registeredTextStyle('button');

type ListButtonProps = {
  icon: string;
  actionLabel: string;
  onPress: () => any;
  onDarkBackground?: boolean;
};

export const ListButton = (props: ListButtonProps) => (
  <View style={{ flex: 1 }}>
    <Touchable onPress={props.onPress}>
      <View style={styles.Wrapper}>
        <IconButtonCompact
          style={styles.Icon}
          icon={props.icon}
          buttonStyle={props.onDarkBackground ? 'primary' : 'default'}
          onPress={props.onPress}
        />
        <Text
          style={[textStyle, { color: props.onDarkBackground ? colors.ulisse : colors.primary }]}
          numberOfLines={1}
        >
          {props.actionLabel.toUpperCase()}
        </Text>
      </View>
    </Touchable>
  </View>
);

export default React.memo(ListButton);
