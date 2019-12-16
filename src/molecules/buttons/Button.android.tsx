import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { PulsatingDots } from '../../molecules/animations/PulsatingDots';
import { ExtendedButtonProps } from '../../molecules/buttons/types';
import { colors } from '../../utils/colors';
import { textStyle } from '../../utils/textStyles';

export class Button extends React.PureComponent<ExtendedButtonProps> {
  styles: {
    Wrapper: ViewStyle;
    Button: ViewStyle;
  };

  constructor(props: ExtendedButtonProps) {
    super(props);
    const { height, horizontalPadding, maxWidth, minWidth } = props;
    this.styles = StyleSheet.create({
      Wrapper: {
        flex: 1,
        borderRadius: height / 2,
        overflow: 'hidden',
        marginBottom: 1,
        maxWidth,
        minWidth,
        maxHeight: height,
      } as ViewStyle,
      Button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: height / 2,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        height,
        maxWidth,
        minWidth,
        maxHeight: height,
      } as ViewStyle,
    });
  }

  getTextStyle() {
    return textStyle(
      this.props.textStyle,
      this.props.buttonStyle === 'disabled' ? colors.ulisse : this.props.color
    );
  }

  getDisabledDependentButtonStyles() {
    const { backgroundColor, borderColor, borderWidth, buttonStyle } = this.props;
    const disabled = buttonStyle === 'disabled';
    return {
      borderColor: disabled ? undefined : borderColor,
      borderWidth: disabled ? undefined : borderWidth,
      backgroundColor: disabled ? colors.ursula : backgroundColor,
    };
  }

  render() {
    const {
      backgroundColor,
      buttonStyle,
      exclusive,
      isUppercase,
      label,
      loading,
      loadingColor,
      loadingSize,
      onPress,
      onPressIn,
      style,
    } = this.props;
    const disabled = buttonStyle === 'disabled';

    // this is to avoid this  beautiful TS error:
    // Property 'exclusive' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<TouchableNativeFeedback> & Readonly<TouchableNativeFeedbackProps> & Readonly<...>'
    // it's a prop added via a patch to react-native-gesture-handler, see https://github.com/software-mansion/react-native-gesture-handler/issues/784 and
    // https://github.com/Microsoft/TypeScript/issues/15463
    const propsFromPatch = { exclusive };

    return (
      <View
        style={[this.styles.Wrapper, style]}
        elevation={backgroundColor === colors.transparent || disabled ? 0 : 2}
      >
        <TouchableNativeFeedback
          {...propsFromPatch}
          onPress={disabled ? undefined : onPress}
          onPressIn={disabled ? undefined : onPressIn}
        >
          <View style={[this.styles.Button, this.getDisabledDependentButtonStyles()]}>
            {loading ? (
              <PulsatingDots size={loadingSize} color={loadingColor} />
            ) : (
              <Text style={this.getTextStyle()}>
                {isUppercase ? (label || '').toUpperCase() : label}
              </Text>
            )}
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
