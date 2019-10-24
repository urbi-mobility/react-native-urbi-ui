import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusPanel } from 'react-native-urbi-ui/components/StatusPanel';
import { Status as StatusComp } from 'react-native-urbi-ui/molecules/content/Status';
import { onButtonPress, renderComponent } from '../utils/ComponentPreview';

class Status extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'Status (molecule)',
          <StatusComp title="Miles reserved at 22:55" content="20 mins left" />
        )}
        {renderComponent(
          'StatusPanel',
          <StatusPanel
            pages={[
              { title: 'First page', content: 'Swipe to see more!' },
              { title: 'Second page', content: 'And more!' },
              { title: 'Third page', content: 'Swipe no more, brother' },
            ]}
            onPress={onButtonPress}
          />
        )}
        {renderComponent(
          'StatusPanel (single page)',
          <StatusPanel
            pages={[{ title: 'First page', content: 'I feel lonely :(' }]}
            onPress={onButtonPress}
          />
        )}
      </ScrollView>
    );
  }
}

export default Status;
