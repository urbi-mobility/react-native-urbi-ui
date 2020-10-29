import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BikeStationDetailsUnmemoized } from 'src/molecules/BikeStationDetails';
import { CarStationDetailsUnmemoized } from 'src/molecules/CarStationDetails';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

export type SelectionProps = {
  title: string;
  body:
    | string
    | ReactElement<typeof BikeStationDetailsUnmemoized>
    | ReactElement<typeof CarStationDetailsUnmemoized>;
  footer: string;
};

const styles = StyleSheet.create({
  Wrapper: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const titleTextStyle = registeredTextStyle('title', colors.uma, 'contentTitle');
const bodyTextStyle = registeredTextStyle('title1', colors.uma, 'contentBody');
const footerTextStyle = registeredTextStyle('body', colors.uto, 'contentFooter');

export const SelectionUnmemoized = (props: SelectionProps) => (
  <View style={styles.Wrapper}>
    <Text style={titleTextStyle} numberOfLines={1}>
      {props.title}
    </Text>
    {typeof props.body === 'string' ? (
      <Text style={bodyTextStyle} numberOfLines={1}>
        {props.body}
      </Text>
    ) : (
      props.body
    )}
    <Text style={footerTextStyle} numberOfLines={1}>
      {props.footer}
    </Text>
  </View>
);

export const Selection = React.memo<SelectionProps>(SelectionUnmemoized);
