import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ListItemRadio from 'react-native-urbi-ui/components/ListItemRadio';
import RadioButtonsComp from 'react-native-urbi-ui/components/RadioButtons';
import { onPressNoOp, renderComponent } from '../utils/ComponentPreview';

class RadioButtons extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'RadioButtons',
          <RadioButtonsComp
            buttons={[
              { label: 'Female' },
              { label: 'Male' },
              { label: 'Non binary / Third Gender' },
            ]}
          />
        )}
        {renderComponent(
          'RadioButtons (double)',
          <RadioButtonsComp
            buttons={[
              { label: 'Female', subtitle: '🤷‍♀️' },
              { label: 'Male', subtitle: '🤷‍♂️' },
              { label: 'Non binary / Third Gender', subtitle: `¯\\_(ツ)_/¯` },
            ]}
          />
        )}
        {renderComponent(
          'ListItemRadio (double)',
          <ListItemRadio
            id="fake-radio"
            onPress={onPressNoOp}
            label="Try me!"
            subtitle="I won't work! I'm a radio button after all 🙈"
            selected
          />
        )}
        {renderComponent(
          'ListItemRadio (double chocolate)',
          <ListItemRadio
            id="fake-radio"
            onPress={onPressNoOp}
            label="Hey there! 👋 I'm a super long ListItemRadio that spans 2 lines!"
            subtitle={
              'Supercalifragilisticexpialidocious, even though the sound of it ' +
              "is something quite atrocious, if you say it loud enough, you'll " +
              'always sound precocious'
            }
            selected
          />
        )}
      </ScrollView>
    );
  }
}

export default RadioButtons;
