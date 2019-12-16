import React from 'react';
import { OnboardingSinglePage } from 'react-native-urbi-ui/components/OnboardingSinglePage';
import { clientIpsum } from '../utils/LoremIpsum';
import { OnboardingProps } from './Onboarding';
import { onIphoneX } from '../utils/const';

const page = {
  title: "Look at me, I'm a title spanning two lines. Spiffy, uh?",
  content: clientIpsum,
  image: require('../assets/onboarding2.png'),
};

class Onboarding extends React.PureComponent<OnboardingProps> {
  render() {
    return (
      <OnboardingSinglePage
        cta={{ label: 'done!', onPress: () => this.props.navigation.navigate('Components') }}
        page={page}
        onIphoneX={onIphoneX}
      />
    );
  }
}

export default Onboarding;
