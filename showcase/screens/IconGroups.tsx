import React, { ReactElement, useState } from 'react';
import { ImageRequireSource, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IconGroup } from 'react-native-urbi-ui/components/IconGroup';
import { ButtonRegular } from 'react-native-urbi-ui/molecules/buttons/ButtonRegular';
import { ImageToggle } from 'react-native-urbi-ui/molecules/buttons/toggles/ImageToggle';
import { showAlert } from 'react-native-urbi-ui/utils/functions';
import {
  boomEmoji,
  placeholder,
  pukeEmoji,
  renderComponent,
  starryEmoji,
  zanyEmoji,
} from '../utils/ComponentPreview';

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
  imageToggle('sixth', boomEmoji),
  imageToggle('seventh', pukeEmoji),
  imageToggle('eight', starryEmoji),
  imageToggle('ninth', placeholder),
  imageToggle('tenth', zanyEmoji),
  imageToggle('eleventh', boomEmoji),
  imageToggle('twelfth', placeholder),
  imageToggle('thirteenth', pukeEmoji),
  imageToggle('fourteenth', starryEmoji),
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
      {renderComponent('IconGroup (8 icons)', <IconGroup icons={iconGroupIcons.slice(0, 8)} />)}
      {renderComponent('IconGroup (12 icons)', <IconGroup icons={iconGroupIcons.slice(0, 12)} />)}
      {renderComponent('IconGroup (14 icons)', <IconGroup icons={iconGroupIcons} />)}
      {renderComponent('IconGroup (6 icons)', <IconGroup icons={iconGroupIcons.slice(0, 6)} />)}
      {renderComponent('IconGroup (4 icons)', <IconGroup icons={iconGroupIcons.slice(0, 4)} />)}
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
