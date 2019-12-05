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
import { ButtonRegularUnmemoized } from '../molecules/buttons/ButtonRegular';
import { colors } from '../utils/colors';
import { onIOS, tabBarHeight } from '../utils/const';

const BOTTOM_PANEL_HEIGHT = 80;
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
  noGradient?: boolean;
  inModal?: boolean;
};

export class FloatingButtonLayout extends React.Component<FloatingButtonLayoutProps> {
  private deltaY: Animated.Value<number>;
  private showListener: EmitterSubscription | undefined;
  private hideListener: EmitterSubscription | undefined;
  private showNotHidden = 0;

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
    this.showNotHidden = 0;
  }

  onKeyboardShow(event: KeyboardEvent) {
    if (onIOS || !this.showNotHidden) {
      Animated.timing(this.deltaY, {
        duration: event?.duration || ANDROID_EVT_DURATION,
        toValue:
          event.endCoordinates.screenY -
          Dimensions.get('window').height +
          (onIOS ? 0 : tabBarHeight),
        easing: Easing.linear,
      }).start();
    }
    this.showNotHidden++;
  }

  onKeyboardHide(event: KeyboardEvent) {
    this.showNotHidden--;
    if (onIOS || !this.showNotHidden) {
      Animated.timing(this.deltaY, {
        duration: event?.duration || ANDROID_EVT_DURATION,
        toValue: 0,
        easing: Easing.linear,
      }).start();
    }
  }

  render() {
    return (
      <View
        style={[
          styles.Wrapper,
          {
            backgroundColor: this.props.backgroundColor || undefined,
          },
        ]}
      >
        {this.props.children}
        <Animated.View
          style={[
            styles.FloatingBottomPanel,
            {
              transform: [{ translateY: (this.deltaY as unknown) as number }],
            },
          ]}
        >
          {this.props.noGradient ? (
            <View style={styles.BottomPanel}>{this.props.button}</View>
          ) : (
            <LinearGradient
              colors={[colors.zeroAlphaUlisse, colors.ulisse]}
              style={styles.BottomPanel}
            >
              {this.props.button}
            </LinearGradient>
          )}
        </Animated.View>
      </View>
    );
  }
}
