import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { ListItemSlider } from 'react-native-urbi-ui/components/ListItemSlider';
import { Slider } from 'react-native-urbi-ui/molecules/Slider';
import { renderComponent } from '../utils/ComponentPreview';
import { showAlert } from 'react-native-urbi-ui/utils/functions';

const onSlidingComplete = (value: number) => showAlert(`final value: ${value}`);

export const SlidersUnmemoized = () => {
  const [endLabelTitle, setEndLabelTitle] = useState('250 m');

  const onSliderChange = (value: number) => setEndLabelTitle(`${value} m`);

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
        'ListItemSlider',
        <ListItemSlider
          slider={
            <Slider min={0} max={500} step={10} initialValue={250} onChange={onSliderChange} />
          }
          endLabelTitle={endLabelTitle}
          endLabelSubtitle="Radius"
        />
      )}
    </ScrollView>
  );
};

export default React.memo(SlidersUnmemoized);
