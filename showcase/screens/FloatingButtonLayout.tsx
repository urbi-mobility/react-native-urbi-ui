import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {
  BOTTOM_PANEL_HEIGHT,
  FloatingButtonLayout as FloatingButtonLayoutComp,
} from 'react-native-urbi-ui/components/FloatingButtonLayout';
import { ButtonRegular } from 'react-native-urbi-ui/molecules/buttons/ButtonRegular';
import { registeredTextStyle } from 'react-native-urbi-ui/utils/textStyles';
import { onButtonPress } from '../utils/ComponentPreview';
import { longLegal2Paragraphs } from '../utils/LoremIpsum';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  ScrollView: {
    paddingBottom: BOTTOM_PANEL_HEIGHT,
  },
  Text: {
    ...registeredTextStyle('body'),
    textAlign: 'center',
  },
});

class FloatingButtonLayout extends React.PureComponent<any> {
  render() {
    return (
      <FloatingButtonLayoutComp
        button={<ButtonRegular buttonStyle="primary" onPress={onButtonPress} label="action" />}
        onIphoneX={Platform.OS === 'ios' && hasNotch()}
        fixedPosition
      >
        <ScrollView contentContainerStyle={styles.ScrollView}>
          <View style={styles.Wrapper}>
            <TextInput
              placeholder="click me to bring up the keyboard"
              style={styles.Text}
              editable
            ></TextInput>
            <Text style={styles.Text}>{longLegal2Paragraphs}</Text>
          </View>
        </ScrollView>
      </FloatingButtonLayoutComp>
    );
  }
}

export default FloatingButtonLayout;
