import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'src/utils/const';
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
  ComparatorBodyMargin: {
    marginRight: 2,
  },
});

export type EndComparatorProps = {
  title: string;
  content?: ChipProps;
  bottomLabel?: EndComparatorLabelType;
};

type EndComparatorLabelType = {
  icons?: IconType[];
  text?: string;
};

type IconType = {
  name: string;
  color: string;
};

const renderIcon = (icon: IconType, index: number) => {
  return (
    <View key={index} style={styles.ComparatorBodyMargin}>
      <Icon name={icon.name} color={icon.color} size={20} />
    </View>
  );
};

const renderText = (textBody: string) => {
  return (
    <Text
      style={[
        { ...registeredTextStyle('body' as keyof UrbiFontStyles) },
        styles.ComparatorBodyMargin,
      ]}
    >
      {textBody}
    </Text>
  );
};

export const ComparatorUnmemoized = ({ title, content, bottomLabel }: EndComparatorProps) => (
  <View style={[comparatorStyles.Wrapper, styles.Wrapper]}>
    <Text style={styles.Title}>{title}</Text>
    {content?.label && (
      <View style={styles.Content}>
        <Chip alignSelf="flex-end" label={content.label} bgState={content.bgState} />
      </View>
    )}
    <View style={styles.BottomPanel}>
      {bottomLabel?.icons && bottomLabel.icons.map((icon, index) => renderIcon(icon, index))}
      {bottomLabel?.text && renderText(bottomLabel.text)}
    </View>
  </View>
);

export const Comparator = React.memo(ComparatorUnmemoized);
