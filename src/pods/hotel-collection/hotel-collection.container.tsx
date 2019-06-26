import * as React from "react";
import { HotelCollectionComponent } from './hotel-collection.component'
import { HotelEntityVm } from "./hotel-collection.vm";
import { getHotelCollection } from './hotel-collection.api';
import { mapFromApiCollectionToVmCollection } from './hotel-collection.mapper'
import { useDispatch } from "react-redux";
import { onClickEditHotelActionThunk } from "../hotel-edit/actions";
import { setHotelCollectionYPositionAction } from "./actions";

export const HotelCollectionContainer = () => {
  const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>([])

  const dispatch = useDispatch();

  const onEditHotelClick = (hotel: HotelEntityVm) => {
    dispatch(setHotelCollectionYPositionAction(window.scrollY))
    dispatch(onClickEditHotelActionThunk(hotel.id))
  }

  React.useEffect(() => {
    getHotelCollection().then((result) => {
      const hotelCollectionVm = mapFromApiCollectionToVmCollection(result);
      setHotelCollection(hotelCollectionVm);
    });
  }, []);

  return (
    <HotelCollectionComponent onEditHotelClick={onEditHotelClick} hotelCollection={hotelCollection}/>
  );
}