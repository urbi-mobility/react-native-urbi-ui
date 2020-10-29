import React from 'react';
import { ScrollView } from 'react-native';
import { LoadingCircle } from 'react-native-urbi-ui/molecules/animations/LoadingCircle';
import { renderComponent } from '../utils/ComponentPreview';
import { colors } from 'react-native-urbi-ui/utils/colors';

export const AnimationsUnmemoized = () => (
  <ScrollView>
    {renderComponent('LoadingCircle', <LoadingCircle size={50} color={colors.brand} />)}
  </ScrollView>
);

export default React.memo(AnimationsUnmemoized);
