import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { PulsatingDots } from '../../molecules/animations/PulsatingDots';
import { ExtendedButtonProps } from '../../molecules/buttons/types';
import { colors } from '../../utils/colors';
import { textStyle } from '../../utils/textStyles';

export class Button extends React.PureComponent<ExtendedButtonProps> {
  styles: {
    Button: ViewStyle;
  };

  constructor(props: ExtendedButtonProps) {
    super(props);
    const { height, horizontalPadding, maxWidth, minWidth } = props;
    this.styles = StyleSheet.create({
      Button: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: height / 2,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        shadowRadius: 2,
        height: height - 1,
        maxHeight: height - 1,
        marginBottom: 1,
        maxWidth,
        minWidth,
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
    const { backgroundColor, borderColor, borderWidth, buttonStyle, noShadow } = this.props;
    const disabled = buttonStyle === 'disabled';
    return {
      borderColor: disabled ? undefined : borderColor,
      borderWidth: disabled ? undefined : borderWidth,
      shadowColor: disabled || noShadow ? undefined : colors.shadowBorder,
      shadowOffset: disabled || noShadow ? undefined : { height: 4, width: 0 },
      shadowOpacity: disabled || noShadow ? undefined : 1,
      backgroundColor: disabled ? colors.ursula : backgroundColor,
    };
  }

  render() {
    const {
      loading,
      loadingColor,
      loadingSize,
      buttonStyle,
      isUppercase,
      label,
      onLongPress,
      onPress,
      onPressIn,
      style,
    } = this.props;
    const disabled = buttonStyle === 'disabled';

    return (
      <TouchableOpacity
        onLongPress={disabled || loading ? undefined : onLongPress}
        onPressIn={disabled || loading ? undefined : onPressIn}
        onPress={disabled || loading ? undefined : onPress}
        style={[this.styles.Button, style, this.getDisabledDependentButtonStyles()]}
      >
        {loading ? (
          <PulsatingDots size={loadingSize} color={loadingColor} />
        ) : (
          <Text style={this.getTextStyle()}>
            {isUppercase ? (label || '').toUpperCase() : label}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
}
