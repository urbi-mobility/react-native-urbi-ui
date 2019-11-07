import { Formik } from 'formik';
import React from 'react';
import { LayoutChangeEvent, ScrollView, StyleSheet, View } from 'react-native';
import { ListItemTextInput } from 'react-native-urbi-ui/components/form/ListItemTextInput';
import UrbiForm, { UrbiFormProps } from 'react-native-urbi-ui/components/form/UrbiForm';
import { ButtonCompact } from 'react-native-urbi-ui/molecules/buttons/ButtonCompact';
import { colors } from 'react-native-urbi-ui/utils/colors';
import { DatePicker } from 'react-native-urbi-ui/components/form/DatePicker';
import * as yup from 'yup';

type TestFormProps = {
  handleSubmit: (submitted: UsernameAndPassword) => any;
  parentScrollView?: React.RefObject<ScrollView>;
};

type TestFormState = {
  scrollViewAnchor: number;
};

export type UsernameAndPassword = {
  username: string;
  password: string;
};

const validationSchema = yup.object().shape({
  username: yup.string().required('set a username'),
  password: yup.string().required('set a password'),
});

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: colors.ulisse,
    marginBottom: 20,
    paddingBottom: 10,
  },
  Button: {
    marginTop: 10,
    alignItems: 'center',
  },
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
        <DatePicker mode="date" name="dateOfBirth" focusable />
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
          initialValues={{ username: '', password: '', dateOfBirth: '2019-11-07T16:48:32.061Z' }}
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
