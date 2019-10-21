import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '../utils/colors';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 4,
    minHeight: 16,
    height: 16,
  } as ViewStyle,
  Dot: {
    height: 4,
    minHeight: 4,
    width: 4,
    minWidth: 4,
    borderRadius: 2,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: colors.ursula,
  } as ViewStyle,
  SelectedDot: {
    backgroundColor: colors.brand,
  } as ViewStyle,
});

type PageIndicatorProps = {
  pages: number;
  selectedPage: number;
};

const createDot = (i: number, props: PageIndicatorProps) => (
  <View
    key={`indicator-${i}`}
    style={[styles.Dot, i === props.selectedPage && styles.SelectedDot]}
  />
);

export const PageIndicatorUnmemoized = (props: PageIndicatorProps) => {
  if (props.pages <= 1) return null;
  return (
    <View style={styles.Wrapper}>
      {Array.from(new Array(props.pages)).map((_, i) => createDot(i, props))}
    </View>
  );
};

export const PageIndicator = React.memo(PageIndicatorUnmemoized);
