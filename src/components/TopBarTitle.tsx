import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { registeredTextStyle } from '../utils/textStyles';

const fontStyle = registeredTextStyle('title1', colors.ulisse);

type TopBarTitleProps = {
  text: string;
  textColor?: string;
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  Text: {
    ...fontStyle,
    textAlignVertical: 'center',
  },
});

const TopBarTitleUnmemoized = (props: TopBarTitleProps) => {
  return (
    <View style={styles.Wrapper}>
      <Text style={props.textColor ? [styles.Text, { color: props.textColor }] : styles.Text}>
        {props.text}
      </Text>
    </View>
  );
};

export const TopBarTitle = React.memo(TopBarTitleUnmemoized);
