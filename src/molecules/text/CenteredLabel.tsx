import React from 'react';
import { RegisteredStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { colors } from '../../utils/colors';
import { registeredTextStyle } from '../../utils/textStyles';

type CenteredLabelProps = {
  text: string;
  color?: string;
  style?: ViewStyle;
};

const styles = StyleSheet.create({
  Wrapper: {
    height: 32,
    justifyContent: 'center',
    flex: 1,
    minWidth: 110,
    maxWidth: 290,
  },
});

export class CenteredLabel extends React.PureComponent<CenteredLabelProps> {
  private textStyle: Array<RegisteredStyle<TextStyle> | TextStyle>;

  constructor(props: CenteredLabelProps) {
    super(props);
    this.textStyle = [
      registeredTextStyle('button', props.color || colors.uma, 'CenteredLabel'),
      { textAlign: 'center' },
    ];
  }

  render() {
    return (
      <View style={[styles.Wrapper, this.props.style]}>
        <Text style={this.textStyle} numberOfLines={1}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}
