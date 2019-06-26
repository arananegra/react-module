import Axios from 'axios';
import { baseApiUrl } from 'core'
import { HotelEntityApi } from "common";

const getHotelUrl = `${baseApiUrl}/api/hotels`;

export const getHotel = (id: string): Promise<HotelEntityApi> => {
  return new Promise<HotelEntityApi>((resolve, reject) =>
    Axios.get<HotelEntityApi>(`${getHotelUrl}/${id}`)
      .then((response) => setTimeout(() => {
        resolve(response.data);
      }, 3000))
      .catch(e => reject(e))
  );
}