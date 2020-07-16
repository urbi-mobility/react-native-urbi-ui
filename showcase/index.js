import { AppRegistry } from 'react-native';

// this is how you override colors throughout the app
// import { overrideColors } from 'react-native-urbi-ui/utils/colors';
// overrideColors({ brand: 'red', primary: 'tomato' });

AppRegistry.registerComponent('RNUrbiUI', () => require('./App').default);
