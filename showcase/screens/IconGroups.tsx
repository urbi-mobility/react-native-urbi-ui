import React, { ReactElement, useState } from 'react';
import { ImageToggle } from 'react-native-urbi-ui/molecules/buttons/toggles/ImageToggle';
import { ScrollView } from 'react-native-gesture-handler';
import {
  renderComponent,
  placeholder,
  boomEmoji,
  pukeEmoji,
  starryEmoji,
  zanyEmoji,
} from '../utils/ComponentPreview';
import { IconGroup } from 'react-native-urbi-ui/components/IconGroup';
import { showAlert } from 'react-native-urbi-ui/utils/functions';
import { ImageRequireSource, View, StyleSheet } from 'react-native';
import { ButtonRegular } from 'react-native-urbi-ui/molecules/buttons/ButtonRegular';

const onImageTogglePress = (id: string, active: boolean) =>
  showAlert(`'${id}' is now ${active ? 'active' : 'inactive'}`);

const imageToggle = (id: string, image: ImageRequireSource, managed = false) => (
  <ImageToggle id={id} icon={image} setActive={onImageTogglePress} active managed={managed} />
);

const iconGroupIcons = [
  imageToggle('first', placeholder),
  imageToggle('second', boomEmoji),
  imageToggle('third', pukeEmoji),
  imageToggle('fourth', starryEmoji),
  imageToggle('fifth', zanyEmoji),
  imageToggle('sixth', placeholder),
  imageToggle('seventh', boomEmoji),
  imageToggle('eight', pukeEmoji),
  imageToggle('ninth', starryEmoji),
  imageToggle('tenth', zanyEmoji),
] as Array<ReactElement<typeof ImageToggle>>;

const IconGroups = () => {
  // for this example we'll just use array indices as component ids
  const [managedButtonStates, setManagedButtonStates] = useState([true, true, true]);

  const onResetPress = () => setManagedButtonStates([true, true, true]);

  const setManagedButtonActive = (id: string, active: boolean) => {
    const index = parseInt(id, 10);
    const newState = [...managedButtonStates];
    newState[index] = active;
    setManagedButtonStates(newState);
  };

  return (
    <ScrollView>
      {renderComponent('IconGroup', <IconGroup icons={iconGroupIcons.slice(0, 10)} />)}
      {renderComponent('IconGroup (more icons)', <IconGroup icons={iconGroupIcons} />)}
      {renderComponent('IconGroup (fewer icons)', <IconGroup icons={iconGroupIcons.slice(0, 5)} />)}
      {renderComponent(
        'Managed IconGroup',
        <View style={styles.Wrapper}>
          <IconGroup
            icons={[
              <ImageToggle
                id="0"
                icon={placeholder}
                setActive={setManagedButtonActive}
                active={managedButtonStates[0]}
                managed
              />,
              <ImageToggle
                id="1"
                icon={boomEmoji}
                setActive={setManagedButtonActive}
                active={managedButtonStates[1]}
                managed
              />,
              <ImageToggle
                id="2"
                icon={pukeEmoji}
                setActive={setManagedButtonActive}
                active={managedButtonStates[2]}
                managed
              />,
            ]}
          />
          <ButtonRegular buttonStyle="brand" label="reset" onPress={onResetPress} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    paddingBottom: 10,
  },
});

export default IconGroups;
