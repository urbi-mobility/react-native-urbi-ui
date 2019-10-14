import React from 'react';
import {Text, View} from 'react-native';
import BannerSliderComp from 'react-native-urbi-ui/components/BannerSlider';
import {onButtonPress} from '../utils/ComponentPreview';

class BannerSlider extends React.PureComponent<any> {
  render() {
    return (
          <View style={{ flex: 1 , flexDirection: 'column' }}>
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
                    'https://image.shutterstock.com/z/stock-photo-lake-hintersee-in-germany-bavaria-national-park-ramsau-in-alps-beautiful-autumnal-alpine-1494290411.jpg',
                  id: '2',
                  name: 'second',
                },
              ]}
              onPress={onButtonPress}
            />
              <Text style={{color:'red'}}>BannerSlider</Text>
          </View>
    );
  }
}

export default BannerSlider;
