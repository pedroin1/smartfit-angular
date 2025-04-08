import { TypeFountain, TypeLockerRoom, TypeMask, TypeTowel } from './masks';
import { ISchedule } from './schedule';

export type ILocation = {
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
};
