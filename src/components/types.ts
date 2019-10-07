export type DialogPickerOption = {
  id: string;
  label: string;
};

export type DialogPickerProps = {
  show: boolean;
  title: string;
  /** the buttons to show. Index 0 must store the cancel option */
  options: DialogPickerOption[];
  onSelect: (selectedId: string) => any;
  onCancel: () => any;
};
