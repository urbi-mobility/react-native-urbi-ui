import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import Svg, { Circle, G } from 'react-native-svg';
import { colors } from 'src/utils/colors';

const { set, cond, startClock, clockRunning, block, timing, Value, Clock, interpolate } = Animated;

// undocumented, see https://github.com/software-mansion/react-native-reanimated/issues/545
((Animated as unknown) as any).addWhitelistedNativeProps({ strokeDashoffset: true });

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedG = Animated.createAnimatedComponent(G);

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
});

type LoadingCircleProps = {
  size: number;
  color: string;
};

const runAnimation = (clock: Animated.Clock, duration: number, pingPong = false) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    toValue: new Value(1),
    duration,
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(clockRunning(clock), 0, startClock(clock)),
    timing(clock, state, config),
    cond(state.finished, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.frameTime, 0),
      pingPong ? set(config.toValue, cond(config.toValue, 0, 1)) : set(state.position, 0),
    ]),
    state.position,
  ]);
};

export class LoadingCircle extends React.PureComponent<LoadingCircleProps> {
  private size: number;
  private halfSize: number;
  private r: number;
  private dashOffset: Animated.Node<number>;
  private rotation: Animated.Node<number>;
  private minOffset: number;
  private maxOffset: number;

  constructor(props: LoadingCircleProps) {
    super(props);
    this.size = props.size;
    this.halfSize = props.size / 2;
    this.r = props.size / 2 - props.size / 10;
    this.maxOffset = 2 * Math.PI * this.r * 0.95;
    this.minOffset = 2 * Math.PI * this.r * 0.25;

    this.dashOffset = runAnimation(new Clock(), 700, true);
    this.rotation = runAnimation(new Clock(), 1400);
  }

  render() {
    return (
      <View style={styles.Wrapper}>
        <Svg width={this.size} height={this.size} viewBox={`0 0 ${this.size} ${this.size}`}>
          <G transform={`translate(${this.halfSize}, ${this.halfSize})`}>
            <AnimatedG
              style={{
                transform: [
                  {
                    rotate: interpolate(this.rotation, {
                      inputRange: [0, 1],
                      outputRange: [2 * Math.PI, 0],
                    }),
                  },
                ],
              }}
            >
              <AnimatedCircle
                stroke={this.props.color ?? colors.primary}
                strokeWidth={this.props.size / 10}
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * this.r}
                strokeDashoffset={interpolate(this.dashOffset, {
                  inputRange: [0, 1],
                  outputRange: [this.maxOffset, this.minOffset],
                })}
                r={this.r}
                cx={this.halfSize}
                cy={this.halfSize}
                style={{
                  transform: [{ translateX: -this.halfSize }, { translateY: -this.halfSize }],
                }}
              />
            </AnimatedG>
          </G>
        </Svg>
      </View>
    );
  }
}
