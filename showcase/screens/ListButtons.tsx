import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { ListButton } from 'react-native-urbi-ui/molecules/buttons/ListButton';
import { colors } from 'react-native-urbi-ui/utils/colors';
import { onButtonPress, renderComponent } from '../utils/ComponentPreview';

class ListButtons extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'ListButton',
          <ListButton
            actionLabel="take me to the vehicle"
            icon="address-small"
            onPress={onButtonPress}
          />
        )}
        {renderComponent(
          'ListButton (dark bg)',
          <LinearGradient
            style={{ flex: 1, alignItems: 'stretch' }}
            colors={[colors.secondary, colors.uma]}
          >
            <ListButton
              actionLabel="feed me a stray cat"
              icon="pass-shown-small"
              onPress={onButtonPress}
              onDarkBackground
            />
          </LinearGradient>
        )}
      </ScrollView>
    );
  }
}

export default ListButtons;
