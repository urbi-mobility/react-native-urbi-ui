import React, { createRef } from 'react';
import {
  Dimensions,
  Image,
  ImageRequireSource,
  ImageStyle,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { bottomPanelStyles, BOTTOM_PANEL_HEIGHT } from 'src/components/FloatingButtonLayout';
import { ButtonRegular } from 'src/molecules/buttons/ButtonRegular';
import { ButtonStyle } from 'src/molecules/buttons/types';
import { PageIndicator } from 'src/molecules/PageIndicator';
import { colors } from 'src/utils/colors';
import { IPHONE_X_HOME_AREA_HEIGHT } from 'src/utils/const';
import { registeredTextStyle } from 'src/utils/textStyles';
import { OnboardingPageComponent } from 'src/components/OnboardingPageComponent';

export const onboardingStyles = {
  Wrapper: {
    flex: 1,
  } as ViewStyle,
  ImageContainer: {
    flexDirection: 'row',
    maxWidth: Dimensions.get('window').width,
  } as ViewStyle,
  Image: {
    marginBottom: 24,
    flex: 1,
    width: null,
    height: null,
  } as ImageStyle,
  Title: {
    ...registeredTextStyle('button'),
    marginHorizontal: 24,
    marginBottom: 16,
    textAlign: 'center',
  } as TextStyle,
  Content: {
    ...registeredTextStyle('body'),
    marginHorizontal: 24,
    textAlign: 'center',
  } as TextStyle,
};

const styles = StyleSheet.create({
  ...onboardingStyles,
  PageIndicator: {
    marginBottom: 12,
  },
});

export type CTA = {
  label: string;
  onPress: () => any;
  style?: ButtonStyle;
};

type RemoteImage = {
  uri: string;
  width: number;
  height: number;
};

export const isRemoteImage = (img: ImageRequireSource | RemoteImage): img is RemoteImage =>
  (img as any).uri !== undefined;

export type OnboardingPage = {
  title: string;
  content: string;
  image: ImageRequireSource | RemoteImage;
};

type OnboardingProps = {
  cta?: CTA;
  pages: OnboardingPage[];
  onIphoneX: boolean;
  titleStyle?: TextStyle;
  contentStyle?: TextStyle;
  titleLowercase?: boolean;
  updateParentIndex?: (index: number) => void;
};

type OnboardingState = {
  currentPageIndex: number;
  imageLoaded: boolean;
  pageWidth: number;
};

export class Onboarding extends React.PureComponent<OnboardingProps, OnboardingState> {
  private scrollViewRef = createRef<ScrollView>();
  constructor(props: OnboardingProps) {
    super(props);
    this.state = {
      currentPageIndex: 0,
      pageWidth: Dimensions.get('window').width,
      imageLoaded: false,
    };
    this.onLayout = this.onLayout.bind(this);
    this.onScrollEnd = this.onScrollEnd.bind(this);
    this.scrollViewRef = createRef();
  }

  onLayout(e: LayoutChangeEvent) {
    this.setState({ pageWidth: e.nativeEvent.layout.width });
  }

  onScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const offset = e.nativeEvent.contentOffset.x;
    const newPageIndex = Math.floor(offset / this.state.pageWidth);
    this.setState({ currentPageIndex: newPageIndex });
    this.props.updateParentIndex?.(newPageIndex);
  }

  scrollToPage(index: number) {
    const { pageWidth } = this.state;
    this.scrollViewRef.current.scrollTo({ x: index * pageWidth });
    this.setState({ currentPageIndex: index });
  }

  render() {
    const { cta, onIphoneX, pages, titleLowercase } = this.props;
    const { currentPageIndex, pageWidth } = this.state;
    const currentPage = pages[currentPageIndex];

    return (
      <View style={styles.Wrapper}>
        {pages.length > 1 ? (
          <ScrollView
            ref={this.scrollViewRef}
            style={styles.Wrapper}
            onLayout={this.onLayout}
            onMomentumScrollEnd={this.onScrollEnd}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={pageWidth}
            snapToAlignment="start"
            pagingEnabled
            horizontal
          >
            {pages.map((p, i) => (
              <OnboardingPageComponent
                key={i}
                page={p}
                index={i}
                titleLowercase={titleLowercase}
                maxWidth={pageWidth}
              />
            ))}
          </ScrollView>
        ) : (
          <OnboardingPageComponent page={currentPage} index={0} titleLowercase={titleLowercase} />
        )}
        <View style={bottomPanelStyles.FloatingBottomPanel}>
          {pages.length > 1 && (
            <View style={styles.PageIndicator}>
              <PageIndicator pages={pages.length} selectedPage={currentPageIndex} />
            </View>
          )}
          {cta && (
            <LinearGradient
              colors={[colors.zeroAlphaUlisse, colors.ulisse]}
              style={
                onIphoneX
                  ? [
                      bottomPanelStyles.BottomPanel,
                      { height: BOTTOM_PANEL_HEIGHT + IPHONE_X_HOME_AREA_HEIGHT },
                    ]
                  : bottomPanelStyles.BottomPanel
              }
            >
              <ButtonRegular
                buttonStyle={cta.style ?? 'primary'}
                label={cta.label}
                onPress={cta.onPress}
              />
            </LinearGradient>
          )}
        </View>
      </View>
    );
  }
}
