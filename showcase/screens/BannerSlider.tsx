import React from 'react';
import { ScrollView, View } from 'react-native';
import BannerSliderComp, { bannerHeight } from 'react-native-urbi-ui/components/BannerSlider';
import { onButtonPress, renderComponent } from '../utils/ComponentPreview';

type BannerSliderState = {
  imageHeight?: number;
};
class BannerSlider extends React.PureComponent<any, BannerSliderState> {
  constructor(props: any) {
    super(props);
    this.state = { imageHeight: bannerHeight };
  }
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'BannerSlider',
          <View style={{ flex: 1, height: this.state.imageHeight }}>
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
              onSetHeight={(newHeight) => {
                if (this.state.imageHeight && newHeight && newHeight > this.state.imageHeight) {
                  this.setState({ imageHeight: newHeight });
                }
              }}
            />
          </View>
        )}
      </ScrollView>
    );
  }
}

export default BannerSlider;
