import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { fontStyles } from 'react-native-urbi-ui/utils/fonts';
import { registeredTextStyle, UrbiFontStyles } from 'react-native-urbi-ui/utils/textStyles';
import { renderComponent } from '../utils/ComponentPreview';

const textEntries = Object.keys(fontStyles).map((name) => {
  const fontStyle = registeredTextStyle(name as keyof UrbiFontStyles);
  return { name, text: <Text style={fontStyle}>Some Text 123</Text> };
});

class Typography extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {textEntries.map((te, i) => renderComponent(te.name, te.text, `txt-${i}`))}
      </ScrollView>
    );
  }
}

export default Typography;
