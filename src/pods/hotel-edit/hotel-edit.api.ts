import Axios from 'axios';
import { baseApiUrl } from 'core'
import { HotelEntityApi } from "common";

const getHotelUrl = `${baseApiUrl}/api/hotel`;

export const getHotel = (id: string): Promise<HotelEntityApi> => {
  return new Promise<HotelEntityApi>((resolve, reject) =>
    Axios.get<HotelEntityApi>(getHotelUrl)
      .then((response) => resolve(response.data)));
}