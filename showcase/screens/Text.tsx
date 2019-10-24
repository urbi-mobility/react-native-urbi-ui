import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { CenteredLabel } from 'react-native-urbi-ui/molecules/text/CenteredLabel';
import { colors } from 'react-native-urbi-ui/utils/colors';
import { renderComponent } from '../utils/ComponentPreview';

class Text extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent('CenteredLabel', <CenteredLabel text="ONE LINE" />)}
        {renderComponent(
          'CenteredLabel (success)',
          <CenteredLabel text="ONE LINE" color={colors.success} />
        )}
        {renderComponent(
          'CenteredLabel (long)',
          <CenteredLabel text="One very long line that should be centered and cropped" />
        )}
      </ScrollView>
    );
  }
}

export default Text;
