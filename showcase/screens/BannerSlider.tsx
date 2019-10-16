import React from 'react';
import BannerSliderComp from 'react-native-urbi-ui/components/BannerSlider';
import { onButtonPress } from '../utils/ComponentPreview';

const BannerSlider = () => (
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
);

export default React.memo(BannerSlider);
