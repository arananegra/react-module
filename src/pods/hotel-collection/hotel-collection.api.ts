import Axios from 'axios';
import {baseApiUrl} from 'core'
import { HotelEntityApi } from "common";

const getHotelsUrl = `${baseApiUrl}/api/hotels`;

export const getHotelCollection = () : Promise<HotelEntityApi[]> => {
  const promise = new Promise<HotelEntityApi[]>((resolve, reject) => 
    Axios.get<HotelEntityApi[]>(getHotelsUrl).then(
      (response) => resolve(response.data)
    ));

  return promise;  
}