import React from 'react';
import { ScrollView } from 'react-native';
import { Slider } from 'react-native-urbi-ui/molecules/Slider';
import { renderComponent } from '../utils/ComponentPreview';
import { showAlert } from 'react-native-urbi-ui/utils/functions';

const onSlidingComplete = (value: number) => showAlert(`final value: ${value}`);

export const SlidersUnmemoized = () => (
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
      <Slider min={0} max={500} step={5} initialValue={150} onSlidingComplete={onSlidingComplete} />
    )}
  </ScrollView>
);

export default React.memo(SlidersUnmemoized);
