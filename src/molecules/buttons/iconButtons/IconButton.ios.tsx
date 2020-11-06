import React from 'react';
import { Image, ImageRequireSource, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { IconButtonExtendedProps } from 'src/molecules/buttons/types';
import { colors } from 'src/utils/colors';
import { Icon } from 'src/utils/const';

const getEnabledDependentStyles = (props: IconButtonExtendedProps) => {
  const { backgroundColor, noShadow } = props;
  const disabled = props.buttonStyle === 'disabled';
  return {
    borderColor: disabled ? undefined : props.borderColor,
    borderWidth: disabled ? undefined : props.borderWidth,
    shadowColor: disabled || noShadow ? undefined : colors.shadowBorder,
    shadowOffset: disabled || noShadow ? undefined : { height: 1, width: 0 },
    shadowOpacity:
      disabled || noShadow ? undefined : backgroundColor === colors.transparent ? 0 : 1,
  };
};

export class IconButton extends React.PureComponent<IconButtonExtendedProps> {
  styles: {
    Wrapper: ViewStyle;
    Button: ViewStyle;
  };

  constructor(props: IconButtonExtendedProps) {
    super(props);
    const { size } = props;
    this.styles = StyleSheet.create({
      Wrapper: {
        borderRadius: size / 2,
        width: size,
        height: size,
      } as ViewStyle,
      Button: {
        ...getEnabledDependentStyles(props),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: size / 2,
        marginBottom: 1,
        shadowRadius: 2,
        width: size,
        height: size,
      } as ViewStyle,
    });
    this.getImage = this.getImage.bind(this);
  }

  getImage(icon: string | ImageRequireSource, opacity: number) {
    const { buttonStyle, color, innerIconSize } = this.props;
    const disabled = buttonStyle === 'disabled';

    return typeof icon === 'string' ? (
      <Icon name={icon} size={innerIconSize} color={disabled ? colors.ulisse : color} />
    ) : (
      <Image
        source={icon as ImageRequireSource}
        style={{ width: innerIconSize, height: innerIconSize, opacity }}
        resizeMode="contain"
      />
    );
  }

  render() {
    const {
      backgroundColor,
      buttonStyle,
      icon,
      onLongPress,
      onPress,
      onPressIn,
      opacity,
      style,
      testID,
    } = this.props;
    const disabled = buttonStyle === 'disabled';

    return (
      <TouchableOpacity
        testID={testID || `${icon}IconButtonTestID`}
        onLongPress={disabled ? undefined : onLongPress}
        onPress={disabled ? undefined : onPress}
        onPressIn={disabled ? undefined : onPressIn}
        // tslint:disable-next-line:jsx-no-multiline-js
        style={[
          this.styles.Button,
          style,
          {
            ...getEnabledDependentStyles(this.props),
            backgroundColor: disabled ? colors.ursula : backgroundColor,
          },
        ]}
      >
        {this.getImage(icon, opacity || 1)}
      </TouchableOpacity>
    );
  }
}
