import React from 'react';
import { UrbiFormContext, UrbiFormContextType } from './UrbiForm';
import { UrbiFormComponentProps } from './UrbiFormComponent';

export const withUrbiFormWrapper = <T extends UrbiFormComponentProps<any>>(
  Component: React.ComponentClass<T>
) => {
  const getComponent = (props: T) => (context: UrbiFormContextType) => (
    <Component {...props} ref={context.setRef(props.name)} context={context} />
  );

  const WithUrbiFormWrapper = (props: T) => (
    <UrbiFormContext.Consumer>{getComponent(props)}</UrbiFormContext.Consumer>
  );

  return WithUrbiFormWrapper;
};

export default withUrbiFormWrapper;
