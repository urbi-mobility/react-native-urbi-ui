import React from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { colors } from 'src/utils/colors';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: colors.ukko,
    height: 1,
    marginLeft: 12,
    marginRight: 12,
  },
});

type ItemSeparatorProps = {
  animated?: boolean;
  backgroundColor?: string;
};

type ItemSeparatorState = {
  currentBg?: string;
};

class ItemSeparator extends React.PureComponent<ItemSeparatorProps, ItemSeparatorState> {
  private animatedBg?: Animated.Value;
  private nextBg?: string;

  constructor(props: ItemSeparatorProps) {
    super(props);
    if (props.animated && props.backgroundColor) {
      this.animatedBg = new Animated.Value(0);
    }
    this.state = { currentBg: props.backgroundColor };
    this.getAnimatedBg = this.getAnimatedBg.bind(this);
  }

  componentWillReceiveProps(nextProps: ItemSeparatorProps) {
    if (
      nextProps.animated &&
      this.props.backgroundColor !== nextProps.backgroundColor &&
      this.animatedBg
    ) {
      this.nextBg = nextProps.backgroundColor!;
      this.animatedBg.setValue(0);
      Animated.timing(this.animatedBg, {
        duration: 250,
        easing: Easing.inOut(Easing.ease),
        toValue: 1,
      }).start(() => this.setState({ currentBg: nextProps.backgroundColor! }));
    }
  }

  getAnimatedBg() {
    return this.animatedBg!.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.currentBg!, this.nextBg!],
      extrapolate: 'clamp',
    });
  }

  render() {
    const { animated, backgroundColor } = this.props;
    if (animated && this.nextBg) {
      return <Animated.View style={[styles.Wrapper, { backgroundColor: this.getAnimatedBg() }]} />;
    }
    return backgroundColor ? (
      <View style={[styles.Wrapper, { backgroundColor }]} />
    ) : (
      <View style={styles.Wrapper} />
    );
  }
}

export default ItemSeparator;
