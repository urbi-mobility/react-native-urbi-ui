import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from 'src/utils/colors';
import { Icon } from 'src/utils/const';
import { registeredTextStyle } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    flexGrow: 0,
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  Icon: {
    marginRight: 8,
  },
  SecondIcon: {
    marginLeft: 16,
    marginRight: 8,
  },
});

type CarStationDetailsProps = {
  cars?: number;
  freeParkingSpots?: number;
};

const textStyle = registeredTextStyle('title1', colors.uma, 'carStationDetails');

export const CarStationDetailsUnmemoized = (props: CarStationDetailsProps) => (
  <View style={styles.Wrapper}>
    <Icon style={styles.Icon} name="car-small" size={20} color={colors.primary} />
    <Text style={textStyle}>{props.cars}</Text>
    {props.freeParkingSpots !== undefined && props.freeParkingSpots > -1 && (
      <View style={styles.Wrapper}>
        <Icon style={styles.SecondIcon} name="park-small" size={20} color={colors.primary} />
        <Text style={textStyle}>{props.freeParkingSpots}</Text>
      </View>
    )}
  </View>
);

export const CarStationDetails = React.memo(CarStationDetailsUnmemoized);
