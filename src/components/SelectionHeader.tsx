import React, { ReactElement } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { BikeImgUnmemoized } from 'src/molecules/img/BikeImg';
import { SelectionUnmemoized } from 'src/molecules/img/Selection';
import { StationImgUnmemoized } from 'src/molecules/img/StationImg';
import { VehicleImgUnmemoized } from 'src/molecules/img/VehicleImg';

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
    paddingRight: 30,
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

export const SelectionHeader = React.memo(SelectionHeaderUnmemoized);
