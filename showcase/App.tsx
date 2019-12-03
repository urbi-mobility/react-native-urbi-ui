import React from 'react';
import { StyleSheet, Text as TextView, View, YellowBox } from 'react-native';
import { colors } from 'react-native-urbi-ui/utils/colors';
import { createAppContainer, NavigationRouteConfig } from 'react-navigation';
import { createStackNavigator, NavigationStackScreenProps } from 'react-navigation-stack';
import ButtonList, { toButtonEntries } from './components/ButtonList';
import packageJson from './package.json';
import BannerSlider from './screens/BannerSlider';
import ButtonGroup from './screens/ButtonGroup';
import Buttons from './screens/Buttons';
import CardHeaders from './screens/CardHeaders';
import Cards from './screens/Cards';
import Checkboxes from './screens/Checkboxes';
import Chips from './screens/Chips';
import Colors from './screens/Colors';
import ColumnLayouts from './screens/ColumnLayouts';
import Components from './screens/Components';
import Content from './screens/Content';
import DoubleChoices from './screens/DoubleChoices';
import FormScreen from './screens/FormScreen';
import IconButtons from './screens/IconButtons';
import IconGroups from './screens/IconGroups';
import Images from './screens/Images';
import ListButtons from './screens/ListButtons';
import ListItems from './screens/ListItems';
import Modal from './screens/Modal';
import Molecules from './screens/Molecules';
import Notes from './screens/Notes';
import Notifications from './screens/Notifications';
import PaymentPanel from './screens/PaymentPanel';
import ProfileHeaders from './screens/ProfileHeaders';
import PurchasePanel from './screens/PurchasePanel';
import RadioButtons from './screens/RadioButtons';
import SelectionHeaders from './screens/SelectionHeaders';
import Status from './screens/Status';
import Steppers from './screens/Steppers';
import Text from './screens/Text';
import Toggles from './screens/Toggles';
import Typography from './screens/Typography';

// see https://github.com/kmagiera/react-native-gesture-handler/pull/657
YellowBox.ignoreWarnings(['`-[RCTRootView cancelTouches]`']);

class App extends React.PureComponent<NavigationStackScreenProps> {
  constructor(props: NavigationStackScreenProps) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(screen: string) {
    return () => this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <ButtonList navigation={this.props.navigation} entries={buttonEntries} />
        </View>
        <View style={styles.bottomText}>
          <TextView style={{ textAlign: 'center' }}>
            react-native-urbi-ui v{packageJson.dependencies['react-native-urbi-ui']}
          </TextView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  buttons: {
    flex: 1,
  },
  bottomText: {
    justifyContent: 'center',
    marginBottom: 30,
  },
});

const menuEntries = {
  BannerSlider: BannerSlider,
  ButtonGroup: ButtonGroup,
  Buttons: Buttons,
  Cards: Cards,
  CardHeaders: CardHeaders,
  Checkboxes: Checkboxes,
  Chips: Chips,
  Colors: Colors,
  ColumnLayouts: ColumnLayouts,
  Components: Components,
  Content: Content,
  DoubleChoices: DoubleChoices,
  ['Form components']: FormScreen,
  IconButtons: IconButtons,
  PurchasePanel: PurchasePanel,
  IconGroups: IconGroups,
  Images: Images,
  ListButtons: ListButtons,
  ListItems: ListItems,
  Modal: Modal,
  PaymentPanel: PaymentPanel,
  Molecules: Molecules,
  Notes: Notes,
  Notifications: Notifications,
  ProfileHeaders: ProfileHeaders,
  RadioButtons: RadioButtons,
  SelectionHeaders: SelectionHeaders,
  Status: Status,
  Steppers: Steppers,
  Text: Text,
  Toggles: Toggles,
  Typography: Typography,
};

const buttonEntries = toButtonEntries(['Typography', 'Colors', 'Components', 'Molecules']);

const screens: { [routeName: string]: NavigationRouteConfig<any, any> } = {
  Home: {
    screen: App,
    navigationOptions: () => ({
      title: 'Urbi Design System Showcase',
    }),
  },
};

Object.entries(menuEntries).forEach(([name, screen]) => {
  screens[name] = { screen, navigationOptions: () => ({ title: name }) };
});

const Navigator = createStackNavigator(screens, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTintColor: colors.ulisse,
    headerStyle: { backgroundColor: colors.brand },
  },
});

export default createAppContainer(Navigator);
