import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Transition, Transitioning, TransitioningView } from 'react-native-reanimated';
import { Status } from '../../molecules/content/Status';
import { colors } from '../../utils/colors';
import { Notification } from './TopNotifications';

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

interface StickyNotificationProps extends Notification {
  show: boolean;
}

type StickyNotificationState = {
  show: boolean;
};

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

export class StickyNotification extends React.PureComponent<
  StickyNotificationProps,
  StickyNotificationState
> {
  private view: React.RefObject<TransitioningView>;

  constructor(props: StickyNotificationProps) {
    super(props);
    this.view = React.createRef();
    this.state = { show: false };
  }

  UNSAFE_componentWillReceiveProps(nextProps: StickyNotificationProps) {
    if (!this.state.show && nextProps.show && this.view.current) {
      this.setState({ show: true });
      this.view.current.animateNextTransition();
    }
  }

  render() {
    return (
      <Transitioning.View ref={this.view} style={styles.Wrapper} transition={transition}>
        {this.state.show && (
          <View style={styles.StatusWrapper}>
            <Status content={this.props.mainMessage} title={this.props.secondaryMessage} />
          </View>
        )}
      </Transitioning.View>
    );
  }
}

export default StickyNotification;
