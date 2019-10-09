import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonGroupComp from 'react-native-urbi-ui/components/ButtonGroup';
import { onButtonPress, renderComponent } from '../utils/ComponentPreview';

const buttonGroupButtons = [
  { label: 'areas', active: false, onPress: onButtonPress },
  { label: 'radar', active: false, onPress: onButtonPress },
  { label: 'filters', active: true, onPress: onButtonPress },
];

class ButtonGroup extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent('ButtonGroup', <ButtonGroupComp buttons={buttonGroupButtons} />)}
      </ScrollView>
    );
  }
}

export default ButtonGroup;
