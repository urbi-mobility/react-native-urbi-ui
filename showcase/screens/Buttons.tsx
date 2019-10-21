import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { ButtonCompact } from 'react-native-urbi-ui/molecules/buttons/ButtonCompact';
import { ButtonRegular } from 'react-native-urbi-ui/molecules/buttons/ButtonRegular';
import { Link } from 'react-native-urbi-ui/molecules/buttons/Link';
import { LinkCompact } from 'react-native-urbi-ui/molecules/buttons/LinkCompact';
import { onButtonPress, renderComponent } from '../utils/ComponentPreview';

class Buttons extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'Button (primary)',
          <ButtonRegular buttonStyle="primary" label="test" onPress={onButtonPress} />
        )}
        {renderComponent(
          'Button (disabled)',
          <ButtonRegular buttonStyle="disabled" label="test" onPress={onButtonPress} />
        )}
        {renderComponent(
          'Button (brand)',
          <ButtonRegular buttonStyle="brand" label="test" onPress={onButtonPress} />
        )}
        {renderComponent(
          'ButtonCompact (primary)',
          <ButtonCompact buttonStyle="primary" label="test" onPress={onButtonPress} />
        )}
        {renderComponent(
          'ButtonCompact (disabled)',
          <ButtonCompact buttonStyle="disabled" label="test" onPress={onButtonPress} />
        )}
        {renderComponent(
          'Button (default)',
          <ButtonRegular buttonStyle="default" label="test" onPress={onButtonPress} />
        )}
        {renderComponent(
          'ButtonCompact (default)',
          <ButtonCompact buttonStyle="default" label="test" onPress={onButtonPress} />
        )}
        {renderComponent(
          'Button (secondary)',
          <ButtonRegular buttonStyle="secondary" label="test" onPress={onButtonPress} />
        )}
        {renderComponent(
          'ButtonCompact (secondary)',
          <ButtonCompact buttonStyle="secondary" label="test" onPress={onButtonPress} />
        )}
        {renderComponent(
          'Button (brand, loading)',
          <ButtonRegular buttonStyle="brand" label="test" onPress={onButtonPress} loading />
        )}
        {renderComponent(
          'ButtonCompact (default, loading)',
          <ButtonCompact buttonStyle="default" label="test" onPress={onButtonPress} loading />
        )}
        {renderComponent(
          'ButtonCompact (primary, loading)',
          <ButtonCompact buttonStyle="primary" label="test" onPress={onButtonPress} loading />
        )}
        {renderComponent(
          'Button (brand)',
          <ButtonRegular buttonStyle="brand" label="test" onPress={onButtonPress} />
        )}
        {renderComponent(
          'ButtonCompact (brand)',
          <ButtonCompact buttonStyle="brand" label="test" onPress={onButtonPress} />
        )}
        {renderComponent('Link', <Link text="info" onPress={onButtonPress} uppercase />)}
        {renderComponent(
          'LinkCompact',
          <LinkCompact text="info" onPress={onButtonPress} uppercase />
        )}
      </ScrollView>
    );
  }
}

export default Buttons;
