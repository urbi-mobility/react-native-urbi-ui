import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { IconButtonCompact } from 'react-native-urbi-ui/molecules/buttons/iconButtons/IconButtonCompact';
import { IconButtonRegular } from 'react-native-urbi-ui/molecules/buttons/iconButtons/IconButtonRegular';
import { onButtonPress, renderComponent } from '../utils/ComponentPreview';

class IconButtons extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'IconButton (primary)',
          <IconButtonRegular buttonStyle="primary" icon="car" onPress={onButtonPress} />
        )}
        {renderComponent(
          'IconButton (disabled)',
          <IconButtonRegular buttonStyle="disabled" icon="car" onPress={onButtonPress} />
        )}
        {renderComponent(
          'IconButton (default)',
          <IconButtonRegular buttonStyle="default" icon="car" onPress={onButtonPress} />
        )}
        {renderComponent(
          'IconButton (secondary)',
          <IconButtonRegular buttonStyle="secondary" icon="car" onPress={onButtonPress} />
        )}
        {renderComponent(
          'IconButtonCompact (primary)',
          <IconButtonCompact buttonStyle="primary" icon="car" onPress={onButtonPress} />
        )}
        {renderComponent(
          'IconButtonCompact (disabled)',
          <IconButtonCompact buttonStyle="disabled" icon="car" onPress={onButtonPress} />
        )}
        {renderComponent(
          'IconButtonCompact (default)',
          <IconButtonCompact buttonStyle="default" icon="car" onPress={onButtonPress} />
        )}
        {renderComponent(
          'IconButtonCompact (secondary)',
          <IconButtonCompact buttonStyle="secondary" icon="car" onPress={onButtonPress} />
        )}
      </ScrollView>
    );
  }
}

export default IconButtons;
