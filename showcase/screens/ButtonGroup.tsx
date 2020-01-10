import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { ButtonGroup as ButtonGroupComp } from 'react-native-urbi-ui/components/ButtonGroup';
import { onPress } from 'react-native-urbi-ui/utils/functions';
import { onButtonPress, renderComponent } from '../utils/ComponentPreview';

const onAreaPress = onPress(
  'Cliiiickity cliiiick',
  'iOS detected!',
  'Thiiiis iiiis aaaa toooaaaast ooon Aaandrooooiiiid'
);

const buttonGroupButtons = [
  { label: 'areas', active: false, onPress: onButtonPress, onLongPress: onAreaPress },
  { label: 'radar', active: false, onPress: onButtonPress },
  { label: 'filters', active: true, onPress: onButtonPress },
];

class ButtonGroup extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'ButtonGroup (long press areas!)',
          <ButtonGroupComp buttons={buttonGroupButtons} />
        )}
      </ScrollView>
    );
  }
}

export default ButtonGroup;
