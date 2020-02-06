import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import UrbiFormComponent, {
  UrbiFormComponentProps,
  UrbiFormComponentState,
} from './UrbiFormComponent';
import { ListItemRadio } from '../ListItemRadio';
import React from 'react';
import { ItemSeparator } from '../../molecules/ItemSeparator';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fonts';
import { withFormikWrapper } from './Formik';
import withUrbiFormWrapper from './WithUrbiFormWrapper';
import {SectionsDivider} from "../../molecules/SectionsDivider";

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  } as ViewStyle,
  Error: {
    ...fontStyles.micro,
    color: colors.error,
    paddingLeft: 20,
    paddingRight: 12,
  },
});

type RadioButton = {
  label: string;
  subtitle?: string;
};

interface RadioButtonsProps extends UrbiFormComponentProps<string> {
  buttons: RadioButton[];
  defaultSelectedIndex?: string;
  onButtonSelected?: (selectedName: string) => any;
}

interface RadioButtonsState extends UrbiFormComponentState {
  selectedName: string;
}

class RadioButtonsFormComponent extends UrbiFormComponent<
  string,
  RadioButtonsProps,
  RadioButtonsState
> {
  private radio: React.RefObject<View>;
  constructor(props: RadioButtonsProps) {
    super(props);
    this.radio = React.createRef<View>();
    this.state = {
      focused: false,
      selectedName: this.props.defaultSelectedIndex,
    };
    this.onRadioSelect = this.onRadioSelect.bind(this);
  }

  focus() {
    if (this.radio.current) this.radio.current.focus();
  }

  onRadioSelect(id: string) {
    const selectedIndex = parseInt(id, 10);
    const label = this.props.buttons[selectedIndex].label;
    this.setState({ selectedName: label });
    if (this.props.onButtonSelected) this.props.onButtonSelected(label);
    this.props.setFieldValue(label);
  }

  render() {
    const { error } = this.props;
    return (
      <View style={styles.Wrapper} ref={this.radio} onLayout={this.onLayout}>
        <SectionsDivider
            label={this.props.label}
            backgroundColor="transparent"
        />
        {this.props.buttons.map((b, i) => (
          <ListItemRadio
            key={`opt-${i}`}
            id={i.toString()}
            label={b.label}
            subtitle={b.subtitle}
            selected={this.state.selectedName === b.label}
            onPress={this.onRadioSelect}
          />
        ))}
        <ItemSeparator
          // tslint:disable-next-line:jsx-no-multiline-js
          backgroundColor={
            error ? colors.error : this.state.focused ? colors.primary : colors.ursula
          }
          animated
        />
        <Text style={styles.Error} numberOfLines={1}>
          {error ? error.toUpperCase() : undefined}
        </Text>
      </View>
    );
  }
}
export const RadioButtonsForm = withFormikWrapper(withUrbiFormWrapper(RadioButtonsFormComponent));
