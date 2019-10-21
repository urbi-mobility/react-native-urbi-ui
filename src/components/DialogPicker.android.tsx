import React from 'react';
import { View } from 'react-native';
import DialogAndroid from 'react-native-dialogs';
import { DialogPickerProps } from '../components/types';

export class DialogPicker extends React.PureComponent<DialogPickerProps> {
  componentWillReceiveProps(nextProps: DialogPickerProps) {
    if (!this.props.show && nextProps.show) {
      DialogAndroid.showPicker(nextProps.title, null, {
        items: nextProps.options,
        positiveText: null,
      }).then(({ selectedItem }) => {
        if (selectedItem) {
          this.props.onSelect(selectedItem.id);
        } else {
          this.props.onCancel();
        }
      });
    }
  }

  render() {
    const { show } = this.props;
    if (!show) return null;
    return <View />;
  }
}
