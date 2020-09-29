import React from 'react';
import { Image, ImageRequireSource, Text, StyleSheet, View } from 'react-native';
import { ListItemLarge } from 'src/components/ListItemLarge';
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
    paddingLeft: 10,
  },
  ChipWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ProviderImage: {
    width: 20,
    height: 20,
    marginLeft: 4,
  },
  VehicleModel: {
    fontSize: 11,
    marginLeft: 6,
    color: colors.uto,
  },
  ComparatorDistance: {
    fontSize: 11,
    color: colors.uto,
  },
});

type ComparatorProps = {
  topLabel: string;
  distance: number;
  model: string;
  bottomLabel: string;
  image: ImageRequireSource;
};

const ComparatorSingleModalUnmemoized = ({
  topLabel,
  distance,
  model,
  bottomLabel,
  image,
}: ComparatorProps) => (
  <ListItemLarge
    content={
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
          <Text style={styles.ComparatorDistance}>{distance} +</Text>
          <ChipLarge
            label=""
            color={colors.transparent}
            containerStyle={{ paddingLeft: 4, paddingRight: 0 }}
            icon={image!}
          />
          <Text style={styles.VehicleModel}>{model}</Text>
        </View>
        <Text>{bottomLabel}</Text>
      </View>
    }
    end={<Text>END</Text>}
  />
);

export const ComparatorSingleModal = React.memo(ComparatorSingleModalUnmemoized);
// <Image style={styles.ProviderImage} resizeMethod="scale" source={image!} />
