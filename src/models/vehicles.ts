import { ImageRequireSource } from 'react-native';

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface Location extends Coordinates {
  address?: string;
}

export interface BoundingBox {
  topLeft: Coordinates;
  bottomRight: Coordinates;
}

export interface BoundingBoxWithId extends BoundingBox {
  id: string;
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

const vehicleTypes = ['bike', 'car', 'kickscooter', 'scooter'];

export const isVehicle = (arg: { type: PinType }): arg is Vehicle =>
  vehicleTypes.indexOf(arg.type) > -1;

export interface Pin {
  key: string;
  id: string;
  image: ImageRequireSource;
  location: Location;
  provider: string;
  type: PinType;
  name?: string;
  filteredOut?: boolean;
  cacheUntil?: number;
}

export interface Vehicle extends Pin {
  licensePlate?: string;
  model?: string;
  transmission?: 'manual' | 'automatic';
  fuel?: Fuel;
  seats?: number;
  babySeat?: boolean;
  prices?: Prices;
  priceId?: string;
  cacheUntil?: number;
  imageUrl?: string;
}

export interface Bike extends Vehicle {
  electric?: true;
}

export interface Station extends Pin {
  vehicleCount: number;
  ebikes?: number;
  parkingSlots?: number;
}

export interface Fuel {
  type: 'diesel' | 'electric' | 'hybrid' | 'hydrogen' | 'petrol';
  percent?: number;
  range?: number;
}

export interface Price {
  amount: number;
  unit: 'min' | 'hour' | 'day' | 'km' | 'custom';
  fixed?: number;
  offer?: string;
  label?: string;
}

export interface Prices {
  currency: string;
  moving?: Price[];
  parked?: Price[];
  daily?: Price[];
  offers?: Price[];
  label?: string;
}
