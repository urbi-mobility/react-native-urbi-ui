import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-urbi-ui/components/ListItem';
import { ListItemSlider } from 'react-native-urbi-ui/components/ListItemSlider';
import { Label } from 'react-native-urbi-ui/molecules/content/Label';
import { EndLabel } from 'react-native-urbi-ui/molecules/end/EndLabel';
import { Slider } from 'react-native-urbi-ui/molecules/Slider';
import { showAlert } from 'react-native-urbi-ui/utils/functions';
import { renderComponent } from '../utils/ComponentPreview';

const onSlidingComplete = (value: number) => showAlert(`final value: ${value}`);

export const SlidersUnmemoized = () => {
  const [endLabelTitle, setEndLabelTitle] = useState('250 m');
  const [endLabelTitle2, setEndLabelTitle2] = useState('250 m');

  const onSliderChange = (value: number) => setEndLabelTitle(`${value} m`);
  const onSliderChange2 = (value: number) => setEndLabelTitle2(`${value} m`);

  return (
    <ScrollView>
      {renderComponent(
        'Slider (min 0, max 500, step 50)',
        <Slider
          min={0}
          max={500}
          step={50}
          initialValue={150}
          onSlidingComplete={onSlidingComplete}
        />
      )}
      {renderComponent(
        'Slider (min 0, max 500, step 5)',
        <Slider
          min={0}
          max={500}
          step={5}
          initialValue={150}
          onSlidingComplete={onSlidingComplete}
        />
      )}
      {renderComponent(
        'ListItemSlider (min 50, max 8888, step 100, initial 250)',
        <ListItemSlider
          sliderProps={{
            min: 50,
            max: 8888,
            step: 100,
            initialValue: 250,
            onChange: onSliderChange,
          }}
          endLabelTitle={endLabelTitle}
          endLabelSubtitle="Radius"
        />
      )}
      {renderComponent(
        'ListItem (for alignment purposes)',
        <ListItem content={<Label text="Hello, I'm a title" />} end={<EndLabel label="label" />} />
      )}
      {renderComponent(
        'ListItemSlider (min 11, max 888, step 50, initial 250)',
        <ListItemSlider
          sliderProps={{
            min: 11,
            max: 888,
            step: 50,
            initialValue: 250,
            onChange: onSliderChange2,
          }}
          endLabelTitle={endLabelTitle2}
          endLabelSubtitle="Radius"
        />
      )}
    </ScrollView>
  );
};

export default React.memo(SlidersUnmemoized);
