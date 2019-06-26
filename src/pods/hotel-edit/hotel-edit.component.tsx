import * as React from "react"
import { HotelEntityVm } from "../hotel-collection/hotel-collection.vm";
import { useSelector } from 'react-redux';
import { State } from "../../reducers";

export const HotelEdit = () => {

  const hotel: HotelEntityVm = useSelector((state: State) => {
    return state.hotelEdit.hotelSelectedToEdit
  });

  return (
    <h1>editar hotel {hotel.name}</h1>
  )
}