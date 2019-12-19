import React from 'react';
import { BannerSlider as BannerSliderComp } from 'react-native-urbi-ui/components/BannerSlider';
import { onButtonPress } from '../utils/ComponentPreview';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { corporateIpsum } from '../utils/LoremIpsum';
import { registeredTextStyle } from 'react-native-urbi-ui/utils/textStyles';
import { colors } from 'react-native-urbi-ui/utils/colors';

const styles = StyleSheet.create({
  Title: {
    ...registeredTextStyle('title1', colors.brand),
    padding: 20,
    paddingBottom: 0,
  },
  Text: {
    ...registeredTextStyle('body'),
    padding: 20,
  },
});

const BannerSlider = () => (
  <View style={{ flex: 1 }}>
    <ScrollView>
      <BannerSliderComp
        pages={[
          {
            url: 'https://s3-eu-west-1.amazonaws.com/static.urbi.co/shop/shopVoucherEmpty.png',
            id: '1',
            name: 'first',
          },
          {
            url: 'https://s3-eu-west-1.amazonaws.com/static.urbi.co/shop/shopVoucherEmpty.png',
            id: '2',
            name: 'second',
          },
          {
            url: 'https://s3-eu-west-1.amazonaws.com/static.urbi.co/shop/shopVoucherEmpty.png',
            id: '3',
            name: 'third',
          },
        ]}
        onPress={onButtonPress}
        autoSwipeSeconds={4}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.Title}>I'm changing every 4 seconds!</Text>
        <Text style={styles.Text}>
          Try swiping, the animation should reset and start again in another 4 seconds!{'\n\n'}
          {corporateIpsum}
        </Text>
      </View>
    </ScrollView>
  </View>
);

export default React.memo(BannerSlider);
