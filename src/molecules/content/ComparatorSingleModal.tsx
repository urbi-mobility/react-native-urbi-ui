import React from 'react';
import { ImageRequireSource, StyleSheet, View, ViewStyle, StyleProp, Text } from 'react-native';
import { ChipLarge, ChipLargeProps } from 'src/molecules/ChipLarge';
import { colors } from 'src/utils/colors';
import { registeredTextStyle, UrbiFontStyles } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  PathWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ContainerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    marginRight: 2,
    marginTop: 4,
  },
  ComparatorWrapper: {
    height: 72,
    paddingLeft: 10,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  ChipWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});

type ComparatorSingleModalProps = {
  chip: ChipLargeProps;
  bottomLabel: string;
};

type PathProp = {
  icon: string | ImageRequireSource;
  bottomLabel: string;
};

const comparatorSingleModalProps: PathProp[] = [
  {
    icon: 'walk',
    bottomLabel: '14 +',
  },
  {
    icon: require('./ic_acciona.png'),
    bottomLabel: 'VEHICLE MODEL',
  },
];

const Path = (props: PathProp) => (
  <View style={styles.PathWrapper}>
    <ChipLarge
      label=""
      color={colors.transparent}
      colorIsLight={true}
      icon={props.icon}
      containerStyle={styles.ContainerStyle}
    />
    <Text
      style={[registeredTextStyle('micro' as keyof UrbiFontStyles), styles.ContainerStyle]}
      numberOfLines={1}
    >
      {props.bottomLabel}
    </Text>
  </View>
);

export const ComparatorSingleModalUnmemoized = (props: ComparatorSingleModalProps) => (
  <View style={styles.ComparatorWrapper}>
    <Text style={[registeredTextStyle('title' as keyof UrbiFontStyles)]}>00 min</Text>
    <View style={styles.ChipWrapper}>
      {comparatorSingleModalProps.map((props) => (
        <Path {...props} />
      ))}
    </View>
    <Text style={[registeredTextStyle('body' as keyof UrbiFontStyles)]}>Arrival at 12:00</Text>
  </View>
);

export const ComparatorSingleModal = React.memo(ComparatorSingleModalUnmemoized);
