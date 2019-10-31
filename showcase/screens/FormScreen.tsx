import React, { useRef } from 'react';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';
import TestForm, { UsernameAndPassword } from '../components/TestForm';
import { showAlert } from 'react-native-urbi-ui/utils/functions';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  } as ViewStyle,
});

const handleSubmit = (up: UsernameAndPassword) =>
  showAlert(`username: ${up.username}, password: ${up.password}`);

export const FormScreen = () => {
  const scrollView = useRef<ScrollView>(null);

  return (
    <ScrollView ref={scrollView} style={styles.Wrapper}>
      <TestForm handleSubmit={handleSubmit} parentScrollView={scrollView} />
    </ScrollView>
  );
};

export default FormScreen;
