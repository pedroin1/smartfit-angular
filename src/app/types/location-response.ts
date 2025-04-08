import { ILocation } from './location';

export type ILocationResponse = {
  current_country_id: number;
  locations: ILocation[];
  wp_total: number;
  total: number;
  success: boolean;
};
