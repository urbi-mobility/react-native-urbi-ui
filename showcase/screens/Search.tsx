import React from 'react';
import { StyleSheet, ViewStyle, ScrollView } from 'react-native';
import { Search as SearchComponent } from 'react-native-urbi-ui/components/Search';
import { renderComponent, onButtonPress } from '../utils/ComponentPreview';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  } as ViewStyle,
});

export const SearchUnmemoized = () => (
  <ScrollView>
    {renderComponent(
      'Search (dark bg, no label, no action)',
      <SearchComponent onPress={onButtonPress} backgroundColor="uma" leftIcon="search-small" />
    )}
    {renderComponent(
      'Search (dark bg, w/label and action)',
      <SearchComponent
        onPress={onButtonPress}
        backgroundColor="uma"
        leftIcon="search-small"
        label="Tap here to show a dialog"
        rightmostAction={{ icon: 'close-small', onPress: onButtonPress, stateful: false }}
      />
    )}
    {renderComponent(
      'Search (dark bg, w/label and 2 actions)',
      <SearchComponent
        onPress={onButtonPress}
        backgroundColor="uma"
        leftIcon="search-small"
        label="Tap here to show a dialog"
        leftmostAction={{ icon: 'fav-small', stateful: true }}
        rightmostAction={{ icon: 'close-small', onPress: onButtonPress, stateful: false }}
      />
    )}
    {renderComponent(
      'Search (light bg, w/label and 2 actions)',
      <SearchComponent
        onPress={onButtonPress}
        backgroundColor="ukko"
        leftIcon="search-small"
        label="Tap here to show a dialog"
        leftmostAction={{ icon: 'fav-small', stateful: true }}
        rightmostAction={{ icon: 'close-small', onPress: onButtonPress, stateful: false }}
      />
    )}
    {renderComponent(
      'Search (white bg, w/label and 2 actions)',
      <SearchComponent
        onPress={onButtonPress}
        backgroundColor="ulisse"
        leftIcon="search-small"
        label="Tap here to show a dialog"
        leftmostAction={{ icon: 'fav-small', stateful: true }}
        rightmostAction={{ icon: 'close-small', onPress: onButtonPress, stateful: false }}
      />
    )}
  </ScrollView>
);

export default React.memo(SearchUnmemoized);
