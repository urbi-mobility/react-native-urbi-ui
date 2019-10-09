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
import ImageToggle, { size as imageButtonSize } from '../molecules/buttons/toggles/ImageToggle';
import { PageIndicator } from '../molecules/PageIndicator';
import { onIOS } from '../utils/const';

const minItemPadding = 12;
const minItemWidth = imageButtonSize + minItemPadding;

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
    height: imageButtonSize,
  } as ViewStyle,
});

type IconGroupProps = {
  icons: Array<ReactElement<typeof ImageToggle>>;
};

type IconGroupState = {
  padding: number;
  pages: number;
  iconsPerPage: number;
  scrollViewWidth: number;
  selectedPage: number;
};

class IconGroup extends React.PureComponent<IconGroupProps, IconGroupState> {
  constructor(props: IconGroupProps) {
    super(props);
    this.state = {
      padding: minItemPadding,
      pages: 1,
      iconsPerPage: 5,
      scrollViewWidth: 100,
      selectedPage: 0,
    };
    this.onLayout = this.onLayout.bind(this);
    this.onScrollEnd = this.onScrollEnd.bind(this);
  }

  addFiller() {
    const { icons } = this.props;
    const { padding, iconsPerPage } = this.state;
    if (icons.length % iconsPerPage === 0) return null;
    const filler = [];
    for (let i = iconsPerPage - (icons.length % iconsPerPage); i > 1; i--) {
      filler.push(
        <View key={`filler-${i}`} style={[styles.Filler, { width: imageButtonSize + padding }]} />
      );
    }
    filler.push(<View key="filler-last" style={[styles.Filler, { width: imageButtonSize }]} />);
    return filler;
  }

  onLayout(e: LayoutChangeEvent) {
    const width = e.nativeEvent.layout.width;
    // the rightmost item needs no marginRight, try to be optimistic
    let perPage = Math.ceil(width / minItemWidth);
    // ...but check that they still fit
    if (perPage * minItemWidth - minItemPadding > width) {
      perPage = Math.floor(width / minItemWidth);
    }
    const paddingSpace = width - (perPage * minItemWidth - minItemPadding);
    const padding = minItemPadding + paddingSpace / perPage;
    this.setState({
      iconsPerPage: perPage,
      pages: Math.ceil(this.props.icons.length / perPage),
      scrollViewWidth: width,
      padding,
    });
  }

  wrapButtons() {
    return this.props.icons.map((icon, i) => (
      <View key={`icon-${i}`} style={{ marginRight: this.state.padding }}>
        {icon}
      </View>
    ));
  }

  onScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    this.setState({
      selectedPage: Math.floor(e.nativeEvent.contentOffset.x / this.state.scrollViewWidth),
    });
  }

  render() {
    const snap = this.state.pages < 3;
    return (
      <View style={styles.Wrapper}>
        <View style={styles.ScrollViewWrapper}>
          <ScrollView
            style={styles.ScrollView}
            onLayout={this.onLayout}
            snapToAlignment={snap ? 'end' : undefined}
            snapToInterval={snap ? this.state.scrollViewWidth + this.state.padding : undefined}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={this.onScrollEnd}
            overScrollMode={onIOS ? undefined : 'never'}
            horizontal
            pagingEnabled
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

export default IconGroup;
