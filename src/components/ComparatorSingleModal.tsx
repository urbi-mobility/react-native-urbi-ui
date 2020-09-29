import React from 'react';
import { Image, ImageSourcePropType, Text, StyleSheet, View } from 'react-native';
import { colors } from 'src/utils/colors';
import { ChipLarge } from 'src/molecules/ChipLarge';

const styles = StyleSheet.create({
  ComparatorWrapper: {
    height: 70,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    backgroundColor: 'red',
    paddingLeft: 10,
  },
  ChipWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  ProviderImage: {
    width: 20,
    height: 20,
    marginLeft: 4,
  },
  VehicleModel: {
    marginLeft: 6,
    color: colors.uto,
  },
});

type ComparatorProps = {
  topLabel: ReactNode;
  distance: number;
  model: string;
  bottomLabel: string;
  image: ImageSourcePropType;
};

const ComparatorSingleModalUnmemoized = ({
  topLabel,
  distance,
  model,
  bottomLabel,
  image,
}: ComparatorProps) => (
  <View style={styles.ComparatorWrapper}>
    <Text>{topLabel}</Text>
    <View style={styles.ChipWrapper}>
      <ChipLarge
        label=""
        color={colors.transparent}
        icon="walk"
        colorIsLight={true}
        containerStyle={{ paddingLeft: 0, paddingRight: 0 }}
      />
      <Text>{distance} +</Text>
      <Image style={styles.ProviderImage} resizeMethod="scale" source={image} />
      <Text style={styles.VehicleModel}>{model}</Text>
    </View>
    <Text>{bottomLabel}</Text>
  </View>
);

export const ComparatorSingleModal = React.memo(ComparatorSingleModalUnmemoized);
