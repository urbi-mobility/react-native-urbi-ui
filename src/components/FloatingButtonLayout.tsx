import React, { ReactElement } from 'react';
import { EmitterSubscription, Keyboard, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Easing } from 'react-native-reanimated';
import { ButtonRegularUnmemoized } from '../molecules/buttons/ButtonRegular';
import { colors } from '../utils/colors';
import { onIOS } from '../utils/const';

const BOTTOM_PANEL_HEIGHT = 80;
const ANDROID_EVT_DURATION = 150;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
  FloatingBottomPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
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
  },
});

type FloatingButtonLayoutProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  button: ReactElement<typeof ButtonRegularUnmemoized>;
  noGradient?: boolean;
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

  componentWillMount() {
    this.showListener = Keyboard.addListener(
      onIOS ? 'keyboardWillShow' : 'keyboardDidShow',
      this.onKeyboardShow
    );
    this.hideListener = Keyboard.addListener(
      onIOS ? 'keyboardWillHide' : 'keyboardDidHide',
      this.onKeyboardHide
    );
  }

  componentWillUnmount() {
    if (this.showListener) this.showListener.remove();
    if (this.hideListener) this.hideListener.remove();
    this.showNotHidden = 0;
  }

  onKeyboardShow(event: any) {
    if (onIOS || !this.showNotHidden) {
      Animated.timing(this.deltaY, {
        duration: (event && event.duration) || ANDROID_EVT_DURATION,
        toValue: BOTTOM_PANEL_HEIGHT - event.endCoordinates.height,
        easing: Easing.linear,
      }).start();
    }
    this.showNotHidden++;
  }

  onKeyboardHide(event: any) {
    this.showNotHidden--;
    if (onIOS || !this.showNotHidden) {
      Animated.timing(this.deltaY, {
        duration: (event && event.duration) || ANDROID_EVT_DURATION,
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
