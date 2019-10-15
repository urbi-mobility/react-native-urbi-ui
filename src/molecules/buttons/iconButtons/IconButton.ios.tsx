import React from 'react';
import { Image, ImageRequireSource, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { IconButtonExtendedProps } from '../../../molecules/buttons/types';
import { colors } from '../../../utils/colors';
import { Icon } from '../../../utils/const';

class IconButton extends React.PureComponent<IconButtonExtendedProps> {
  styles: {
    Wrapper: ViewStyle;
    Button: ViewStyle;
  };

  constructor(props: IconButtonExtendedProps) {
    super(props);
    const { backgroundColor, buttonStyle, noShadow, size } = props;
    const disabled = buttonStyle === 'disabled';
    this.styles = StyleSheet.create({
      Wrapper: {
        borderRadius: size / 2,
        width: size,
        height: size,
      } as ViewStyle,
      Button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: size / 2,
        borderColor: disabled ? undefined : props.borderColor,
        borderWidth: disabled ? undefined : props.borderWidth,
        marginBottom: 1,
        shadowColor: disabled || noShadow ? undefined : colors.shadowBorder,
        shadowOffset: disabled || noShadow ? undefined : { height: 1, width: 0 },
        shadowOpacity:
          disabled || noShadow ? undefined : backgroundColor === colors.transparent ? 0 : 1,
        shadowRadius: 2,
        width: size,
        height: size,
        overflow: 'hidden',
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
    const { backgroundColor, buttonStyle, icon, onPress, onPressIn, opacity, style } = this.props;
    const disabled = buttonStyle === 'disabled';

    return (
      <TouchableOpacity
        onPress={disabled ? undefined : onPress}
        onPressIn={disabled ? undefined : onPressIn}
        // tslint:disable-next-line:jsx-no-multiline-js
        style={[
          this.styles.Button,
          style,
          { backgroundColor: disabled ? colors.ursula : backgroundColor },
        ]}
      >
        {this.getImage(icon, opacity || 1)}
      </TouchableOpacity>
    );
  }
}

export default IconButton;
