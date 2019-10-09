import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { onButtonPress, renderComponent } from '../utils/ComponentPreview';
import DoubleChoice from 'react-native-urbi-ui/components/DoubleChoice';
import ButtonCompact from 'react-native-urbi-ui/molecules/buttons/ButtonCompact';

class DoubleChoices extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'DoubleChoice',
          <DoubleChoice
            left={<ButtonCompact buttonStyle="primary" label="Action" onPress={onButtonPress} />}
            right={<ButtonCompact buttonStyle="default" label="Action" onPress={onButtonPress} />}
          />
        )}
        {renderComponent(
          'DoubleChoice (inverse)',
          <DoubleChoice
            left={<ButtonCompact buttonStyle="default" label="Action" onPress={onButtonPress} />}
            right={<ButtonCompact buttonStyle="primary" label="Action" onPress={onButtonPress} />}
          />
        )}
        {renderComponent(
          'DoubleChoice (default and secondary)',
          <DoubleChoice
            left={<ButtonCompact buttonStyle="default" label="Action" onPress={onButtonPress} />}
            right={<ButtonCompact buttonStyle="secondary" label="Action" onPress={onButtonPress} />}
          />
        )}
        {renderComponent(
          'DoubleChoice (primary and secondary)',
          <DoubleChoice
            left={<ButtonCompact buttonStyle="secondary" label="Action" onPress={onButtonPress} />}
            right={<ButtonCompact buttonStyle="primary" label="Action" onPress={onButtonPress} />}
          />
        )}
        {renderComponent(
          'DoubleChoice (primary only)',
          <DoubleChoice
            left={<ButtonCompact buttonStyle="primary" label="Action" onPress={onButtonPress} />}
          />
        )}
        {renderComponent(
          'DoubleChoice (default only)',
          <DoubleChoice
            right={<ButtonCompact buttonStyle="default" label="Action" onPress={onButtonPress} />}
          />
        )}
      </ScrollView>
    );
  }
}

export default DoubleChoices;
