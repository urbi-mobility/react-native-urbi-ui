import React, { ReactElement } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { IconAndLabelCellUnmemoized } from 'src/molecules/column/IconAndLabelCell';
import { IconsCellUnmemoized } from 'src/molecules/column/IconsCell';
import { LabelCellUnmemoized } from 'src/molecules/column/LabelCell';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    paddingLeft: 16,
    paddingRight: 4, // 12 in zeplin, we add 8 to marginRight to columns
    height: 56,
  } as ViewStyle,
  Column: {
    flex: 1,
    marginRight: 8,
  } as ViewStyle,
});

type ColumnContent = ReactElement<
  typeof LabelCellUnmemoized | typeof IconAndLabelCellUnmemoized | typeof IconsCellUnmemoized
>;

type ColumnLayoutProps = {
  columns: ColumnContent[];
  divideIn?: number; // set if > columns.length to force dividing the row in...
};

const mapColumns = (column: ColumnContent, i: number) =>
  React.cloneElement(column as React.ReactElement<any>, {
    key: `col-${i}`,
    style: styles.Column,
  });

const addEmptyColumns = (props: ColumnLayoutProps) => {
  const { columns, divideIn } = props;
  if (!divideIn || columns.length >= divideIn) return null;
  const cols = [];
  for (let i = columns.length; i < divideIn; i++) {
    cols.push(<View key={`col-${i}`} style={styles.Column} />);
  }
  return cols;
};

export const ColumnLayoutUnmemoized = (props: ColumnLayoutProps) => (
  <View style={styles.Wrapper}>
    {props.columns.map(mapColumns)}
    {addEmptyColumns(props)}
  </View>
);

export const ColumnLayout = React.memo(ColumnLayoutUnmemoized);
