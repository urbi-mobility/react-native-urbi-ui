import React from 'react';
import { Platform, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {
  BOTTOM_PANEL_HEIGHT,
  FloatingButtonLayout as FloatingButtonLayoutComp,
} from 'react-native-urbi-ui/components/FloatingButtonLayout';
import { ButtonRegular } from 'react-native-urbi-ui/molecules/buttons/ButtonRegular';
import { IPHONE_X_HOME_AREA_HEIGHT } from 'react-native-urbi-ui/utils/const';
import { registeredTextStyle } from 'react-native-urbi-ui/utils/textStyles';
import { onButtonPress } from '../utils/ComponentPreview';
import { onIphoneX } from '../utils/const';
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
  private fixed: boolean;
  private scrollViewStyle: ViewStyle | ViewStyle[];

  constructor(props: any) {
    super(props);
    this.fixed = Platform.OS === 'android';
    this.scrollViewStyle = onIphoneX
      ? [styles.ScrollView, { paddingBottom: BOTTOM_PANEL_HEIGHT + IPHONE_X_HOME_AREA_HEIGHT }]
      : styles.ScrollView;
  }

  render() {
    return (
      <FloatingButtonLayoutComp
        button={<ButtonRegular buttonStyle="primary" onPress={onButtonPress} label="action" />}
        onIphoneX={onIphoneX}
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
