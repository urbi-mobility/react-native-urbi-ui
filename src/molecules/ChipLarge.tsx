import React from 'react';
import { ImageRequireSource, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { MaybeTouchable } from 'src/components/MaybeTouchable';
import { colors, isLight } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';
import { renderImageOrIcon } from 'src/components/ListItem';

const styles = StyleSheet.create({
  Wrapper: {
    paddingLeft: 6,
    paddingRight: 7,
    borderRadius: 11,
    height: 22,
  } as ViewStyle,
  IconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Icon: {
    marginRight: 4,
  },
  Text: registeredTextStyle('titleBold', colors.ulisse, 'chip-text'),
  TextDark: registeredTextStyle('titleBold', colors.uma, 'chip-text-dark'),
});

export type ChipLargeProps = {
  label: string;
  icon?: ImageRequireSource | string;
  color: string;
  /**
   * If specified, forces text to be dark (can be used to skip color lightness computation
   * if there are many chips on screen)
   */
  colorIsLight?: boolean;
  onPress?: () => any;
  containerStyle?: ViewStyle;
};

const renderChip = (
  color: string,
  darkText: boolean,
  label: string,
  icon?: ImageRequireSource | string,
  containerStyle?: ViewStyle
) => (
  <View style={[styles.Wrapper, { backgroundColor: color }, { ...containerStyle }]}>
    {icon ? (
      <View style={styles.IconAndText}>
        {renderImageOrIcon(20, icon, darkText ? colors.uma : colors.ulisse, styles.Icon)}
        <Text style={darkText ? styles.TextDark : styles.Text}>{label.toUpperCase()}</Text>
      </View>
    ) : (
      <Text style={darkText ? styles.TextDark : styles.Text}>{label.toUpperCase()}</Text>
    )}
  </View>
);

const ChipLargeUnmemoized = (props: ChipLargeProps) => {
  const { color, colorIsLight, icon, label, onPress, containerStyle } = props;
  const darkText = colorIsLight ?? isLight(color);
  return onPress ? (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <MaybeTouchable onPress={onPress} exactHeight={22} borderRadius={11}>
        {renderChip(color, darkText, label, icon)}
      </MaybeTouchable>
    </View>
  ) : (
    renderChip(color, darkText, label, icon, containerStyle)
  );
};

export const ChipLarge = React.memo(ChipLargeUnmemoized);
