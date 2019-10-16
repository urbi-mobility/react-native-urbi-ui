import React from 'react';
import BannerSliderComp from 'react-native-urbi-ui/components/BannerSlider';
import { onButtonPress } from '../utils/ComponentPreview';
import { Text, View } from 'react-native';

const BannerSlider = () => (
  <View style={{ flex: 1 }}>
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
      ]}
      onPress={onButtonPress}
    />
    <View style={{ flex: 1 }}>
      <Text>Hi, I'm a textbox coming right after the banner slider</Text>
    </View>
  </View>
);

export default React.memo(BannerSlider);
