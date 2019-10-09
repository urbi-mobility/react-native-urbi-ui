import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BannerSliderComp, { bannerHeight } from 'react-native-urbi-ui/components/BannerSlider';
import { onButtonPress, renderComponent } from '../utils/ComponentPreview';

class BannerSlider extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'BannerSlider',
          <View style={{ flex: 1, height: bannerHeight }}>
            <BannerSliderComp
              pages={[
                {
                  url:
                    'https://s3-eu-west-1.amazonaws.com/static.urbi.co/shop/shopVoucherEmpty.png',
                  id: '1',
                  name: 'first',
                },
                {
                  url:
                    'https://s3-eu-west-1.amazonaws.com/static.urbi.co/shop/shopVoucherEmpty.png',
                  id: '2',
                  name: 'second',
                },
              ]}
              onPress={onButtonPress}
            />
          </View>
        )}
      </ScrollView>
    );
  }
}

export default BannerSlider;
