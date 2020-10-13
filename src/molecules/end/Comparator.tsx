import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'src/utils/const';
import { Chip, ChipProps } from 'src/molecules/Chip';
import { layoutStyles } from 'src/utils/styles';
import { registeredTextStyle } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    height: 72,
    ...layoutStyles.ColumnJustifyStart,
    alignItems: 'flex-end',
    width: '40%',
  },
  Title: registeredTextStyle('titleBold'),
  Content: { marginTop: 8 },
  BottomPanel: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: 8,
  },
  ComparatorBodyMargin: {
    flexShrink: 1,
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
      <Icon name={`${icon.name}-small`} color={icon.color} size={20} />
    </View>
  );
};

const renderText = (textBody: string) => {
  return (
    <Text
      numberOfLines={1}
      style={{
        ...registeredTextStyle('body'),
        ...styles.ComparatorBodyMargin,
      }}
    >
      {textBody}
    </Text>
  );
};

export const ComparatorUnmemoized = ({ title, content, bottomLabel }: EndComparatorProps) => (
  <View style={styles.Wrapper}>
    <Text style={styles.Title}>{title}</Text>
    {content?.label && (
      <View style={styles.Content}>
        <Chip alignSelf="flex-end" label={content.label} bgState={content.bgState} />
      </View>
    )}
    <View style={styles.BottomPanel}>
      {bottomLabel?.icons?.map((icon, index) => renderIcon(icon, index))}
      {bottomLabel?.text && renderText(bottomLabel.text)}
    </View>
  </View>
);

export const Comparator = React.memo(ComparatorUnmemoized);
