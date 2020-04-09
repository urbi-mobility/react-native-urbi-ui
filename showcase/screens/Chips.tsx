import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Chip } from 'react-native-urbi-ui/molecules/Chip';
import { ChipLarge } from 'react-native-urbi-ui/molecules/ChipLarge';
import { colors } from 'react-native-urbi-ui/utils/colors';
import { renderComponent } from '../utils/ComponentPreview';
import { showAlert } from 'react-native-urbi-ui/utils/functions';

const on166Press = () => showAlert('die beste Linie 🤟');

class Chips extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent('Chip', <Chip label="soon" bgState="default" />)}
        {renderComponent('Chip (active)', <Chip label="active now" bgState="success" />)}
        {renderComponent('Chip (active)', <Chip label="today" bgState="success" />)}
        {renderComponent('Chip (expired)', <Chip label="expired" bgState="error" />)}
        {renderComponent('ChipLarge', <ChipLarge label="U2" icon="subway-small" color="#f42c4f" />)}
        {renderComponent(
          'ChipLarge',
          <ChipLarge label="UX" icon="subway-small" color={colors.subway} />
        )}
        {renderComponent('ChipLarge', <ChipLarge label="M3" icon="subway-small" color="#feff01" />)}
        {renderComponent(
          'ChipLarge',
          <ChipLarge label="F1" icon="ferry-small" color={colors.ferry} />
        )}
        {renderComponent(
          'ChipLarge',
          <ChipLarge label="S1" icon="train-small" color={colors.train} />
        )}
        {renderComponent(
          'ChipLarge',
          <ChipLarge label="166" icon="bus-small" color={colors.bus} onPress={on166Press} />
        )}
        {renderComponent(
          'ChipLarge',
          <ChipLarge label="M10" icon="tram-small" color={colors.tram} />
        )}
      </ScrollView>
    );
  }
}

export default Chips;
