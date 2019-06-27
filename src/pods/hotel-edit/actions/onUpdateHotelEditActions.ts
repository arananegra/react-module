import { actionsEnums } from "common";
import { HotelEntityVm } from "../hotel-edit.vm";
import { FieldValidationResult } from "lc-form-validation";
import { onUpdateHotelEditErrorsThunk } from "./onUpdateHotelEditErrorsActions";
import { hotelFormValidation } from "../hotel-edit.validation";

export interface IUpdateHotelEditFieldsAction {
  type: string;
  hotelEditToUpdate: HotelEntityVm;
}

export const onUpdateHotelEditFieldsActionThunk = (hotelEditToUpdate: HotelEntityVm, fieldId: string, value: string): Function => {
  return (dispatch) => {
    dispatch(updateHotelEditFieldsAction(hotelEditToUpdate))
    hotelFormValidation
      .validateField(hotelEditToUpdate, fieldId, value)
      .then((fieldValidationResult: FieldValidationResult) => {
        dispatch(onUpdateHotelEditErrorsThunk(fieldValidationResult, fieldId, value))
      });
  }
}

export const updateHotelEditFieldsAction = (hotelEditToUpdate: HotelEntityVm): IUpdateHotelEditFieldsAction => ({
  type: actionsEnums.UPDATE_HOTEL_EDIT_FIELD,
  hotelEditToUpdate
});