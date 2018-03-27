import {City} from '../../general/general';

export interface Mobile {
  id: number;
  names: string;
  last_names: string;
  identification: string;
  phone1: string;
  phone2: string;
  address: string;
  city: City;
  priority: number;
  vehicle_type: string;
  vehicle_ide: string;
  picture: string;

}
