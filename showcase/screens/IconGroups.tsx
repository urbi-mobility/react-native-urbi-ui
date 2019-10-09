import React, { ReactElement } from 'react';
import ImageToggle from 'react-native-urbi-ui/molecules/buttons/toggles/ImageToggle';
import { ScrollView } from 'react-native-gesture-handler';
import {
  renderComponent,
  placeholder,
  boomEmoji,
  pukeEmoji,
  starryEmoji,
  zanyEmoji,
} from '../utils/ComponentPreview';
import IconGroup from 'react-native-urbi-ui/components/IconGroup';
import { showAlert } from 'react-native-urbi-ui/utils/functions';
import { ImageRequireSource } from 'react-native';

const onImageTogglePress = (id: string, active: boolean) =>
  showAlert(`'${id}' is now ${active ? 'active' : 'inactive'}`);

const imageToggle = (id: string, image: ImageRequireSource) => (
  <ImageToggle id={id} icon={image} setActive={onImageTogglePress} active />
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

class IconGroups extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent('IconGroup', <IconGroup icons={iconGroupIcons.slice(0, 10)} />)}
        {renderComponent('IconGroup (more icons)', <IconGroup icons={iconGroupIcons} />)}
        {renderComponent(
          'IconGroup (fewer icons)',
          <IconGroup icons={iconGroupIcons.slice(0, 5)} />
        )}
      </ScrollView>
    );
  }
}

export default IconGroups;
