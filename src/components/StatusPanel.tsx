import React from 'react';
import {
  Dimensions,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { Touchable } from '../components/Touchable';
import { Status, StatusProps } from '../molecules/content/Status';
import { PageIndicator } from '../molecules/PageIndicator';
import { colors } from '../utils/colors';
import { shallowEqual } from '../utils/functions';
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
  Touchable: {
    height: 48,
  },
});

export class StatusPanel extends React.PureComponent<StatusPanelProps, StatusPanelState> {
  private scrollView: React.RefObject<ScrollView>;

  constructor(props: StatusPanelProps) {
    super(props);
    this.scrollView = React.createRef();
    this.state = { scrollViewWidth: Dimensions.get('window').width, selectedPage: 0 };
    this.onLayout = this.onLayout.bind(this);
    this.onMomentumScrollEnd = this.onMomentumScrollEnd.bind(this);
  }

  componentDidUpdate(prevProps: StatusPanelProps, prevState: StatusPanelState) {
    const sv = this.scrollView.current;
    if (this.props.pages.length !== prevProps.pages.length && sv) {
      let selectedPage: number;
      if (this.props.pages.length > prevProps.pages.length) {
        selectedPage = this.props.pages.length - 1;
      } else {
        const prevSelectedPage = prevProps.pages[prevState.selectedPage];
        if (shallowEqual(prevSelectedPage, this.props.pages[this.state.selectedPage])) {
          // no need to change page then
          return;
        }
        // a page with a lower index than selectedPage disappeared, shift left
        selectedPage = this.state.selectedPage - 1;
      }
      requestAnimationFrame(() => {
        sv.scrollTo({ x: this.state.scrollViewWidth * selectedPage });
        this.setState({ selectedPage });
        if (this.props.onPageChange) {
          this.props.onPageChange(selectedPage);
        }
      });
    }
  }

  onLayout(e: LayoutChangeEvent) {
    const scrollViewWidth = e.nativeEvent.layout.width;
    this.setState({ scrollViewWidth });
  }

  onMomentumScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const selectedPage = Math.ceil(e.nativeEvent.contentOffset.x / this.state.scrollViewWidth);
    this.setState({ selectedPage });
    if (this.props.onPageChange) {
      this.props.onPageChange(selectedPage);
    }
  }

  render() {
    return (
      <View style={styles.Wrapper} elevation={2}>
        <View style={styles.Content}>
          <ScrollView
            ref={this.scrollView}
            onLayout={this.onLayout}
            snapToAlignment="end"
            snapToInterval={this.state.scrollViewWidth}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={this.onMomentumScrollEnd}
            decelerationRate="fast"
            overScrollMode="never"
            disableIntervalMomentum
            horizontal
          >
            {this.props.pages.map((s, i) => (
              <Touchable key={i} style={styles.Touchable} onPress={this.props.onPress}>
                <Status key={`page-${i}`} {...s} minWidth={this.state.scrollViewWidth} />
              </Touchable>
            ))}
          </ScrollView>
        </View>
        <PageIndicator pages={this.props.pages.length} selectedPage={this.state.selectedPage} />
      </View>
    );
  }
}
