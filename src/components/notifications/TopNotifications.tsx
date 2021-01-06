import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Transition, Transitioning, TransitioningView } from 'react-native-reanimated';
import { Touchable } from 'src/components/Touchable';
import { Status } from 'src/molecules/content/Status';
import { Testable } from 'src/types';
import { colors } from 'src/utils/colors';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 666,
  } as ViewStyle,
  StatusWrapper: {
    minHeight: 80,
    paddingVertical: 16,
    paddingRight: 20,
    paddingLeft: 16,
    backgroundColor: colors.tertiary,
  },
});

export interface Notification {
  mainMessage: string;
  secondaryMessage: string;
  hideAfterMs?: number;
}

type TopNotificationsState = {
  notifications: Notification[];
  hideTimeout?: number;
};

const DEFAULT_HIDE_AFTER_MS = 5000;

const transition = (
  <Transition.Together>
    <Transition.Out
      type="slide-left"
      durationMs={150}
      interpolation="easeOut"
      propagation="bottom"
    />
    <Transition.In type="slide-top" durationMs={250} interpolation="easeIn" propagation="top" />
  </Transition.Together>
);

export class TopNotifications extends React.PureComponent<Testable, TopNotificationsState> {
  private view: React.RefObject<TransitioningView>;

  constructor(props: {}) {
    super(props);
    this.view = React.createRef();
    this.state = { notifications: [] };
    this.hide = this.hide.bind(this);
  }

  UNSAFE_componentWillUnmount() {
    if (this.state.hideTimeout) clearTimeout(this.state.hideTimeout);
  }

  push(notification: Notification) {
    this.view.current.animateNextTransition();
    const { notifications } = this.state;
    const hideTimeout = notifications.length
      ? undefined
      : setTimeout(() => this.hide(), notification.hideAfterMs ?? DEFAULT_HIDE_AFTER_MS);

    this.setState({
      notifications: [...this.state.notifications, notification],
      hideTimeout,
    });
  }

  private hide() {
    if (this.view.current) {
      this.view.current.animateNextTransition();
    }
    const notifications = this.state.notifications.slice(1);
    clearTimeout(this.state.hideTimeout);
    const hideTimeout = notifications.length
      ? setTimeout(() => this.hide(), notifications[0].hideAfterMs ?? DEFAULT_HIDE_AFTER_MS)
      : undefined;
    this.setState({ notifications, hideTimeout });
  }

  render() {
    return (
      <Transitioning.View ref={this.view} style={styles.Wrapper} transition={transition}>
        {this.state.notifications.length ? (
          <View style={styles.StatusWrapper}>
            <Touchable onPress={this.hide} testID={this.props.testID}>
              <Status
                content={this.state.notifications[0].mainMessage}
                title={this.state.notifications[0].secondaryMessage}
              />
            </Touchable>
          </View>
        ) : (
          undefined
        )}
      </Transitioning.View>
    );
  }
}

export default TopNotifications;
