import React, { useRef } from 'react';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';
import TestForm, { FormValues } from '../components/TestForm';
import { showAlert } from 'react-native-urbi-ui/utils/functions';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  } as ViewStyle,
});

const handleSubmit = (values: FormValues) =>
  showAlert(
    `username: ${values.username}, password: ${values.password}, date of birth: ${values.dateOfBirth}, gender: ${values.gender}, notes: ${values.notes}`
  );

export const FormScreen = () => {
  const scrollView = useRef<ScrollView>(null);

  return (
    <ScrollView
      ref={scrollView}
      style={styles.Wrapper}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="always"
    >
      <TestForm handleSubmit={handleSubmit} parentScrollView={scrollView} />
    </ScrollView>
  );
};

export default FormScreen;
