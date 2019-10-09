import React from 'react';
import { Image, ImageRequireSource, StyleSheet, View, ViewStyle } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
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
    const { buttonStyle, size } = props;
    const disabled = buttonStyle === 'disabled';
    this.styles = StyleSheet.create({
      Wrapper: {
        borderRadius: size / 2,
        overflow: 'hidden',
        marginBottom: 1,
        width: size,
        height: size,
      } as ViewStyle,
      Button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: size / 2,
        borderColor: disabled ? undefined : props.borderColor,
        borderWidth: disabled ? undefined : props.borderWidth,
        height: size,
        width: size,
      } as ViewStyle,
    });
    this.getImage = this.getImage.bind(this);
  }

  getImage(icon: string | ImageRequireSource) {
    const { buttonStyle, color, innerIconSize } = this.props;
    const disabled = buttonStyle === 'disabled';

    return typeof icon === 'string' ? (
      <Icon name={icon} size={innerIconSize} color={disabled ? colors.ulisse : color} />
    ) : (
      <Image
        source={icon as ImageRequireSource}
        style={{ width: innerIconSize, height: innerIconSize }}
      />
    );
  }

  render() {
    const { backgroundColor, buttonStyle, icon, onPress, onPressIn, noShadow, style } = this.props;
    const disabled = buttonStyle === 'disabled';
    return (
      <View
        style={[this.styles.Wrapper, style]}
        elevation={backgroundColor === colors.transparent || disabled || noShadow ? 0 : 1}
      >
        <TouchableNativeFeedback
          onPress={disabled ? undefined : onPress}
          onPressIn={disabled ? undefined : onPressIn}
        >
          <View
            // tslint:disable-next-line:jsx-no-multiline-js
            style={[
              this.styles.Button,
              { backgroundColor: disabled ? colors.ursula : backgroundColor },
            ]}
          >
            {this.getImage(icon)}
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default IconButton;