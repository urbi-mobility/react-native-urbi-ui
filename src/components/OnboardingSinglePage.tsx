import React from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { IPHONE_X_HOME_AREA_HEIGHT } from 'src/utils/const';
import { bottomPanelStyles, BOTTOM_PANEL_HEIGHT } from '../components/FloatingButtonLayout';
import { ButtonRegular } from '../molecules/buttons/ButtonRegular';
import { colors } from '../utils/colors';
import { CTA, OnboardingPage, renderOnboardingPage } from './Onboarding';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  } as ViewStyle,
  ScrollView: {
    paddingBottom: bottomPanelStyles.BottomPanel.height,
  },
});

type OnboardingSinglePageProps = {
  cta?: CTA;
  page: OnboardingPage;
  onIphoneX: boolean;
  titleStyle?: TextStyle;
  contentStyle?: TextStyle;
  titleLowercase?: boolean;
};

const OnboardingSingleUnmemoized = (props: OnboardingSinglePageProps) => (
  <View style={styles.Wrapper}>
    <ScrollView style={styles.Wrapper} contentContainerStyle={styles.ScrollView}>
      {renderOnboardingPage(props.page, 0, props.titleLowercase)}
    </ScrollView>
    {props.cta && (
      <View style={bottomPanelStyles.FloatingBottomPanel}>
        <LinearGradient
          colors={[colors.zeroAlphaUlisse, colors.ulisse]}
          style={
            props.onIphoneX
              ? [
                  bottomPanelStyles.BottomPanel,
                  { height: BOTTOM_PANEL_HEIGHT + IPHONE_X_HOME_AREA_HEIGHT },
                ]
              : bottomPanelStyles.BottomPanel
          }
        >
          <ButtonRegular
            buttonStyle={props.cta.style ?? 'primary'}
            label={props.cta.label}
            onPress={props.cta.onPress}
          />
        </LinearGradient>
      </View>
    )}
  </View>
);

export const OnboardingSinglePage = React.memo(OnboardingSingleUnmemoized);
