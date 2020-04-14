import React from 'react';
import { StyleSheet, View, ViewStyle, Text } from 'react-native';
import { ChipLarge, ChipLargeProps } from '../../molecules/ChipLarge';
import { colors } from '../../utils/colors';
import { registeredTextStyle } from '../../utils/textStyles';

const title = registeredTextStyle('title', colors.uma, 'title');
const body = registeredTextStyle('body', colors.uma, 'body');

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    height: 46,
    minHeight: 46,
  } as ViewStyle,
  Bottom: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 2,
    alignItems: 'center',
    height: 22,
    minHeight: 22,
  },
  TextTitle: title,
  TextBody: body,
  TextTitleWithMargin: { marginLeft: 6, ...title },
  TextBodyWithMargin: { marginLeft: 6, ...body },
});

type ChipAndDoubleLabelProps = {
  chip: ChipLargeProps;
  topLabel: string;
  /**
   * The style for the top text label, default is 'title'.
   */
  topLabelStyle?: 'title' | 'body';
  topLabelColor?: keyof typeof colors;
  bottomLabel: string;
  /**
   * The style for the bottom text label, default is 'body'.
   */
  bottomLabelStyle?: 'title' | 'body';
  bottomLabelColor?: keyof typeof colors;
};

const getTextStyle = (
  labelStyle: 'title' | 'body',
  withMargin: boolean,
  labelColor?: keyof typeof colors
) => {
  if (labelColor) {
    return {
      marginLeft: withMargin ? 6 : undefined,
      ...registeredTextStyle(labelStyle, labelColor, `text-${labelStyle}`),
    };
  }
  switch (labelStyle) {
    case 'title':
      return withMargin ? styles.TextTitleWithMargin : styles.TextTitle;
    case 'body':
      return withMargin ? styles.TextBodyWithMargin : styles.TextBody;
  }
};

export const ChipAndDoubleLabelUnmemoized = (props: ChipAndDoubleLabelProps) => (
  <View style={styles.Wrapper}>
    <Text style={getTextStyle(props.topLabelStyle ?? 'title', false, props.topLabelColor)}>
      {props.topLabel}
    </Text>
    <View style={styles.Bottom}>
      <ChipLarge {...props.chip} />
      <Text style={getTextStyle(props.bottomLabelStyle ?? 'body', true, props.bottomLabelColor)}>
        {props.bottomLabel}
      </Text>
    </View>
  </View>
);

export const ChipAndDoubleLabel = React.memo(ChipAndDoubleLabelUnmemoized);
