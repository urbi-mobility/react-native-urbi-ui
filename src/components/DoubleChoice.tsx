import React from 'react';
import { StyleSheet, View } from 'react-native';
import { sizes } from 'src/molecules/buttons/ButtonCompact';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 60,
    paddingTop: 12,
    paddingRight: 20,
    paddingBottom: 16,
    paddingLeft: 20,
  },
});

type DoubleChoiceProps = {
  left?: JSX.Element;
  right?: JSX.Element;
};

const leftStyle = { flex: 1, marginRight: 10, ...sizes };
const rightStyle = { flex: 1, marginLeft: 10, ...sizes };

export class DoubleChoice extends React.PureComponent<DoubleChoiceProps> {
  render() {
    const { left, right } = this.props;
    return (
      <View style={styles.Wrapper}>
        {left ? React.cloneElement(left, { style: leftStyle }) : <View style={leftStyle} />}
        {right ? React.cloneElement(right, { style: rightStyle }) : <View style={rightStyle} />}
      </View>
    );
  }
}
