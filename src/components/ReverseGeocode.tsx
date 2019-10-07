import React from 'react';
import { Location } from 'src/models/vehicles';

type ReverseGeocodedProps = {
  location: Location;
  render: (reverseGeocodedAddress: string) => any;
};

type ReverseGeocodedState = {
  reverseGeocodedAddress: string;
};

const resolve = async (location: Location) => {
  if (location.address) {
    return location.address;
  } else {
    // TODO make the API call
    return '// TODO call Google 😅';
  }
};

class ReverseGeocoded extends React.PureComponent<ReverseGeocodedProps, ReverseGeocodedState> {
  constructor(props: ReverseGeocodedProps) {
    super(props);
    this.reverseGeocode = this.reverseGeocode.bind(this);
    this.state = { reverseGeocodedAddress: '' };
    this.reverseGeocode(props.location);
  }

  reverseGeocode(location: Location) {
    resolve(location).then((reverseGeocodedAddress) => this.setState({ reverseGeocodedAddress }));
  }

  componentWillReceiveProps(nextProps: ReverseGeocodedProps) {
    this.reverseGeocode(nextProps.location);
  }

  render() {
    return this.props.render(this.state.reverseGeocodedAddress);
  }
}

export default ReverseGeocoded;
