import React from 'react';
import {
  Dimensions,
  Image,
  ImageRequireSource,
  ImageStyle,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { IPHONE_X_HOME_AREA_HEIGHT } from 'src/utils/const';
import { bottomPanelStyles, BOTTOM_PANEL_HEIGHT } from '../components/FloatingButtonLayout';
import { ButtonRegular } from '../molecules/buttons/ButtonRegular';
import { ButtonStyle } from '../molecules/buttons/types';
import { PageIndicator } from '../molecules/PageIndicator';
import { colors } from '../utils/colors';
import { registeredTextStyle } from '../utils/textStyles';

export const onboardingStyles = {
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
  Wrapper: {
    flex: 1,
  },
  PageIndicator: {
    marginBottom: 12,
  },
});

export type CTA = {
  label: string;
  onPress: () => any;
  style?: ButtonStyle;
};

export type OnboardingPage = {
  title: string;
  content: string;
  image: ImageRequireSource;
};

type OnboardingProps = {
  cta?: CTA;
  pages: OnboardingPage[];
  onIphoneX: boolean;
  titleStyle?: TextStyle;
  contentStyle?: TextStyle;
  titleLowercase?: boolean;
};

type OnboardingState = {
  currentPageIndex: number;
  pageWidth: number;
};

export const renderOnboardingPage = (
  page: OnboardingPage,
  index: number,
  titleLowercase: boolean | undefined,
  maxWidth?: number
) => {
  const { width, height } = Image.resolveAssetSource(page.image);
  return (
    <View key={index} style={[styles.Wrapper, { width: maxWidth }]}>
      <View style={styles.ImageContainer}>
        <Image
          source={page.image}
          style={[styles.Image, { aspectRatio: width / height }]}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.Title} numberOfLines={2}>
        {titleLowercase ? page.title : page.title.toUpperCase()}
      </Text>
      <Text style={styles.Content}>{page.content}</Text>
    </View>
  );
};

export class Onboarding extends React.PureComponent<OnboardingProps, OnboardingState> {
  constructor(props: OnboardingProps) {
    super(props);
    this.state = { currentPageIndex: 0, pageWidth: Dimensions.get('window').width };
    this.onLayout = this.onLayout.bind(this);
    this.onScrollEnd = this.onScrollEnd.bind(this);
  }

  onLayout(e: LayoutChangeEvent) {
    this.setState({ pageWidth: e.nativeEvent.layout.width });
  }

  onScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const offset = e.nativeEvent.contentOffset.x;
    this.setState({ currentPageIndex: Math.floor(offset / this.state.pageWidth) });
  }

  render() {
    const { cta, onIphoneX, pages, titleLowercase } = this.props;
    const { currentPageIndex, pageWidth } = this.state;
    const currentPage = pages[currentPageIndex];

    return (
      <View style={styles.Wrapper}>
        {pages.length > 1 ? (
          <ScrollView
            style={styles.Wrapper}
            onLayout={this.onLayout}
            onMomentumScrollEnd={this.onScrollEnd}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={pageWidth}
            snapToAlignment="start"
            horizontal
          >
            {pages.map((p, i) => renderOnboardingPage(p, i, titleLowercase, pageWidth))}
          </ScrollView>
        ) : (
          renderOnboardingPage(currentPage, 0, titleLowercase)
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
