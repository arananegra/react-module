import { actionsEnums } from "common";
import { HotelEditVm } from "../hotel-edit.vm";

export interface IUpdateHotelEditFieldsAction {
  type: string;
  hotelEditToUpdate: HotelEditVm;
}

export const onUpdateHotelEditFieldsActionThunk = (hotelEditToUpdate: HotelEditVm, fieldId: string, value: string): Function => {
  return (dispatch) => {
    dispatch(updateHotelEditFieldsAction(hotelEditToUpdate))
  }
}

export const updateHotelEditFieldsAction = (hotelEditToUpdate: HotelEditVm): IUpdateHotelEditFieldsAction => ({
  type: actionsEnums.UPDATE_HOTEL_EDIT_FIELD,
  hotelEditToUpdate
});