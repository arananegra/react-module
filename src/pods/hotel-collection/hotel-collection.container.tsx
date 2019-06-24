import * as React from "react";
import { HotelCollectionComponent } from './hotel-collection.component'
import { HotelEntityVm } from "./hotel-collection.vm";
import { getHotelCollection } from './hotel-collection.api';
import { mapFromApiCollectionToVmCollection } from './hotel-collection.mapper'

export const HotelCollectionContainer = () => {
  const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>([])

  React.useEffect(() => {
    getHotelCollection().then((result) => {
      const hotelCollectionVm = mapFromApiCollectionToVmCollection(result);
      setHotelCollection(hotelCollectionVm);
    })
  }, [])

  return (
    <HotelCollectionComponent hotelCollection={hotelCollection}/>
  );
}