export interface ILocationResponse {
  current_country_id: number;
  locations: ILocation[];
  wp_total: number;
  total: number;
  success: boolean;
}

export interface ILocation {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: TypeMask;
  towel: TypeTowel;
  fountain: TypeFountain;
  locker_room: TypeLockerRoom;
  schedules: ISchedule[];
  street: string;
  region: string;
  city_name: string;
  state_name: string;
  uf: string;
}

interface ISchedule {
  weekdays: string;
  hour: string;
}

export type TypeMask = 'recommended' | 'required';
export type TypeTowel = TypeMask;
export type TypeFountain = 'not_allowed' | 'partial';
export type TypeLockerRoom = 'allowed' | 'closed' | 'partial';
export type TypesMomentoDia = 'manha' | 'tarde' | 'noite';

export const HORARIOS_DIA = {
  manha: {
    inicio: '06',
    fim: '12',
  },
  tarde: {
    inicio: '12',
    fim: '18',
  },
  noite: {
    inicio: '18',
    fim: '23',
  },
};
