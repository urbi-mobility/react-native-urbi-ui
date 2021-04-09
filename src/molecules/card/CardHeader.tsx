import React, { ReactElement } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { IconButtonCompactUnmemoized } from 'src/molecules/buttons/iconButtons/IconButtonCompact';
import { Chip } from 'src/molecules/Chip';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

export type CardHeaderProps = {
  topLabel: string | ReactElement<typeof Chip>;
  title: string;
  bigLabel: string;
  icon?: ReactElement<typeof IconButtonCompactUnmemoized>;
  struckout?: string;
  highlightBigLabel?: boolean;
  titleLines?: number;
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
    ...micro,
    marginBottom: 4,
  },
  TitleWithIconWrapper: {
    flexDirection: 'row',
  },
  TitleWithIcon: {
    ...title,
    marginLeft: 4,
  },
  BigLabelWithStruckoutWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
  } as ViewStyle,
  Struckout: {
    ...strikeout,
    marginLeft: 8,
    textDecorationLine: 'line-through',
  },
});

const getTitle = (props: CardHeaderProps) =>
  props.icon ? (
    <View style={styles.TitleWithIconWrapper}>
      {props.icon}
      <Text style={styles.TitleWithIcon} numberOfLines={1}>
        {props.title}
      </Text>
    </View>
  ) : (
    <Text style={title} numberOfLines={props.titleLines ? props.titleLines : 1}>
      {props.title}
    </Text>
  );

const getBigLabel = (props: CardHeaderProps) =>
  props.struckout ? (
    <View style={styles.BigLabelWithStruckoutWrapper}>
      <Text style={props.highlightBigLabel ? title1Brand : title1} numberOfLines={1}>
        {props.bigLabel}
      </Text>
      <Text style={styles.Struckout} numberOfLines={1}>
        {props.struckout}
      </Text>
    </View>
  ) : (
    <Text style={title1} numberOfLines={1}>
      {props.bigLabel}
    </Text>
  );

export const CardHeaderUnmemoized = (props: CardHeaderProps) => (
  <View style={props.style ? [styles.Wrapper, props.style] : styles.Wrapper}>
    {typeof props.topLabel === 'string' ? (
      <Text style={styles.TopLabel} numberOfLines={1}>
        {props.topLabel}
      </Text>
    ) : (
      props.topLabel
    )}
    {getTitle(props)}
    {getBigLabel(props)}
  </View>
);

export const CardHeader = React.memo(CardHeaderUnmemoized);
