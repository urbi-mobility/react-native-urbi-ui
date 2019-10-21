import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-urbi-ui/components/ListItemLarge';
import Label from 'react-native-urbi-ui/molecules/content/Label';
import { NavigationStackProp } from 'react-navigation-stack';
import { View, StyleSheet } from 'react-native';
import { colors } from 'react-native-urbi-ui/utils/colors';

export interface ButtonListEntry {
  key: string;
  label: string;
  toScreen: string;
}

type ButtonListProps = {
  entries: ButtonListEntry[];
  navigation: NavigationStackProp;
};

const styles = StyleSheet.create({
  Separator: {
    backgroundColor: colors.ukko,
    height: 1,
  },
});

const ItemSeparator = () => <View style={styles.Separator} />;

class ButtonList extends React.PureComponent<ButtonListProps> {
  constructor(props: ButtonListProps) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  navigateTo(screen: string) {
    return () => this.props.navigation.navigate(screen);
  }

  renderItem({ item }: { item: ButtonListEntry }) {
    return (
      <ListItem
        key={`entry-${item.label}`}
        content={<Label text={item.label} />}
        onPress={this.navigateTo(item.toScreen)}
      />
    );
  }

  render() {
    return (
      <FlatList
        style={{ flex: 1 }}
        data={this.props.entries}
        renderItem={this.renderItem}
        ItemSeparatorComponent={ItemSeparator}
      />
    );
  }
}

export const toButtonEntries = (names: string[]) =>
  names.map((name) => ({
    key: name,
    label: name,
    toScreen: name,
  }));

export default ButtonList;
