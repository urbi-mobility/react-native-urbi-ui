import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FilterGroup } from 'react-native-urbi-ui/components/FilterGroup';
import { IconToggle } from 'react-native-urbi-ui/molecules/buttons/toggles/IconToggle';
import { ImageToggle } from 'react-native-urbi-ui/molecules/buttons/toggles/ImageToggle';
import { colors } from 'react-native-urbi-ui/utils/colors';
import { showAlert } from 'react-native-urbi-ui/utils/functions';
import {
  boomEmoji,
  emovIcon,
  onButtonPress,
  placeholder,
  renderComponent,
} from '../utils/ComponentPreview';

const onFilterPress = (id: string, active: boolean) => {
  categoryFilters.find((f) => f.id === id)!.active = active;
  showAlert(`'${id}' is now ${active ? 'active' : 'inactive'}`, "Look at me, I'm the Toast now");
};

const onImageTogglePress = (id: string, active: boolean) =>
  showAlert(`'${id}' is now ${active ? 'active' : 'inactive'}`);

const categoryFilters = [
  { id: 'car', icon: 'car', active: false },
  { id: 'scooter', icon: 'scooter', active: false },
  { id: 'kickscooter', icon: 'kickscooter', active: false },
  { id: 'bike', icon: 'bike', active: true },
  { id: 'public_transport', icon: 'public_transport', active: true },
];

const styles = StyleSheet.create({
  WithWhiteBackground: {
    flex: 1,
    backgroundColor: colors.ulisse,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
});

const ToggleWithBackground = (
  <View style={styles.WithWhiteBackground}>
    <ImageToggle id="emov" icon={emovIcon} setActive={onImageTogglePress} active={false} />
  </View>
);

class Toggles extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'IconToggle',
          <IconToggle icon="car" id="car" setActive={onFilterPress} active />
        )}
        {renderComponent(
          'ImageToggle',
          <ImageToggle
            id="thinking"
            icon={placeholder}
            setActive={onImageTogglePress}
            active={false}
          />
        )}
        {renderComponent('ImageToggle (inside white bg container)', ToggleWithBackground)}
        {renderComponent(
          'ImageToggle (square pic)',
          <ImageToggle id="boom" icon={boomEmoji} setActive={onImageTogglePress} active />
        )}
        {renderComponent(
          'FilterGroup',
          <FilterGroup
            filterButtons={categoryFilters}
            onFilterToggle={onFilterPress}
            onLastButtonClick={onButtonPress}
          />
        )}
      </ScrollView>
    );
  }
}

export default Toggles;
