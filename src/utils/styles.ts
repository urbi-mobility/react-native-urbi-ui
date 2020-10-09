import { StyleSheet } from 'react-native';
export const layoutStyles = StyleSheet.create({
  ColumnJustifyStart: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  RowAlignCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  noPaddings: { paddingLeft: 0, paddingRight: 0 },
  margins: { marginRight: 2, marginTop: 4 },
});
