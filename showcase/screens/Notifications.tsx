import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ButtonRegular } from 'react-native-urbi-ui/molecules/buttons/ButtonRegular';
import { StickyNotification } from 'react-native-urbi-ui/components/notifications/StickyNotification';
import { TopNotifications } from 'react-native-urbi-ui/components/notifications/TopNotifications';
import { renderComponent } from '../utils/ComponentPreview';

type NotificationsState = {
  showStickyNotification: boolean;
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
});

class Notifications extends React.PureComponent<any, NotificationsState> {
  private notifications: React.RefObject<TopNotifications>;

  constructor(props: any) {
    super(props);
    this.notifications = React.createRef();
    this.state = { showStickyNotification: false };
    this.showTopNotification = this.showTopNotification.bind(this);
    this.showStickyNotification = this.showStickyNotification.bind(this);
  }

  showTopNotification() {
    this.notifications.current &&
      this.notifications.current.push({
        mainMessage: "I'm a notification (push again!)",
        secondaryMessage: `I was pushed at ${new Date().toISOString()}`,
      });
  }

  showStickyNotification() {
    this.setState({ showStickyNotification: true });
  }

  render() {
    return (
      <View style={styles.Wrapper}>
        <TopNotifications ref={this.notifications} />
        <StickyNotification
          show={this.state.showStickyNotification}
          mainMessage="hi, I'm the main message!"
          secondaryMessage="and I'm the secondary message 🤷"
        />
        <ScrollView>
          {renderComponent(
            'StickyNotification',
            <ButtonRegular
              buttonStyle="primary"
              label="show notification"
              onPress={this.showStickyNotification}
            />
          )}
          {renderComponent(
            'TopNotification',
            <ButtonRegular
              buttonStyle="primary"
              label="show notification"
              onPress={this.showTopNotification}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}

export default Notifications;
