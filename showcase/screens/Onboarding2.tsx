import React, { createRef } from 'react';
import { Onboarding as OnboardingComponent } from 'react-native-urbi-ui/components/Onboarding';
import { OnboardingProps } from './Onboarding';
import { onIphoneX } from '../utils/const';

const pages = [
  {
    title: "Look at me, I'm a title spanning two lines. Spiffy, uh?",
    content:
      "Oh hai! I'm a 2-page onboarding component. Try swiping to the next page, see what happens.",
    image: {
      uri: `https://en.urbi.co/assets/images/image06.png?v29718284834061&bust=${Math.random()}`,
      width: 1095,
      height: 578,
    },
  },
  {
    title: 'title label',
    content:
      'You did it! Great job at swiping that page!\nNow, try clicking on the CTA to see yet another example of an onboarding component.\nAlso, did you see how images up there take the whole width of your device, while dynamically being resized according to their height? Yes? Gr8!',
    image: require('../assets/onboarding.png'),
  },
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

type OnboardingScreenState = {
  index: number;
};

class Onboarding extends React.PureComponent<OnboardingProps, OnboardingScreenState> {
  private onboardingComponent = createRef<OnboardingComponent>();
  constructor(props: OnboardingProps) {
    super(props);
    this.state = { index: 0 };
    this.onboardingComponent = createRef();
  }

  next() {
    const { index } = this.state;
    const endReached = index === pages.length - 1;
    if (endReached) {
      this.props.navigation.navigate('Onboarding (single page)');
    } else {
      const newIndex = index + 1;
      this.setState({ index: newIndex });
      this.onboardingComponent?.current?.scrollToPage(newIndex);
    }
  }

  updateIndex(index: number) {
    this.setState({ index });
  }

  render() {
    const { index } = this.state;
    const endReached = index === pages.length - 1;
    return (
      <OnboardingComponent
        ref={this.onboardingComponent}
        cta={{
          label: endReached ? 'close' : 'check next',
          onPress: () => this.next(),
        }}
        pages={pages}
        onIphoneX={onIphoneX}
        updateParentIndex={(index: number) => this.updateIndex(index)}
      />
    );
  }
}

export default Onboarding;
