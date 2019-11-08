import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SectionsDivider } from '../../molecules/SectionsDivider';
import { colors } from '../../utils/colors';
import { registeredTextStyle } from '../../utils/textStyles';
import { ImageAndStatus, ImageAndStatusProps } from './ImageAndStatus';
import { MaybeTouchable } from '../MaybeTouchable';

const paddingStyle = {
  paddingRight: 12,
  paddingBottom: 12,
  paddingLeft: 16,
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    paddingTop: 8,
  } as ViewStyle,
  TopSection: {
    ...paddingStyle,
  },
  BottomSection: {
    ...paddingStyle,
    paddingTop: 4,
    flexDirection: 'row',
  },
  Block: {
    flex: 1,
  },
});

const titles = registeredTextStyle('micro', colors.ughina, 'titles');
const values = registeredTextStyle('title2', colors.ulisse, 'values');

type Values = {
  title: string;
  value: string;
};

interface ProfileAndTripsProps extends ImageAndStatusProps {
  sectionTitle: string;
  left: Values;
  center: Values;
  right: Values;
  onPress: () => any;
}

export const ProfileAndTripsUnmemoized = (props: ProfileAndTripsProps) => (
  <LinearGradient style={styles.Wrapper} colors={[colors.secondary, colors.uma]}>
    <View style={styles.TopSection}>
      <MaybeTouchable onPress={props.onPress}>
        <ImageAndStatus image={props.image} status={props.status} />
      </MaybeTouchable>
    </View>
    <SectionsDivider label={props.sectionTitle} backgroundColor={colors.transparent} />
    <View style={styles.BottomSection}>
      <View style={styles.Block}>
        <Text style={titles}>{props.left.title.toUpperCase()}</Text>
        <Text style={values}>{props.left.value}</Text>
      </View>
      <View style={styles.Block}>
        <Text style={titles}>{props.center.title.toUpperCase()}</Text>
        <Text style={values}>{props.center.value}</Text>
      </View>
      <View style={styles.Block}>
        <Text style={titles}>{props.right.title.toUpperCase()}</Text>
        <Text style={values}>{props.right.value}</Text>
      </View>
    </View>
  </LinearGradient>
);

export const ProfileAndTrips = React.memo(ProfileAndTripsUnmemoized);
