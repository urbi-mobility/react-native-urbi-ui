import React from 'react';
import IconToggle from 'react-native-urbi-ui/molecules/buttons/toggles/IconToggle';
import ImageToggle from 'react-native-urbi-ui/molecules/buttons/toggles/ImageToggle';
import { ScrollView } from 'react-native-gesture-handler';
import FilterGroup from 'react-native-urbi-ui/components/FilterGroup';
import { onButtonPress, renderComponent, placeholder } from '../utils/ComponentPreview';
import { showAlert } from 'react-native-urbi-ui/utils/functions';

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
        {renderComponent(
          'FilterGroup',
          <FilterGroup
            filterButtons={categoryFilters}
            onFilterToggle={onFilterPress}
            onSettingsClicked={onButtonPress}
          />
        )}
      </ScrollView>
    );
  }
}

export default Toggles;
