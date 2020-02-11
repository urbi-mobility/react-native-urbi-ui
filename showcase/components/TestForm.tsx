import { Formik } from 'formik';
import React from 'react';
import { LayoutChangeEvent, ScrollView, StyleSheet, View } from 'react-native';
import { DatePicker } from 'react-native-urbi-ui/components/form/DatePicker';
import { ListItemTextInput } from 'react-native-urbi-ui/components/form/ListItemTextInput';
import { RadioButtonsForm } from 'react-native-urbi-ui/components/form/RadioButtonsForm';
import UrbiForm, {
  SubmitButtonStyle,
  UrbiFormProps,
} from 'react-native-urbi-ui/components/form/UrbiForm';
import { ButtonCompact } from 'react-native-urbi-ui/molecules/buttons/ButtonCompact';
import { colors } from 'react-native-urbi-ui/utils/colors';
import * as yup from 'yup';

type TestFormProps = {
  handleSubmit: (submitted: FormValues) => any;
  parentScrollView?: React.RefObject<ScrollView>;
};

type TestFormState = {
  scrollViewAnchor: number;
};

export type FormValues = {
  username: string;
  password: string;
  dateOfBirth: Date;
  gender?: 'm' | 'f' | 'non_binary';
};

const validationSchema = yup.object().shape({
  username: yup.string().required('set a username'),
  password: yup.string().required('set a password'),
});

const genderButtons = [
  {
    id: 'm',
    label: 'Male',
  },
  {
    id: 'f',
    label: 'Female',
  },
  {
    id: 'non_binary',
    label: 'Third gender / non binary',
  },
];

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: colors.ulisse,
    marginBottom: 20,
    paddingBottom: 10,
  },
  Button: SubmitButtonStyle,
});

class TestForm extends React.PureComponent<TestFormProps, TestFormState> {
  constructor(props: TestFormProps) {
    super(props);
    this.state = { scrollViewAnchor: 0 };
    this.onLayout = this.onLayout.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  onLayout(e: LayoutChangeEvent) {
    this.setState({ scrollViewAnchor: e.nativeEvent.layout.y });
  }

  renderForm(p: UrbiFormProps) {
    return (
      <UrbiForm {...this.props} {...p} scrollViewAnchor={this.state.scrollViewAnchor} autoScroll>
        <ListItemTextInput name="username" type="text" focusable />
        <ListItemTextInput name="password" type="password" focusable />
        <DatePicker mode="date" name="dateOfBirth" label="date of birth" locale="en" focusable />
        <RadioButtonsForm name="gender" label="gender" buttons={genderButtons} focusable />
        <View style={styles.Button}>
          <ButtonCompact buttonStyle="primary" label="submit" onPress={p.handleSubmit} />
        </View>
      </UrbiForm>
    );
  }

  render() {
    return (
      <View style={styles.Wrapper} onLayout={this.onLayout}>
        <Formik
          initialValues={{ username: '', password: '', dateOfBirth: new Date('1984-02-24') }}
          onSubmit={this.props.handleSubmit}
          validationSchema={validationSchema}
        >
          {this.renderForm}
        </Formik>
      </View>
    );
  }
}

export default TestForm;
