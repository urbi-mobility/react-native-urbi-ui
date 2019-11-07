import React from 'react';
import { withFormikControl } from 'react-native-formik';

type FormikProps = {
  error?: string;
  name: string;
  setFieldValue?: (value: string) => void;
  setFieldTouched?: () => void;
};

export const withFormikWrapper: <Props>(
  WrappedComponent: React.ComponentType<Props>
) => React.ComponentClass<Props & FormikProps> = withFormikControl;
