import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ListItemRadio } from 'src/components/ListItemRadio';

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
  defaultSelectedIndex?: number;
  onButtonSelected?: (selectedIndex: number) => any;
};

type RadioButtonsState = {
  selectedIndex: number;
};

export class RadioButtons extends React.PureComponent<RadioButtonsProps, RadioButtonsState> {
  constructor(props: RadioButtonsProps) {
    super(props);
    this.state = {
      selectedIndex: props.defaultSelectedIndex ?? -1,
    };
    this.onRadioSelect = this.onRadioSelect.bind(this);
  }

  onRadioSelect(id: string) {
    const selectedIndex = parseInt(id, 10);
    this.setState({ selectedIndex });
    if (this.props.onButtonSelected) this.props.onButtonSelected(selectedIndex);
  }

  render() {
    return (
      <View style={styles.Wrapper}>
        {this.props.buttons.map((b, i) => (
          <ListItemRadio
            key={`opt-${i}`}
            id={i.toString()}
            label={b.label}
            subtitle={b.subtitle}
            selected={this.state.selectedIndex === i}
            onPress={this.onRadioSelect}
          />
        ))}
      </View>
    );
  }
}
