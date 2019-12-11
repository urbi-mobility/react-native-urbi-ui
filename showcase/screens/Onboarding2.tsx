import React from 'react';
import OnboardingComponent from 'react-native-urbi-ui/components/Onboarding';
import { OnboardingProps, onIphoneX } from './Onboarding';

const pages = [
  {
    title: "Look at me, I'm a title spanning two lines. Spiffy, uh?",
    content:
      "Oh hai! I'm a 2-page onboarding component. Try swiping to the next page, see what happens.",
    image: require('../assets/onboarding2.png'),
  },
  {
    title: 'title label',
    content:
      'You did it! Great job at swiping that page!\nNow, try clicking on the CTA to see yet another example of an onboarding component.\nAlso, did you see how images up there take the whole width of your device, while dynamically being resized according to their height? Yes? Gr8!',
    image: require('../assets/onboarding.png'),
  },
];

class Onboarding extends React.PureComponent<OnboardingProps> {
  render() {
    return (
      <OnboardingComponent
        cta={{
          label: 'check last',
          onPress: () => this.props.navigation.navigate('Onboarding (single page)'),
        }}
        pages={pages}
        onIphoneX={onIphoneX}
      />
    );
  }
}

export default Onboarding;
