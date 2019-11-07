import React from 'react';
import { StyleSheet, View, ViewStyle, Text } from 'react-native';
import { withFormikWrapper } from './Formik';
import withUrbiFormWrapper from './WithUrbiFormWrapper';
import UrbiFormComponent, {
  UrbiFormComponentProps,
  UrbiFormComponentState,
} from './UrbiFormComponent';
// import DateTimePicker from '@react-native-community/datetimepicker';
import { Touchable } from '../Touchable';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  } as ViewStyle,
});

interface DatePickerProps extends UrbiFormComponentProps {
  mode: 'date' | 'time';
}

interface DatePickerState extends UrbiFormComponentState {
  date: Date;
  showPicker: boolean;
}

class DatePickerComponent extends UrbiFormComponent<DatePickerProps, DatePickerState> {
  private datePicker: React.RefObject<Text>;

  constructor(props: DatePickerProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.showPicker = this.showPicker.bind(this);
    this.state = {
      focused: false,
      date: props.value ? new Date(props.value) : new Date(),
      showPicker: false,
    };
  }

  showPicker() {
    this.setState({ showPicker: true });
  }

  onChange(_: any, date: Date) {
    this.props.setFieldValue(date.toISOString());
  }

  focus() {
    this.datePicker.current!.focus();
  }

  render() {
    const { mode, value } = this.props;
    const { showPicker } = this.state;

    return (
      <View style={styles.Wrapper}>
        <Touchable onPress={this.showPicker} style={styles.Wrapper}>
          <Text ref={this.datePicker}>{value}</Text>
        </Touchable>
        {showPicker && (
          <Text>hello, I'm a picker</Text>
          // <DateTimePicker value={new Date(value)} mode={mode} onChange={this.onChange} />
        )}
      </View>
    );
  }
}

export const DatePicker = withFormikWrapper(withUrbiFormWrapper(DatePickerComponent));
