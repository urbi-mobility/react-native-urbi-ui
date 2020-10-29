import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Touchable } from 'src/components/Touchable';
import { IconButtonCompact } from 'src/molecules/buttons/iconButtons/IconButtonCompact';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

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

export const ListButtonUnmemoized = (props: ListButtonProps) => (
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

export const ListButton = React.memo(ListButtonUnmemoized);
