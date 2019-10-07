import React from 'react';
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import Touchable from 'src/components/Touchable';
import { Status, StatusProps } from 'src/molecules/content/Status';
import { PageIndicator } from 'src/molecules/PageIndicator';
import { colors } from 'src/utils/colors';
import { onIOS, windowWidth } from 'src/utils/const';

type StatusPanelProps = {
  pages: StatusProps[];
  onPress?: () => any;
  onPageChange?: (selectedIndex: number) => any;
};

type StatusPanelState = {
  scrollViewWidth: number;
  selectedPage: number;
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    minHeight: 80,
    backgroundColor: colors.secondary,
    padding: 16,
    paddingRight: 20,
    paddingBottom: 0, // this is included in the PageIndicator molecule
    shadowColor: colors.shadowBorder,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 1,
  } as ViewStyle,
  Content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

class StatusPanel extends React.PureComponent<StatusPanelProps, StatusPanelState> {
  constructor(props: StatusPanelProps) {
    super(props);
    this.state = { scrollViewWidth: windowWidth, selectedPage: 0 };
    this.onLayout = this.onLayout.bind(this);
    this.onMomentumScrollEnd = this.onMomentumScrollEnd.bind(this);
  }

  onLayout(e: LayoutChangeEvent) {
    const scrollViewWidth = e.nativeEvent.layout.width;
    this.setState({ scrollViewWidth });
  }

  onMomentumScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const selectedPage = Math.floor(e.nativeEvent.contentOffset.x / this.state.scrollViewWidth);
    this.setState({ selectedPage });
    if (this.props.onPageChange) {
      this.props.onPageChange(selectedPage);
    }
  }

  render() {
    // tslint:disable:jsx-no-multiline-js
    return (
      <View style={styles.Wrapper} elevation={2}>
        <Touchable onPress={this.props.onPress}>
          <View style={styles.Content}>
            <ScrollView
              onLayout={this.onLayout}
              snapToAlignment="end"
              snapToInterval={this.state.scrollViewWidth}
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={this.onMomentumScrollEnd}
              decelerationRate="fast"
              overScrollMode={onIOS ? undefined : 'never'}
              horizontal
            >
              {this.props.pages.map((s, i) => (
                <Status key={`page-${i}`} {...s} minWidth={this.state.scrollViewWidth} />
              ))}
            </ScrollView>
          </View>
        </Touchable>
        <PageIndicator pages={this.props.pages.length} selectedPage={this.state.selectedPage} />
      </View>
    );
  }
}

export default StatusPanel;
