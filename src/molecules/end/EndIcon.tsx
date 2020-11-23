import React from 'react';
import { Image, ImageRequireSource, StyleSheet, View } from 'react-native';
import { colors } from 'src/utils/colors';
import { Icon } from 'src/utils/const';

const styles = StyleSheet.create({
  Wrapper: {
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 0,
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 1,
  },
  Icon: {
    minWidth: 20,
    minHeight: 20,
  },
});

type EndIconProps = {
  icon: ImageRequireSource | string;
  color?: keyof typeof colors;
};

const EndIconUnmemoized = (props: EndIconProps) => (
  <View style={styles.Wrapper}>
    <View style={styles.Icon}>
      {typeof props.icon === 'string' ? (
        <Icon name={props.icon} size={20} color={props.color ? colors[props.color] : colors.uma} />
      ) : (
        <Image resizeMethod="scale" source={props.icon} style={{ width: 20, height: 20 }} />
      )}
    </View>
  </View>
);

export const EndIcon = React.memo(EndIconUnmemoized);
