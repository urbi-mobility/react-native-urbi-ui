import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from 'src/utils/colors';
import { EndLabelProps, endLabelStyles, labelStyle } from './EndLabel';

const styles = StyleSheet.create({
  ...endLabelStyles,
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

const EndRealTimeUnmemoized = (props: EndLabelProps) => (
  <View style={[styles.Wrapper, props.style]}>
    <View style={styles.FirstRow}>
      <Image style={styles.RealTime} source={realTimeIcon} />
      <Text
        style={props.textColor ? [labelStyle, { color: colors[props.textColor] }] : labelStyle}
        numberOfLines={1}
      >
        {props.label}
      </Text>
    </View>
  </View>
);

export const EndRealTime = React.memo(EndRealTimeUnmemoized);
