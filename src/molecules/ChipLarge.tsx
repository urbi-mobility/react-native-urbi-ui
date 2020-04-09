import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, isLight } from 'src/utils/colors';
import { Icon } from 'src/utils/const';
import { registeredTextStyle } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    alignSelf: 'flex-start', // the only way to make sure that the element won't grow
    paddingHorizontal: 6,
    borderRadius: 11,
    height: 22,
  } as ViewStyle,
  IconAndText: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  Icon: {
    marginRight: 4,
  },
  Text: registeredTextStyle('titleBold', colors.ulisse, 'chip-text'),
  TextDark: registeredTextStyle('titleBold', colors.uma, 'chip-text-dark'),
});

type ChipLargeProps = {
  label: string;
  icon?: string;
  color: string;
  /**
   * If specified, forces text to be dark (can be used to skip color lightness computation
   * if there are many chips on screen)
   */
  colorIsLight?: boolean;
};

const ChipLargeUnmemoized = (props: ChipLargeProps) => {
  const { color, colorIsLight } = props;
  const darkText = colorIsLight ?? isLight(color);
  return (
    <View style={[styles.Wrapper, { backgroundColor: color }]}>
      {props.icon ? (
        <View style={styles.IconAndText}>
          <Icon
            style={styles.Icon}
            name={props.icon}
            size={20}
            color={darkText ? colors.uma : colors.ulisse}
          />
          <Text style={darkText ? styles.TextDark : styles.Text}>{props.label.toUpperCase()}</Text>
        </View>
      ) : (
        <Text style={darkText ? styles.TextDark : styles.Text}>{props.label.toUpperCase()}</Text>
      )}
    </View>
  );
};

export const ChipLarge = React.memo(ChipLargeUnmemoized);
