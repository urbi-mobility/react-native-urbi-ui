import React, { createRef } from 'react';
import { Onboarding as OnboardingComponent } from 'react-native-urbi-ui/components/Onboarding';
import { OnboardingProps } from './Onboarding';
import { onIphoneX } from '../utils/const';

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
    this.onboardingComponent?.current?.scrollToPage(index + 2);
    this.setState({ index: index + 1 });
    if (endReached) this.props.navigation.navigate('Onboarding (single page)');
  }

  updateIndex(index: number) {
    this.setState({ index });
    console.log('this.state.index', this.state.index);
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
