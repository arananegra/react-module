import { HotelEntityVm } from './hotel-collection.vm';
import { basePicturesUrl } from 'core';
import { HotelEntityApi } from "common";

export const mapFromApiToVm = (apiEntity: HotelEntityApi): HotelEntityVm => ({
  id: apiEntity.id,
  picture: `${basePicturesUrl}${apiEntity.thumbNailUrl}`,
  name: apiEntity.name,
  rating: apiEntity.hotelRating,
  description: apiEntity.shortDescription,
  address: apiEntity.address1,
});

export const mapFromApiCollectionToVmCollection = (apiEntityCollection: HotelEntityApi[]): HotelEntityVm[] =>
  apiEntityCollection.map((apiEntity) => mapFromApiToVm(apiEntity));

