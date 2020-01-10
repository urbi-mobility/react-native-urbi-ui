import React, { ReactElement } from 'react';
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { ImageToggle, size as IMG_BUTTON_SIZE } from '../molecules/buttons/toggles/ImageToggle';
import { PageIndicator } from '../molecules/PageIndicator';
import { onIOS } from '../utils/const';

const MIN_ITEM_PADDING = 14;
const MIN_ITEM_WIDTH = IMG_BUTTON_SIZE + MIN_ITEM_PADDING;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    height: 72,
    minHeight: 72,
    paddingTop: 12,
  } as ViewStyle,
  ScrollViewWrapper: {
    height: 44,
    maxHeight: 44,
  } as ViewStyle,
  ScrollView: {
    flex: 1,
  } as ViewStyle,
  Filler: {
    flex: 1,
    height: IMG_BUTTON_SIZE,
  } as ViewStyle,
});

type IconGroupProps = {
  icons: Array<ReactElement<typeof ImageToggle>>;
  scrollViewWidth?: number;
};

type IconGroupState = {
  padding: number;
  pages: number;
  iconsPerPage: number;
  scrollViewWidth: number;
  selectedPage: number;
  offsets: number[];
};

export class IconGroup extends React.PureComponent<IconGroupProps, IconGroupState> {
  constructor(props: IconGroupProps) {
    super(props);
    this.state = {
      padding: MIN_ITEM_PADDING,
      pages: 1,
      iconsPerPage: 5,
      scrollViewWidth: 100,
      selectedPage: 0,
      offsets: [0],
    };
    if (props.scrollViewWidth) {
      this.state = { ...this.state, ...this.fitWidth(props.scrollViewWidth) };
    }
    this.onLayout = this.onLayout.bind(this);
    this.onScrollEnd = this.onScrollEnd.bind(this);
  }

  addFiller() {
    const { icons } = this.props;
    const { iconsPerPage, padding, scrollViewWidth } = this.state;
    const iconsInLastPage = icons.length % iconsPerPage;
    const filler =
      iconsInLastPage === 0
        ? padding
        : scrollViewWidth - iconsInLastPage * (IMG_BUTTON_SIZE + padding);
    return <View key="filler" style={[styles.Filler, { width: filler }]} />;
  }

  onLayout(e: LayoutChangeEvent) {
    const width = e.nativeEvent.layout.width;
    this.setState(this.fitWidth(width));
  }

  fitWidth(width: number) {
    // we want padding on both sides, so it's one more padding slot than icons
    const perPage = Math.floor((width - MIN_ITEM_PADDING) / MIN_ITEM_WIDTH);
    const extraPaddingSpace = width - MIN_ITEM_PADDING - perPage * MIN_ITEM_WIDTH;
    // divide this extra padding equally among buttons
    const padding = MIN_ITEM_PADDING + Math.ceil(extraPaddingSpace / perPage);
    const pages = Math.ceil(this.props.icons.length / perPage);
    const offsets = [] as number[];
    for (let i = 0; i < pages; i++) {
      offsets.push(i * perPage * (padding + IMG_BUTTON_SIZE));
    }
    return {
      iconsPerPage: perPage,
      scrollViewWidth: width,
      pages,
      offsets,
      padding,
    };
  }

  wrapButtons() {
    return this.props.icons.map((icon, i) => (
      <View key={`icon-${i}`} style={{ marginLeft: this.state.padding }}>
        {icon}
      </View>
    ));
  }

  onScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const offset = e.nativeEvent.contentOffset.x;
    const { offsets } = this.state;
    // these are always going to be tiny, no need for a binary search
    let lastSmaller = 0;
    for (let i = 1; i < offsets.length; i++) {
      if (offset < offsets[i]) {
        break;
      }
      lastSmaller = i;
    }
    this.setState({
      selectedPage: lastSmaller,
    });
  }

  render() {
    return (
      <View style={styles.Wrapper}>
        <View style={styles.ScrollViewWrapper}>
          <ScrollView
            style={styles.ScrollView}
            onLayout={this.props.scrollViewWidth ? undefined : this.onLayout}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={this.onScrollEnd}
            snapToOffsets={this.state.offsets}
            decelerationRate={0}
            overScrollMode={onIOS ? undefined : 'never'}
            horizontal
          >
            {this.wrapButtons()}
            {this.addFiller()}
          </ScrollView>
        </View>
        <PageIndicator pages={this.state.pages} selectedPage={this.state.selectedPage} />
      </View>
    );
  }
}
