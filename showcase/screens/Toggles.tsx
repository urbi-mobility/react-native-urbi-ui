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

const onImageTogglePress = (id: string, active: boolean) =>
  showAlert(`'${id}' is now ${active ? 'active' : 'inactive'}`);

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

type ToggleButtonState = {
  active: boolean;
  id: string;
  icon: string;
  loading?: boolean;
};

type TogglesState = {
  car: ToggleButtonState;
  scooter: ToggleButtonState;
  kickscooter: ToggleButtonState;
  bike: ToggleButtonState;
  public_transport: ToggleButtonState;
};

class Toggles extends React.PureComponent<{}, TogglesState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      car: { id: 'car', icon: 'car', active: false, loading: false },
      scooter: { id: 'scooter', icon: 'scooter', active: false },
      kickscooter: { id: 'kickscooter', icon: 'kickscooter', active: false },
      bike: { id: 'bike', icon: 'bike', active: true },
      ['public_transport']: { id: 'public_transport', icon: 'public_transport', active: true },
    };

    this.onFilterPress = this.onFilterPress.bind(this);
  }

  onFilterPress(k: string, active: boolean) {
    const id = k as keyof TogglesState;
    this.setState<never>({ [id]: { ...this.state[id], loading: true } });
    setTimeout(() => {
      this.setState<never>({ [id]: { ...this.state[id], loading: false } });
      showAlert(
        `'${id}' is now ${active ? 'active' : 'inactive'}`,
        "Look at me, I'm the Toast now"
      );
    }, 500 + Math.random() * 4000);
  }

  render() {
    return (
      <ScrollView>
        {renderComponent(
          'IconToggle',
          <IconToggle
            icon="car"
            id="car"
            setActive={this.onFilterPress}
            managed
            active={this.state.car.active}
            loading={this.state.car.loading}
          />
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
            filterButtons={Object.values(this.state)}
            onFilterToggle={this.onFilterPress}
            lastButton={{ active: false, icon: 'taxi', onPress: onButtonPress }}
          />
        )}
        {renderComponent(
          'FilterGroup (w/o last button)',
          <FilterGroup
            filterButtons={Object.values(this.state)}
            onFilterToggle={this.onFilterPress}
          />
        )}
      </ScrollView>
    );
  }
}

export default Toggles;
