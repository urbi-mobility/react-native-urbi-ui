import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Chip } from 'react-native-urbi-ui/molecules/Chip';
import { renderComponent } from '../utils/ComponentPreview';

class Chips extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent('Chip', <Chip label="soon" bgState="default" />)}
        {renderComponent('Chip (active)', <Chip label="active now" bgState="success" />)}
        {renderComponent('Chip (active)', <Chip label="today" bgState="success" />)}
        {renderComponent('Chip (expired)', <Chip label="expired" bgState="error" />)}
      </ScrollView>
    );
  }
}

export default Chips;
