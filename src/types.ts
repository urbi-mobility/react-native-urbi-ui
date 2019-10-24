export interface Coordinates {
  lat: number;
  lon: number;
}

export interface Location extends Coordinates {
  address?: string;
}

export type PinType =
  | 'bike'
  | 'car'
  | 'kickscooter'
  | 'other'
  | 'public_transport'
  | 'ride_sharing'
  | 'scooter'
  | 'station'
  | 'taxi';
