import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { BikeImg } from 'react-native-urbi-ui/molecules/img/BikeImg';
import { Selection } from 'react-native-urbi-ui/molecules/img/Selection';
import { StationImg } from 'react-native-urbi-ui/molecules/img/StationImg';
import { TransitImg } from 'react-native-urbi-ui/molecules/img/TransitImg';
import { VehicleImg } from 'react-native-urbi-ui/molecules/img/VehicleImg';
import {
  carPlaceholder,
  placeholder,
  renderComponent,
  transitProviderLogoPlaceholder,
} from '../utils/ComponentPreview';

class Images extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'Selection',
          <Selection title="DriveNow" body="AB 123 CD" footer="BMW Active Tourer" />
        )}
        {renderComponent(
          'VehicleImg',
          <VehicleImg image={carPlaceholder} providerLogo={placeholder} />
        )}
        {renderComponent(
          'VehicleImg',
          <VehicleImg image={carPlaceholder} providerLogo={placeholder} />
        )}
        {renderComponent('BikeImg', <BikeImg image={carPlaceholder} providerLogo={placeholder} />)}
        {renderComponent('StationImg', <StationImg providerLogo={placeholder} />)}
        {renderComponent(
          'TransitImg',
          <TransitImg image={placeholder} providerLogo={transitProviderLogoPlaceholder} />
        )}
      </ScrollView>
    );
  }
}

export default Images;
