import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from '../utils/colors';
import { Icon } from '../utils/const';
import { registeredTextStyle } from '../utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  Icon: {
    marginRight: 8,
  },
});

type CarStationDetailsProps = {
  cars: number;
};

const textStyle = registeredTextStyle('title1', colors.uma, 'carStationDetails');

export const CarStationDetailsUnmemoized = (props: CarStationDetailsProps) => (
  <View style={styles.Wrapper}>
    <Icon style={styles.Icon} name="stationary-small" size={20} color={colors.primary} />
    <Text style={textStyle}>{props.cars}</Text>
  </View>
);

export default React.memo(CarStationDetailsUnmemoized);
