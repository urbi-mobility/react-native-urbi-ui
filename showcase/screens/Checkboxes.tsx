import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItemCheckbox } from 'react-native-urbi-ui/components/ListItemCheckbox';
import { renderComponent } from '../utils/ComponentPreview';

type CheckboxesState = {
  listItemCheckboxSelected: boolean;
  listItemCheckboxDoubleSelected: boolean;
  listItemCheckboxDoubleLongSelected: boolean;
};

class Checkboxes extends React.PureComponent<any, CheckboxesState> {
  constructor(props: any) {
    super(props);
    this.state = {
      listItemCheckboxSelected: false,
      listItemCheckboxDoubleSelected: false,
      listItemCheckboxDoubleLongSelected: false,
    };
    this.onListItemCheckboxToggle = this.onListItemCheckboxToggle.bind(this);
    this.onListItemCheckboxDoubleToggle = this.onListItemCheckboxDoubleToggle.bind(this);
    this.onListItemCheckboxDoubleLongToggle = this.onListItemCheckboxDoubleLongToggle.bind(this);
  }

  onListItemCheckboxToggle(_: string, checked: boolean) {
    this.setState({ listItemCheckboxSelected: checked });
  }

  onListItemCheckboxDoubleToggle(_: string, checked: boolean) {
    this.setState({ listItemCheckboxDoubleSelected: checked });
  }

  onListItemCheckboxDoubleLongToggle(_: string, checked: boolean) {
    this.setState({ listItemCheckboxDoubleLongSelected: checked });
  }

  render() {
    return (
      <ScrollView>
        {renderComponent(
          'ListItemCheckbox',
          <ListItemCheckbox
            id="check"
            selected={this.state.listItemCheckboxSelected}
            onPress={this.onListItemCheckboxToggle}
            label="Check me!"
            onSelectShow="Checked!"
          />
        )}
        {renderComponent(
          'ListItemCheckbox (double)',
          <ListItemCheckbox
            id="double check"
            selected={this.state.listItemCheckboxDoubleSelected}
            onPress={this.onListItemCheckboxDoubleToggle}
            label="Check me!"
            subtitle="such a beautiful checkbox"
            onSelectShow="Checked!"
          />
        )}
        {renderComponent(
          'ListItemCheckbox (double cream)',
          <ListItemCheckbox
            id="double check"
            selected={this.state.listItemCheckboxDoubleLongSelected}
            onPress={this.onListItemCheckboxDoubleLongToggle}
            label="🧐 I'm a checkbox that should span two lines on both rows"
            subtitle={
              "and since I'm pretty long, I should get cut somewhere in the middle" +
              ' of the second row. Now, have I.'
            }
            onSelectShow="Checked!"
          />
        )}
      </ScrollView>
    );
  }
}

export default Checkboxes;
