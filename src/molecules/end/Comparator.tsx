import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Chip, ChipProps } from 'src/molecules/Chip';
import { comparatorStyles } from 'src/molecules/content/ComparatorSingleModal';
import { registeredTextStyle, UrbiFontStyles } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    alignItems: 'flex-end',
  },
  Title: registeredTextStyle('titleBold' as keyof UrbiFontStyles),
  Content: {
    marginTop: 8,
  },
  BottomPanel: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
  },
});

type ComparatorProps = {
  title: string;
  content?: ChipProps;
  bottomLabel?: JSX.Element;
};

export const ComparatorUnmemoized = ({ title, content, bottomLabel }: ComparatorProps) => (
  <View style={[comparatorStyles.Wrapper, styles.Wrapper]}>
    <Text style={styles.Title}>{title}</Text>
    {content?.label && (
      <View style={styles.Content}>
        <Chip alignSelf="flex-end" label={content.label} bgState={content.bgState} />
      </View>
    )}
    <View style={styles.BottomPanel}>{bottomLabel}</View>
  </View>
);

export const Comparator = React.memo(ComparatorUnmemoized);
