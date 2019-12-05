import React from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { bottomPanelStyles } from '../components/FloatingButtonLayout';
import { ButtonRegular } from '../molecules/buttons/ButtonRegular';
import { colors } from '../utils/colors';
import { CTA, OnboardingPage, renderOnboardingPage } from './Onboarding';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  } as ViewStyle,
  ScrollView: {
    paddingBottom: bottomPanelStyles.BottomPanel.height,
  },
});

type OnboardingSinglePageProps = {
  page: OnboardingPage;
  cta: CTA;
  titleStyle?: TextStyle;
  contentStyle?: TextStyle;
};

const OnboardingSinglePageUnmemoized = (props: OnboardingSinglePageProps) => (
  <View style={styles.Wrapper}>
    <ScrollView style={styles.Wrapper} contentContainerStyle={styles.ScrollView}>
      {renderOnboardingPage(props.page, 0)}
    </ScrollView>
    <View style={bottomPanelStyles.FloatingBottomPanel}>
      <LinearGradient
        colors={[colors.zeroAlphaUlisse, colors.ulisse]}
        style={bottomPanelStyles.BottomPanel}
      >
        <ButtonRegular buttonStyle="primary" label={props.cta.label} onPress={props.cta.onPress} />
      </LinearGradient>
    </View>
  </View>
);

export default React.memo(OnboardingSinglePageUnmemoized);
