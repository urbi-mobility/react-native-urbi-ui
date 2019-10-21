import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';

const {
  set,
  and,
  cond,
  startClock,
  eq,
  clockRunning,
  block,
  timing,
  Value,
  Clock,
  interpolate,
  Extrapolate,
} = Animated;

const runAnimation = (
  clock: Animated.Clock,
  value: Animated.Adaptable<number>,
  dest: number,
  startAfter: number,
  idleTime: number
) => {
  const state: Animated.TimingState = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const idleState: Animated.TimingState = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const initialDelayExpired = new Value(0);

  const config = {
    duration: 900,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  const idleConfig = {
    duration: new Value(startAfter),
    toValue: new Value(1),
    easing: Easing.inOut(Easing.ease),
  };

  const resetState = (
    stateToReset: Animated.TimingState,
    from: Animated.Adaptable<number>,
    to: Animated.Adaptable<number>
  ) => [
    set(stateToReset.finished, 0),
    set(stateToReset.time, 0),
    set(stateToReset.position, from),
    set(stateToReset.frameTime, 0),
    set(config.toValue, to),
  ];

  return block([
    cond(clockRunning(clock), 0, [resetState(state, value, dest), startClock(clock)]),
    timing(clock, idleState, idleConfig),
    cond(idleState.finished, [set(initialDelayExpired, 1), set(idleConfig.duration, idleTime)]),
    cond(and(initialDelayExpired, idleState.finished), timing(clock, state, config)),
    cond(
      state.finished,
      resetState(
        state,
        cond(eq(state.position, dest), dest, block([resetState(idleState, 0, 1), value])),
        cond(eq(state.position, dest), value, dest)
      )
    ),
    state.position,
  ]);
};

type PulsatingDotsProps = {
  color: string;
  size: number;
};

export class PulsatingDots extends React.PureComponent<PulsatingDotsProps> {
  private scale: Animated.Node<number>;

  constructor(props: PulsatingDotsProps) {
    super(props);
    this.scale = runAnimation(new Clock(), 1, 8, 600, 150);
    this.getDotsStyle = this.getDotsStyle.bind(this);
  }

  getDotsStyle() {
    const { color, size } = this.props;
    return {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: color,
      margin: 0.75 * size,
    };
  }

  render() {
    const dotStyle = this.getDotsStyle();
    return (
      <View style={styles.Container}>
        <View style={styles.AnimationContainer}>
          <Animated.View
            style={[
              dotStyle,
              ({
                transform: [
                  {
                    scaleX: interpolate(this.scale, {
                      inputRange: [1, 3, 5],
                      outputRange: [1, 2.1, 1],
                      extrapolate: Extrapolate.CLAMP,
                    }),
                    scaleY: interpolate(this.scale, {
                      inputRange: [1, 3, 5],
                      outputRange: [1, 2.1, 1],
                      extrapolate: Extrapolate.CLAMP,
                    }),
                  },
                ],
              } as unknown) as ViewStyle,
            ]}
          />
          <Animated.View
            style={[
              dotStyle,
              ({
                transform: [
                  {
                    scaleX: interpolate(this.scale, {
                      inputRange: [2.1, 4, 6],
                      outputRange: [1, 2.1, 1],
                      extrapolate: Extrapolate.CLAMP,
                    }),
                    scaleY: interpolate(this.scale, {
                      inputRange: [2.1, 4, 6],
                      outputRange: [1, 2.1, 1],
                      extrapolate: Extrapolate.CLAMP,
                    }),
                  },
                ],
              } as unknown) as ViewStyle,
            ]}
          />
          <Animated.View
            style={[
              dotStyle,
              ({
                transform: [
                  {
                    scaleX: interpolate(this.scale, {
                      inputRange: [3, 5, 7],
                      outputRange: [1, 2.1, 1],
                      extrapolate: Extrapolate.CLAMP,
                    }),
                    scaleY: interpolate(this.scale, {
                      inputRange: [3, 5, 7],
                      outputRange: [1, 2.1, 1],
                      extrapolate: Extrapolate.CLAMP,
                    }),
                  },
                ],
              } as unknown) as ViewStyle,
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 0,
    flexBasis: 'auto',
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AnimationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
