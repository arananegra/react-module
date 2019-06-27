import { actionsEnums } from "common";
import { HotelEntityVm } from "../hotel-edit.vm";

export interface IUpdateHotelEditFieldsAction {
  type: string;
  hotelEditToUpdate: HotelEntityVm;
}

export const onUpdateHotelEditFieldsActionThunk = (hotelEditToUpdate: HotelEntityVm, fieldId: string, value: string): Function => {
  return (dispatch) => {
    dispatch(updateHotelEditFieldsAction(hotelEditToUpdate))
  }
}

export const updateHotelEditFieldsAction = (hotelEditToUpdate: HotelEntityVm): IUpdateHotelEditFieldsAction => ({
  type: actionsEnums.UPDATE_HOTEL_EDIT_FIELD,
  hotelEditToUpdate
});