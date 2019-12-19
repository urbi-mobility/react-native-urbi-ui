import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusPanel } from 'react-native-urbi-ui/components/StatusPanel';
import { Status as StatusComp } from 'react-native-urbi-ui/molecules/content/Status';
import { onButtonPress, renderComponent } from '../utils/ComponentPreview';
import { StyleSheet, View } from 'react-native';
import { colors } from 'react-native-urbi-ui/utils/colors';
import { ButtonRegular } from 'react-native-urbi-ui/molecules/buttons/ButtonRegular';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
  AbsolutePositioned: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: colors.secondary,
    zIndex: 666,
  },
});

type StatusState = {
  showAbsolute: boolean;
};

class Status extends React.PureComponent<any, StatusState> {
  constructor(props: any) {
    super(props);
    this.state = { showAbsolute: false };
    this.showAbsolute = this.showAbsolute.bind(this);
    this.onAbsoluteClick = this.onAbsoluteClick.bind(this);
  }

  showAbsolute() {
    this.setState({ showAbsolute: true });
  }

  onAbsoluteClick() {
    this.setState({ showAbsolute: false });
  }

  render() {
    return (
      <View style={styles.Wrapper}>
        {this.state.showAbsolute && (
          <View style={styles.AbsolutePositioned}>
            <StatusPanel
              pages={[
                { title: 'First page', content: 'Click here to hide this!' },
                { title: 'Second page', content: 'No but really! Click!' },
                { title: 'Third page', content: 'Try it! Do it!' },
              ]}
              onPress={this.onAbsoluteClick}
            />
          </View>
        )}
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
          {renderComponent(
            'Status (absolute layout)',
            <ButtonRegular
              buttonStyle="primary"
              label="show Status panel"
              onPress={this.showAbsolute}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}

export default Status;
