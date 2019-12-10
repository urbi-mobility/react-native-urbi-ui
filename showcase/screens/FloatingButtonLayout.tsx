import React from 'react';
import { StyleSheet, Text, View, Platform, ViewStyle } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {
  BOTTOM_PANEL_HEIGHT,
  FloatingButtonLayout as FloatingButtonLayoutComp,
  IPHONE_X_SAFE_AREA_HEIGHT,
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
    marginBottom: 24,
  },
});

class FloatingButtonLayout extends React.PureComponent<any> {
  private onIphoneX: boolean;
  private fixed: boolean;
  private scrollViewStyle: ViewStyle | ViewStyle[];

  constructor(props: any) {
    super(props);
    this.onIphoneX = Platform.OS === 'ios' && hasNotch();
    this.fixed = Platform.OS === 'android';
    this.scrollViewStyle = this.onIphoneX
      ? [styles.ScrollView, { paddingBottom: BOTTOM_PANEL_HEIGHT + IPHONE_X_SAFE_AREA_HEIGHT }]
      : styles.ScrollView;
  }

  render() {
    return (
      <FloatingButtonLayoutComp
        button={<ButtonRegular buttonStyle="primary" onPress={onButtonPress} label="action" />}
        onIphoneX={this.onIphoneX}
        fixedPosition={this.fixed}
      >
        <ScrollView
          contentContainerStyle={this.scrollViewStyle}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="always"
        >
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
