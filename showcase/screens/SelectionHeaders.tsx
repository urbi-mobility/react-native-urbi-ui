import React, { ReactElement } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SelectionHeader } from 'react-native-urbi-ui/components/SelectionHeader';
import { BikeStationDetails } from 'react-native-urbi-ui/molecules/BikeStationDetails';
import { CarStationDetails } from 'react-native-urbi-ui/molecules/CarStationDetails';
import { BikeImg, BikeImgUnmemoized } from 'react-native-urbi-ui/molecules/img/BikeImg';
import { Selection } from 'react-native-urbi-ui/molecules/img/Selection';
import { StationImg } from 'react-native-urbi-ui/molecules/img/StationImg';
import { VehicleImg, VehicleImgUnmemoized } from 'react-native-urbi-ui/molecules/img/VehicleImg';
import {
  bikePlaceholder,
  carPlaceholder,
  kickscooterPlaceholder,
  placeholder,
  renderComponent,
  scooterPlaceholder,
} from '../utils/ComponentPreview';

const renderSelectionHeader = (
  title: string,
  body: string,
  footer: string,
  image: ReactElement<typeof VehicleImgUnmemoized> | ReactElement<typeof BikeImgUnmemoized>
) => {
  const selection = <Selection title={title} body={body} footer={footer} />;

  return renderComponent('SelectionHeader', <SelectionHeader content={selection} img={image} />);
};

class SelectionHeaders extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'SelectionHeader (stationary)',
          <SelectionHeader
            content={
              <Selection
                title="Ubeeqo"
                body={<CarStationDetails cars={4} />}
                footer="Wrangelstraße (Kreuzberg)"
              />
            }
            img={<StationImg providerLogo={placeholder} />}
          />
        )}
        {renderComponent(
          'SelectionHeader (bike station)',
          <SelectionHeader
            content={
              <Selection
                title="NextBike"
                body={<BikeStationDetails bikes={11} freeParkingSpots={5} />}
                footer="Wiener Straße - 1455"
              />
            }
            img={<StationImg providerLogo={placeholder} />}
          />
        )}
        {renderComponent(
          'SelectionHeader (bike station, no parking)',
          <SelectionHeader
            content={
              <Selection
                title="NextBike"
                body={<BikeStationDetails bikes={11} />}
                footer="Wiener Straße - 1455"
              />
            }
            img={<StationImg providerLogo={placeholder} />}
          />
        )}
        {renderSelectionHeader(
          'Miles',
          'MAX POWER PLATE',
          'Audi A3',
          <VehicleImg image={carPlaceholder} providerLogo={placeholder} />
        )}
        {renderSelectionHeader(
          'ofo',
          'Bike with Low steps',
          'OMgoKa',
          <BikeImg image={bikePlaceholder} providerLogo={placeholder} />
        )}
        {renderSelectionHeader(
          'Cooltra',
          'A super long license plate',
          'Askoll',
          <VehicleImg image={scooterPlaceholder} providerLogo={placeholder} />
        )}
        {renderSelectionHeader(
          'Lime',
          'AA123',
          'Lime-E',
          <VehicleImg image={kickscooterPlaceholder} providerLogo={placeholder} />
        )}
      </ScrollView>
    );
  }
}

export default SelectionHeaders;
