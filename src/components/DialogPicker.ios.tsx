import React from 'react';
import { ActionSheetIOS, View } from 'react-native';
import { DialogPickerProps } from 'src/components/types';

export class DialogPicker extends React.PureComponent<DialogPickerProps> {
  constructor(props: DialogPickerProps) {
    super(props);
    this.onItemChosen = this.onItemChosen.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps: DialogPickerProps) {
    if (!this.props.show && nextProps.show) {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: nextProps.options.map((o) => o.label),
          title: nextProps.title,
          cancelButtonIndex: 0,
        },
        this.onItemChosen
      );
    }
  }

  onItemChosen(itemIndex: number) {
    this.props.onSelect(this.props.options[itemIndex].id);
  }

  render() {
    const { show } = this.props;
    if (!show) return null;
    return <View />;
  }
}
