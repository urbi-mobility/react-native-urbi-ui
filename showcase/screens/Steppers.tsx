import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { placeholder, renderComponent } from '../utils/ComponentPreview';
import ListItemStepper from 'react-native-urbi-ui/components/ListItemStepper';
import Stepper from 'react-native-urbi-ui/molecules/Stepper';
import IconAndLabel from 'react-native-urbi-ui/molecules/content/IconAndLabel';
import ListItem from 'react-native-urbi-ui/components/ListItem';
import ListItemLarge from 'react-native-urbi-ui/components/ListItemLarge';

type SteppersState = {
  stepper1Value: number;
  stepper2Value: number;
  stepper3Value: number;
  stepper4Value: number;
};

class Steppers extends React.PureComponent<any, SteppersState> {
  constructor(props: any) {
    super(props);
    this.state = {
      stepper1Value: 1,
      stepper2Value: 3,
      stepper3Value: 3,
      stepper4Value: 0,
    };
    this.onStepperValueChange = this.onStepperValueChange.bind(this);
  }

  onStepperValueChange(whichStepper: 1 | 2 | 3 | 4) {
    // use this silly syntax to make the TS compiler happy
    // see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26635#issuecomment-400260278
    return (newValue: number) =>
      this.setState((prevState) => ({ ...prevState, [`stepper${whichStepper}Value`]: newValue }));
  }

  render() {
    return (
      <ScrollView>
        {renderComponent(
          'ListItemStepper (min=0, def=1, max=+inf)',
          <ListItemStepper
            content={<ListItem content={<IconAndLabel image={placeholder} label="Cars" />} />}
            stepper={
              <Stepper
                defaultValue={1}
                value={this.state.stepper1Value}
                min={0}
                onValueChange={this.onStepperValueChange(1)}
              />
            }
          />
        )}
        {renderComponent(
          'ListItemStepper (w/Large, min=1, def=3, max=4)',
          <ListItemStepper
            content={<ListItemLarge content={<IconAndLabel image={placeholder} label="Cars" />} />}
            stepper={
              <Stepper
                defaultValue={3}
                value={this.state.stepper2Value}
                min={1}
                max={4}
                onValueChange={this.onStepperValueChange(2)}
              />
            }
          />
        )}
        {renderComponent(
          'Stepper (min=1, default=3, max=5)',
          <Stepper
            defaultValue={3}
            value={this.state.stepper3Value}
            min={1}
            max={5}
            onValueChange={this.onStepperValueChange(3)}
          />
        )}
        {renderComponent(
          'Stepper (min=0, max=unbounded)',
          <Stepper
            defaultValue={0}
            value={this.state.stepper4Value}
            min={0}
            onValueChange={this.onStepperValueChange(4)}
          />
        )}
      </ScrollView>
    );
  }
}

export default Steppers;
