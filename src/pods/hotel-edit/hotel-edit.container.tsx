import * as React from "react"
import { HotelEntityVm } from "../hotel-collection/hotel-collection.vm";
import { useSelector } from 'react-redux';
import { State } from "../../reducers";
import { HotelEditComponent } from "./hotel-edit.component";

export const HotelEditContainer = () => {

  const hotelToEdit: HotelEntityVm = useSelector((state: State) => {
    return state.hotelEdit.hotelSelectedToEdit
  });

  return (
    <HotelEditComponent hotelToEdit={hotelToEdit}/>
  )
}