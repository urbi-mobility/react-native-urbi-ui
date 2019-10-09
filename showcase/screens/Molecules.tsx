import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import ButtonList, { toButtonEntries } from '../components/ButtonList';

class Molecules extends React.PureComponent<NavigationStackScreenProps> {
  render() {
    return <ButtonList navigation={this.props.navigation} entries={buttonEntries} />;
  }
}

const buttonEntries = toButtonEntries([
  'Buttons',
  'CardHeaders',
  'ColumnLayouts',
  'Content',
  'IconButtons',
  'Images',
  'ListButtons',
  'Notes',
  'Steppers',
  'Text',
  'Toggles',
]);

export default Molecules;
