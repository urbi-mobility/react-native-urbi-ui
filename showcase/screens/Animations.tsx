import React from 'react';
import { ScrollView } from 'react-native';
import { LoadingCircle } from 'react-native-urbi-ui/molecules/animations/LoadingCircle';
import { renderComponent } from '../utils/ComponentPreview';

export const AnimationsUnmemoized = () => (
  <ScrollView>{renderComponent('LoadingCircle', <LoadingCircle size={50} />)}</ScrollView>
);

export default React.memo(AnimationsUnmemoized);
