import React, { ReactElement } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { IconButtonCompactUnmemoized } from '../../molecules/buttons/iconButtons/IconButtonCompact';
import { colors } from '../../utils/colors';
import { registeredTextStyle } from '../../utils/textStyles';

export type CardHeaderProps = {
  topLabel: string;
  title: string;
  bigLabel: string;
  icon?: ReactElement<typeof IconButtonCompactUnmemoized>;
  struckout?: string;
  highlightBigLabel?: boolean;
  style?: ViewStyle;
};

const micro = registeredTextStyle('micro', colors.primary, 'cardmicro');
const title = registeredTextStyle('title', colors.uma, 'cardtitle');
const title1 = registeredTextStyle('title1', colors.uma, 'cardtitle1');
const title1Brand = registeredTextStyle('title1', colors.brand, 'cardtitlebrand');
const strikeout = registeredTextStyle('body', colors.uto, 'cardstrikeout');

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
  TopLabel: {
    marginBottom: 4,
  },
  TitleWithIconWrapper: {
    flexDirection: 'row',
  },
  TitleWithIcon: {
    marginLeft: 4,
  },
  BigLabelWithStruckoutWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
  } as ViewStyle,
  Struckout: {
    marginLeft: 8,
    textDecorationLine: 'line-through',
  },
});

const getTitle = (props: CardHeaderProps) =>
  props.icon ? (
    <View style={styles.TitleWithIconWrapper}>
      {props.icon}
      <Text style={[title, styles.TitleWithIcon]} numberOfLines={1}>
        {props.title}
      </Text>
    </View>
  ) : (
    <Text style={title} numberOfLines={1}>
      {props.title}
    </Text>
  );

const getBigLabel = (props: CardHeaderProps) =>
  props.struckout ? (
    <View style={styles.BigLabelWithStruckoutWrapper}>
      <Text style={props.highlightBigLabel ? title1Brand : title1} numberOfLines={1}>
        {props.bigLabel}
      </Text>
      <Text style={[strikeout, styles.Struckout]} numberOfLines={1}>
        {props.struckout}
      </Text>
    </View>
  ) : (
    <Text style={title1} numberOfLines={1}>
      {props.bigLabel}
    </Text>
  );

export const CardHeaderUnmemoized = (props: CardHeaderProps) => (
  <View style={[styles.Wrapper, props.style]}>
    <Text style={[micro, styles.TopLabel]} numberOfLines={1}>
      {props.topLabel}
    </Text>
    {getTitle(props)}
    {getBigLabel(props)}
  </View>
);

export const CardHeader = React.memo(CardHeaderUnmemoized);
