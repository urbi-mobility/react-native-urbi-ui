import React from 'react';
import { LayoutChangeEvent } from 'react-native';
import { UrbiFormContextType } from './UrbiForm';

export interface UrbiFormComponentProps<V> {
  name: string;
  label?: string; // if not set, name will be used
  focusable: boolean;
  autofocus?: boolean;
  context?: UrbiFormContextType;
  disabled?: boolean;
  onSubmitEditing?: () => any;
  value?: V;
  setFieldValue?: (value: V) => void;
  error?: string;
  setFieldTouched?: () => void;
  getReturnKeyType?: () => string;
}

export interface UrbiFormComponentState {
  focused: boolean;
}

abstract class UrbiFormComponent<
  V,
  T extends UrbiFormComponentProps<V>,
  S extends UrbiFormComponentState
> extends React.PureComponent<T, S> {
  public y?: number;

  constructor(props: T) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onSubmitEditing = this.onSubmitEditing.bind(this);
    this.onLayout = this.onLayout.bind(this);
  }

  abstract focus(): any;

  onFocus() {
    this.props.context!.onFocus(this.props.name, this.y);
    this.setState({ focused: true });
  }

  onBlur() {
    this.props.setFieldTouched();
    this.props.context!.onBlur(this.props.name);
    this.setState({ focused: false });
  }

  onSubmitEditing() {
    this.props.context!.onSubmitEditing(this.props.name);
  }

  onLayout(e: LayoutChangeEvent) {
    this.y = e.nativeEvent.layout.y;
  }
}

export default UrbiFormComponent;
