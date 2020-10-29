import React, { ReactElement } from 'react';
import {
  Dimensions,
  EmitterSubscription,
  Keyboard,
  KeyboardEvent,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Easing } from 'react-native-reanimated';
import { ButtonRegularUnmemoized } from 'src/molecules/buttons/ButtonRegular';
import { colors } from 'src/utils/colors';
import { getTabBarHeight, IPHONE_X_HOME_AREA_HEIGHT, onIOS } from 'src/utils/const';

export const BOTTOM_PANEL_HEIGHT = 80;
const ANDROID_EVT_DURATION = 100;

export const bottomPanelStyles = {
  FloatingBottomPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  } as ViewStyle,
  BottomPanel: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: BOTTOM_PANEL_HEIGHT,
    paddingTop: 12,
    paddingBottom: 24,
    paddingLeft: 40,
    paddingRight: 40,
  } as ViewStyle,
};

const styles = StyleSheet.create({
  ...bottomPanelStyles,
  Wrapper: {
    flex: 1,
  },
});

type FloatingButtonLayoutProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  button: ReactElement<typeof ButtonRegularUnmemoized>;
  onIphoneX: boolean;
  hasNotch: boolean;
  noGradient?: boolean;
  accountForBottomTabs?: boolean;
  fixedPosition?: boolean;
};

const gradientColors = [colors.zeroAlphaUlisse, colors.ulisse];

export class FloatingButtonLayout extends React.Component<FloatingButtonLayoutProps> {
  private deltaY: Animated.Value<number>;
  private showListener: EmitterSubscription | undefined;
  private hideListener: EmitterSubscription | undefined;
  private keyboardDisplayed = false;

  constructor(props: FloatingButtonLayoutProps) {
    super(props);
    this.deltaY = new Animated.Value(0);
    this.onKeyboardShow = this.onKeyboardShow.bind(this);
    this.onKeyboardHide = this.onKeyboardHide.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.showListener = Keyboard.addListener(
      onIOS ? 'keyboardWillShow' : 'keyboardDidShow',
      this.onKeyboardShow
    );
    this.hideListener = Keyboard.addListener(
      onIOS ? 'keyboardWillHide' : 'keyboardDidHide',
      this.onKeyboardHide
    );
  }

  UNSAFE_componentWillUnmount() {
    if (this.showListener) this.showListener.remove();
    if (this.hideListener) this.hideListener.remove();
    this.keyboardDisplayed = false;
  }

  onKeyboardShow(event: KeyboardEvent) {
    const { fixedPosition, accountForBottomTabs, hasNotch } = this.props;
    if (!fixedPosition && (onIOS || !this.keyboardDisplayed)) {
      this.keyboardDisplayed = true;
      const newDeltaY =
        event.endCoordinates.screenY -
        Dimensions.get('window').height +
        (onIOS || !accountForBottomTabs ? 0 : getTabBarHeight(hasNotch));

      Animated.timing(this.deltaY, {
        duration: event?.duration || ANDROID_EVT_DURATION,
        toValue: newDeltaY,
        easing: Easing.linear,
      }).start();
    }
  }

  onKeyboardHide(event: KeyboardEvent) {
    const { fixedPosition } = this.props;
    if (!fixedPosition && (onIOS || this.keyboardDisplayed)) {
      this.keyboardDisplayed = false;
      Animated.timing(this.deltaY, {
        duration: event?.duration || ANDROID_EVT_DURATION,
        toValue: 0,
        easing: Easing.linear,
      }).start();
    }
  }

  render() {
    const { backgroundColor, button, children, fixedPosition, noGradient, onIphoneX } = this.props;
    const animatedViewStyle = fixedPosition
      ? styles.FloatingBottomPanel
      : [
          styles.FloatingBottomPanel,
          {
            transform: [{ translateY: (this.deltaY as unknown) as number }],
          },
        ];
    const bottomPanelStyle = onIphoneX
      ? [styles.BottomPanel, { height: BOTTOM_PANEL_HEIGHT + IPHONE_X_HOME_AREA_HEIGHT }]
      : styles.BottomPanel;

    return (
      <View
        style={
          backgroundColor
            ? [
                styles.Wrapper,
                {
                  backgroundColor,
                },
              ]
            : styles.Wrapper
        }
      >
        {children}
        <Animated.View style={animatedViewStyle}>
          {noGradient ? (
            <View style={bottomPanelStyle}>{button}</View>
          ) : (
            <LinearGradient colors={gradientColors} style={bottomPanelStyle}>
              {button}
            </LinearGradient>
          )}
        </Animated.View>
      </View>
    );
  }
}
