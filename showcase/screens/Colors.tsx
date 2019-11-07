import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from 'react-native-urbi-ui/utils/colors';
import { renderComponent } from '../utils/ComponentPreview';

const styles = StyleSheet.create({
  ColorPreview: {
    flex: 1,
    minHeight: 50,
  },
});

class Colors extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {Object.keys(colors).map((c) =>
          renderComponent(
            c,
            <View
              style={[styles.ColorPreview, { backgroundColor: colors[c as keyof typeof colors] }]}
            />,
            `col-${c}`
          )
        )}
      </ScrollView>
    );
  }
}

export default Colors;
