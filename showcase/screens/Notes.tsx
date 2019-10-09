import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { renderComponent, placeholder } from '../utils/ComponentPreview';
import Note from 'react-native-urbi-ui/molecules/Note';
import { showAlert } from 'react-native-urbi-ui/utils/functions';

const onNoteTapped = () => showAlert('See? I told ya');

class Notes extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'Note',
          <Note
            // tslint:disable-next-line:max-line-length
            text={`Sometimes tarifs can vary quicker than our best effort to keep them up to date.\nCheck the provider's website for further details.`}
          />
        )}
        {renderComponent(
          'IconAndNote',
          <Note
            icon={placeholder}
            // tslint:disable-next-line:max-line-length
            text={`Sometimes tarifs can vary quicker than our best effort to keep them up to date.\nCheck the provider's website for further details.`}
          />
        )}
        {renderComponent(
          'IconAndNote (long text)',
          <Note
            icon={placeholder}
            // tslint:disable-next-line:max-line-length
            text={`And this is what happens when there's more text than the height of the icon to the left.\nText should be vertically center-aligned with the icon. If it isn't, then we have a problem here.\nAnd I sure don't like problems.\nOh BTW, you can tap me.`}
            onPress={onNoteTapped}
          />
        )}
      </ScrollView>
    );
  }
}

export default Notes;
