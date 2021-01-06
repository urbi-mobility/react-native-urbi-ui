import { format } from 'date-fns';
import { de, enUS, es, fr, it } from 'date-fns/locale';
import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Touchable } from 'src/components/Touchable';
import { ItemSeparator } from 'src/molecules/ItemSeparator';
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

export type DatePickerPropsType = 'date' | 'time';

export type SupportedLocale = 'de' | 'en' | 'es' | 'fr' | 'it';

const supportedLocales = new Set(['de', 'en', 'es', 'fr', 'it']);

export const isSupportedLocale = (l: string): l is SupportedLocale => supportedLocales.has(l);

const locales = { de, en: enUS, es, fr, it };

interface DatePickerProps extends UrbiFormComponentProps<Date> {
  mode: DatePickerPropsType;
  locale: SupportedLocale;
}

interface DatePickerState extends UrbiFormComponentState {
  showPicker: boolean;
}

class DatePickerComponent extends UrbiFormComponent<Date, DatePickerProps, DatePickerState> {
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
    this.props.setFieldValue(date);
  }

  focus() {
    this.showPicker();
  }

  render() {
    const { error, label, locale, mode, name, testID, value } = this.props;
    const { focused, showPicker } = this.state;

    return (
      <View style={styles.Wrapper} onLayout={this.onLayout}>
        <SectionsDivider
          label={label || name}
          backgroundColor="transparent"
          labelColor={focused ? colors.primary : colors.ughina}
        />
        <Touchable onPress={this.showPicker} style={styles.Wrapper} testID={testID}>
          <Text ref={this.datePicker} style={styles.DateLabel}>
            {format(value, mode === 'date' ? 'PP' : 'p', { locale: locales[locale] })}
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
          date={value}
          onConfirm={this.onChange}
          onCancel={this.hidePicker}
        />
      </View>
    );
  }
}

export const DatePicker = withFormikWrapper(withUrbiFormWrapper(DatePickerComponent));
