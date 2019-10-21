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
  FirstIcon: {
    marginRight: 8,
  },
  SecondIcon: {
    marginLeft: 16,
    marginRight: 8,
  },
});

type BikeStationDetailsProps = {
  bikes: number;
  freeParkingSpots?: number;
};

const textStyle = registeredTextStyle('title1', colors.uma, 'bikeStationDetails');

export const BikeStationDetailsUnmemoized = (props: BikeStationDetailsProps) => (
  <View style={styles.Wrapper}>
    <Icon style={styles.FirstIcon} name="bike-station-small" size={20} color={colors.primary} />
    <Text style={textStyle}>{props.bikes}</Text>
    {props.freeParkingSpots !== undefined && (
      <View style={styles.Wrapper}>
        <Icon style={styles.SecondIcon} name="racks-small" size={20} color={colors.primary} />
        <Text style={textStyle}>{props.freeParkingSpots}</Text>
      </View>
    )}
  </View>
);

export const BikeStationDetails = React.memo(BikeStationDetailsUnmemoized);
