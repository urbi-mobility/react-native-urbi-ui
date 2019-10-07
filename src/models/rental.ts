import { Location, Vehicle } from './vehicles';

export interface Rental {
  id: string;
  provider: string;
  cityId: string;
  status: 'reserved' | 'running' | 'parked' | 'finished';
  vehicle: Vehicle;
  startTime?: number;
  endTime?: number;
  cost?: number;
  drivenDistance?: number;
  parkTime?: number;
  startLocation?: Location;
}

export type RentalAction = 'reserve' | 'cancel' | 'lock' | 'unlock' | 'open' | 'end';
