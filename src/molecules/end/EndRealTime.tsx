import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from '../../utils/colors';
import {
  EndDoubleLabelProps,
  endDoubleLabelStyles,
  labelStyle,
  subtitleStyle,
} from './EndDoubleLabel';

const styles = StyleSheet.create({
  ...endDoubleLabelStyles,
  FirstRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  RealTime: {
    width: 8,
    height: 8,
    marginRight: 2,
  },
});

const realTimeIcon = require('../../assets/img/ic_realtime.png');

const EndRealTimeUnmemoized = (props: EndDoubleLabelProps) => (
  <View style={[styles.Wrapper, props.style]}>
    <View style={styles.FirstRow}>
      <Image style={styles.RealTime} source={realTimeIcon} />
      <Text
        style={props.labelColor ? [labelStyle, { color: colors[props.labelColor] }] : labelStyle}
        numberOfLines={1}
      >
        {props.label}
      </Text>
    </View>
    <Text
      style={
        props.subtitleColor
          ? [subtitleStyle, { color: colors[props.subtitleColor] }]
          : subtitleStyle
      }
      numberOfLines={1}
    >
      {props.subtitle}
    </Text>
  </View>
);

export const EndRealTime = React.memo(EndRealTimeUnmemoized);
