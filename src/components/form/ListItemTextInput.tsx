import React from 'react';
import { StyleSheet, Text, TextInput, View, ViewStyle, KeyboardTypeOptions } from 'react-native';
import { IconButtonCompact } from '../../molecules/buttons/iconButtons/IconButtonCompact';
import { ItemSeparator } from '../../molecules/ItemSeparator';
import { SectionsDivider } from '../../molecules/SectionsDivider';
import { colors } from '../../utils/colors';
import { onIOS } from '../../utils/const';
import { fontStyles } from '../../utils/fonts';
import UrbiFormComponent, {
  UrbiFormComponentProps,
  UrbiFormComponentState,
} from './UrbiFormComponent';
import withUrbiFormWrapper from './WithUrbiFormWrapper';
import { withFormikWrapper } from './Formik';

export type ListItemTextInputPropsType =
  | 'text'
  | 'emailAddress'
  | 'password'
  | 'pin'
  | 'telephoneNumber';

const toTextInputType = (t: ListItemTextInputPropsType) => {
  switch (t) {
    case 'text':
      return 'username';
    case 'pin':
      return 'password';
    default:
      return t;
  }
};

interface ListItemTextInputProps extends UrbiFormComponentProps<string> {
  type: ListItemTextInputPropsType;
  placeholder?: string;
}

interface ListItemTextInputState extends UrbiFormComponentState {
  showPassword: boolean;
}

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
  TextWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  TextInput: {
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
  PasswordToggle: {
    flex: 0,
    flexGrow: 0,
    flexBasis: 'auto',
    marginRight: 12,
  } as ViewStyle,
});

const keyboardTypes: { [t in ListItemTextInputPropsType]: KeyboardTypeOptions } = {
  text: 'default',
  emailAddress: 'email-address',
  password: 'default',
  pin: 'number-pad',
  telephoneNumber: 'phone-pad',
};

class ListItemTextInputComponent extends UrbiFormComponent<
  string,
  ListItemTextInputProps,
  ListItemTextInputState
> {
  private textInput: React.RefObject<TextInput>;

  constructor(props: ListItemTextInputProps) {
    super(props);
    this.textInput = React.createRef<TextInput>();
    this.state = {
      focused: false,
      showPassword: props.type !== 'password' && props.type !== 'pin',
    };
    this.togglePassword = this.togglePassword.bind(this);
    this.getReturnKeyType = this.getReturnKeyType.bind(this);
  }

  componentDidMount() {
    if (this.props.autofocus) {
      setTimeout(() => this.focus(), onIOS ? 800 : 100);
    }
  }

  focus() {
    if (this.textInput.current) this.textInput.current.focus();
  }

  togglePassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  getReturnKeyType() {
    return this.props.context!.getReturnKeyType(this.props.name);
  }

  render() {
    const { disabled, error, label, name, placeholder, setFieldValue, type, value } = this.props;
    const { focused, showPassword } = this.state;
    const textType = toTextInputType(type);
    return (
      <View style={styles.Wrapper} onLayout={this.onLayout}>
        <SectionsDivider
          label={label || name}
          backgroundColor="transparent"
          labelColor={focused ? colors.primary : colors.ughina}
        />
        <View style={styles.TextWrapper}>
          <TextInput
            ref={this.textInput}
            style={styles.TextInput}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setFieldValue}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            value={value}
            placeholder={placeholder || label || name}
            placeholderTextColor={colors.ughina}
            keyboardType={keyboardTypes[type]}
            textContentType={textType}
            secureTextEntry={!showPassword}
            underlineColorAndroid="transparent"
            onSubmitEditing={this.onSubmitEditing}
            returnKeyType={this.getReturnKeyType()}
            editable={!(disabled ?? false)}
          />
          {(type === 'password' || type === 'pin') && (
            // tslint:disable-next-line:jsx-no-multiline-js
            <IconButtonCompact
              buttonStyle="secondary"
              icon={this.state.showPassword ? 'pass-shown-small' : 'pass-hidden-small'}
              onPress={this.togglePassword}
              style={styles.PasswordToggle}
            />
          )}
        </View>
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
      </View>
    );
  }
}

export const ListItemTextInput = withFormikWrapper(withUrbiFormWrapper(ListItemTextInputComponent));
