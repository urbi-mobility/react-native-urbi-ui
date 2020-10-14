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
  SingleModalContainer: {
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    marginRight: 2,
    marginTop: 4,
  },
});
