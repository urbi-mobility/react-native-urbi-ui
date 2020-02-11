import React from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';
import UrbiFormComponent from './UrbiFormComponent';

export type UrbiFormContextType = {
  onSubmitEditing: (submitter: string) => any;
  onFocus: (fieldName: string, y?: number) => any;
  onBlur: (fieldName: string) => any;
  refs: { [name: string]: React.RefObject<UrbiFormComponent<any, any, any>> };
  setRef: (name: string) => React.RefObject<UrbiFormComponent<any, any, any>>;
  getReturnKeyType: (name: string) => 'done' | 'next';
};

export const UrbiFormContext = React.createContext({
  onSubmitEditing: (_: string) => undefined,
  onFocus: (_: string, __?: number) => undefined,
  onBlur: (_: string) => undefined,
  refs: {},
  setRef: (_: string) => React.createRef<UrbiFormComponent<any, any, any>>(),
  getReturnKeyType: ((_: string) => 'next') as UrbiFormContextType['getReturnKeyType'],
});

export type UrbiFormProps = {
  handleSubmit: () => any;
  values: { [name: string]: any };
  children: Array<React.ReactElement<any>>;
  parentScrollView: React.RefObject<ScrollView>;
  scrollViewAnchor: number;
  autoScroll?: boolean;
};

type UrbiFormState = {
  focusedField?: string;
  formOffset: number; // set in the parent view, which must be a direct child of the ScrollView
};

const nextSubmit = 'submitUrbiForm';

export const SubmitButtonStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'center',
  marginTop: 10,
};

class UrbiForm extends React.PureComponent<UrbiFormProps, UrbiFormState, UrbiFormContextType> {
  private nextTable: {
    [name: string]: string;
  } = {};
  private references: {
    [name: string]: React.RefObject<UrbiFormComponent<any, any, any>>;
  } = {};

  constructor(props: UrbiFormProps) {
    super(props);
    let last: string;
    props.children
      .filter((element) => element.props.focusable && element.props.name)
      .forEach((element) => {
        const thisName = element.props.name;
        this.nextTable[thisName] = nextSubmit;
        if (last) this.nextTable[last] = thisName;
        last = thisName;
      });
    this.state = { formOffset: 0 };
    this.setComponentRef = this.setComponentRef.bind(this);
    this.onSubmitEditing = this.onSubmitEditing.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.getReturnKeyType = this.getReturnKeyType.bind(this);
    this.getValues = this.getValues.bind(this);
  }

  setComponentRef(name: string) {
    let ref = this.references[name];
    if (!ref) {
      ref = React.createRef<UrbiFormComponent<any, any, any>>();
    }
    this.references[name] = ref;
    return ref;
  }

  onSubmitEditing(submitter: string) {
    const next = this.nextTable[submitter];
    if (next === nextSubmit) {
      this.props.handleSubmit();
    } else {
      const nextRef = this.references[next];
      if (nextRef && nextRef.current) {
        nextRef.current.focus();
      }
    }
    return undefined;
  }

  getValues() {
    return this.props.values;
  }

  getReturnKeyType(submitter: string) {
    return this.nextTable[submitter] === nextSubmit ? 'done' : 'next';
  }

  onFocus(fieldName: string, y?: number) {
    const { autoScroll, parentScrollView, scrollViewAnchor } = this.props;
    this.setState({ focusedField: fieldName });
    if (autoScroll && y !== undefined) {
      parentScrollView.current!.scrollTo({ y: y + scrollViewAnchor });
    }
    return undefined;
  }

  onBlur(fieldName: string) {
    if (this.state.focusedField === fieldName) {
      this.setState({ focusedField: undefined });
    }
    return undefined;
  }

  render() {
    return (
      <View>
        <UrbiFormContext.Provider
          // tslint:disable-next-line:jsx-no-multiline-js
          value={{
            onSubmitEditing: this.onSubmitEditing,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            refs: this.references,
            setRef: this.setComponentRef,
            getReturnKeyType: this.getReturnKeyType,
          }}
        >
          <View {...this.props} />
        </UrbiFormContext.Provider>
      </View>
    );
  }
}

export default UrbiForm;
