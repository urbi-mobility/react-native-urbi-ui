import React from 'react';
import { withFormikControlProps } from 'react-native-formik';

export {};

declare module 'react-native-formik' {
  export function withFormikControl<Props>(
    WrappedComponent: React.ComponentType<Props>
  ): React.ComponentClass<Props & withFormikControlProps>;
}
