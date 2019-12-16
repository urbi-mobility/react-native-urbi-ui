import React from 'react';
import { Onboarding as OnboardingComponent } from 'react-native-urbi-ui/components/Onboarding';
import { NavigationStackProp } from 'react-navigation-stack';
import { onIphoneX } from '../utils/const';

const pages = [
  {
    title: 'title label',
    content:
      "Hello, I'm a single onboarding page. There shouldn't be a whole lot of text here. Click on the CTA to check other cases",
    image: require('../assets/onboarding.png'),
  },
];

export type OnboardingProps = {
  navigation: NavigationStackProp;
};

class Onboarding extends React.PureComponent<OnboardingProps> {
  render() {
    return (
      <OnboardingComponent
        cta={{
          label: 'check next',
          onPress: () => this.props.navigation.navigate('Onboarding (2 screens)'),
        }}
        pages={pages}
        onIphoneX={onIphoneX}
      />
    );
  }
}

export default Onboarding;
