import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { ItemSeparator } from '../../molecules/ItemSeparator';
// import DateTimePicker from '@react-native-community/datetimepicker';
import { SectionsDivider } from '../../molecules/SectionsDivider';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fonts';
import { Touchable } from '../Touchable';
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
  DateLabel: {
    ...fontStyles.title,
    flex: 1,
    color: colors.uma,
    paddingLeft: 20,
    paddingRight: 12,
    paddingTop: 0,
    paddingBottom: 0,
  },
  Error: {
    ...fontStyles.micro,
    color: colors.error,
    paddingLeft: 20,
    paddingRight: 12,
  },
});

interface DatePickerProps extends UrbiFormComponentProps {
  mode: 'date' | 'time';
}

interface DatePickerState extends UrbiFormComponentState {
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
    const { error, label, mode, name, value } = this.props;
    const { focused, showPicker } = this.state;

    return (
      <View style={styles.Wrapper} onLayout={this.onLayout}>
        <SectionsDivider
          label={label || name}
          backgroundColor="transparent"
          labelColor={focused ? colors.primary : colors.ughina}
        />
        <Touchable onPress={this.showPicker} style={styles.Wrapper}>
          <Text ref={this.datePicker} style={styles.DateLabel}>
            {value}
          </Text>
        </Touchable>
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
        {showPicker && (
          <Text>// TODO show DateTimePicker when we support RN 0.60+</Text>
          // <DateTimePicker value={new Date(value)} mode={mode} onChange={this.onChange} />
        )}
      </View>
    );
  }
}

export const DatePicker = withFormikWrapper(withUrbiFormWrapper(DatePickerComponent));
