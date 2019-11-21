import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { ItemSeparator } from '../../molecules/ItemSeparator';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
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
export declare type DatePickerPropsType = 'date' | 'time';

interface DatePickerProps extends UrbiFormComponentProps {
  mode: DatePickerPropsType;
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
    this.hidePicker = this.hidePicker.bind(this);
    this.state = {
      focused: false,
      showPicker: false,
    };
  }

  showPicker() {
    this.setState({ showPicker: true });
  }

  hidePicker() {
    this.setState({ showPicker: false });
  }

  onChange(date: Date) {
    this.hidePicker();
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
        <DateTimePickerModal
          isVisible={showPicker}
          mode={mode}
          date={new Date(value)}
          onConfirm={this.onChange}
          onCancel={this.hidePicker}
        />
      </View>
    );
  }
}

export const DatePicker = withFormikWrapper(withUrbiFormWrapper(DatePickerComponent));
