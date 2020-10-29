import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { ListItemRadio } from 'src/components/ListItemRadio';
import { SectionsDivider } from 'src/molecules/SectionsDivider';
import { colors } from 'src/utils/colors';
import { fontStyles } from 'src/utils/fonts';
import { withFormikWrapper } from './Formik';
import UrbiFormComponent, {
  UrbiFormComponentProps,
  UrbiFormComponentState,
} from './UrbiFormComponent';
import withUrbiFormWrapper from './WithUrbiFormWrapper';

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
  id: string;
  label: string;
  subtitle?: string;
};

interface RadioButtonsProps extends UrbiFormComponentProps<string> {
  buttons: RadioButton[];
  defaultSelectedIndex?: number;
  onButtonSelected?: (selectedName: string) => any;
}

interface RadioButtonsState extends UrbiFormComponentState {
  selectedIndex?: number;
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
      selectedIndex: this.props.defaultSelectedIndex,
    };
    this.onRadioSelect = this.onRadioSelect.bind(this);
  }

  focus() {
    if (this.radio.current) this.radio.current.focus();
  }

  onRadioSelect(id: string) {
    const selectedIndex = parseInt(id, 10);
    const selectedId = this.props.buttons[selectedIndex].id;
    this.setState({ selectedIndex });
    if (this.props.onButtonSelected) this.props.onButtonSelected(selectedId);
    this.props.setFieldValue(selectedId);
  }

  render() {
    const { error, label, name } = this.props;
    return (
      <View style={styles.Wrapper} ref={this.radio} onLayout={this.onLayout}>
        <SectionsDivider label={label ?? name} backgroundColor="transparent" />
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
        <Text style={styles.Error} numberOfLines={1}>
          {error ? error.toUpperCase() : undefined}
        </Text>
      </View>
    );
  }
}
export const RadioButtonsForm = withFormikWrapper(withUrbiFormWrapper(RadioButtonsFormComponent));
