import React, { ReactElement } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { BikeImgUnmemoized } from '../molecules/img/BikeImg';
import { SelectionUnmemoized } from '../molecules/img/Selection';
import { StationImgUnmemoized } from '../molecules/img/StationImg';
import { VehicleImgUnmemoized } from '../molecules/img/VehicleImg';

type SelectionHeaderProps = {
  content: ReactElement<typeof SelectionUnmemoized>;
  img:
    | ReactElement<typeof VehicleImgUnmemoized>
    | ReactElement<typeof BikeImgUnmemoized>
    | ReactElement<typeof StationImgUnmemoized>;
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    height: 78,
    paddingLeft: 16,
    paddingRight: 12,
    paddingTop: 4,
    paddingBottom: 4,
  } as ViewStyle,
});

export const SelectionHeaderUnmemoized = (props: SelectionHeaderProps) => (
  <View style={styles.Wrapper}>
    {props.content}
    {props.img}
  </View>
);

export default React.memo(SelectionHeaderUnmemoized);