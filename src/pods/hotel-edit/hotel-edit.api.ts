import Axios from 'axios';
import { baseApiUrl } from 'core'
import { HotelEntityApi } from "common";
import { CityApiEntityApi } from "../../common/api-entities/city-api.entity";

const getHotelUrl = `${baseApiUrl}/api/hotels`;

export const getHotel = (id: string): Promise<HotelEntityApi> => {
  return new Promise<HotelEntityApi>((resolve, reject) =>
    Axios.get<HotelEntityApi>(`${getHotelUrl}/${id}`)
      .then((response) => resolve(response.data))
      .catch(e => reject(e))
  );
}

const cities: CityApiEntityApi[] = [
  {
    value: 'Sin ciudad',
    id: 'Sin ciudad',
  },
  {
    value: 'Málaga',
    id: 'Málaga',
  },
  {
    value: 'Chicago',
    id: 'Chicago',
  },
  {
    value: 'Barcelona',
    id: 'Barcelona',
  },
  {
    value: 'Tokyo',
    id: 'Tokyo',
  },
];


export const getHotelEditCityList = (): Promise<CityApiEntityApi[]> => {
  return new Promise<CityApiEntityApi[]>((resolve) => {
    resolve(cities)
  })
}