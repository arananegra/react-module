import Axios from 'axios';
import { baseApiUrl, noCitySelected } from 'core'
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

/*export const getHotel = (id: string): Promise<HotelEntityApi> => {
  return new Promise<HotelEntityApi>((resolve, reject) =>
    Axios.get<HotelEntityApi>(`${getHotelUrl}/${id}`)
      .then((response) => setTimeout(() => {
        resolve(response.data);
      }, 1000))
      .catch(e => reject(e))
  );
}*/

const cities: CityApiEntityApi[] = [
  {
    id: noCitySelected,
    value: noCitySelected
  },
  {
    id: "Seattle",
    value: "Seattle"
  },
  {
    id: "Chicago",
    value: "Chicago"
  },
  {
    id: "New York",
    value: "New York"
  },
  {
    id: "California",
    value: "California"
  },
  {
    id: "Burlingame",
    value: "Burlingame"
  }
];


export const getHotelEditCityList = (): Promise<CityApiEntityApi[]> => {
  return new Promise<CityApiEntityApi[]>((resolve) => {
    resolve(cities)
  })
}