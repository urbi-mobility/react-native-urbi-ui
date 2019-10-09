import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import ListItemRadio from '../components/ListItemRadio';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  } as ViewStyle,
});

type RadioButton = {
  label: string;
  subtitle?: string;
};

type RadioButtonsProps = {
  buttons: RadioButton[];
};

type RadioButtonsState = {
  selected: string;
};

class RadioButtons extends React.PureComponent<RadioButtonsProps, RadioButtonsState> {
  constructor(props: RadioButtonsProps) {
    super(props);
    this.state = { selected: '' };
    this.onRadioSelect = this.onRadioSelect.bind(this);
  }

  onRadioSelect(id: string) {
    this.setState({ selected: id });
  }

  render() {
    return (
      <View style={styles.Wrapper}>
        {this.props.buttons.map((b, i) => (
          <ListItemRadio
            key={`opt-${i}`}
            id={`opt-${i}`}
            label={b.label}
            subtitle={b.subtitle}
            selected={this.state.selected === `opt-${i}`}
            onPress={this.onRadioSelect}
          />
        ))}
      </View>
    );
  }
}

export default RadioButtons;
