import { actionsEnums } from "common";
import { ValidationResult } from "@lemoncode/fonk";

export interface IUpdateHotelEditErrorsAction {
  type: string;
  fieldId: any;
  fieldValidationResult: ValidationResult;
}

export const onUpdateHotelEditErrorsThunk = (fieldValidationResult: ValidationResult, fieldId: any): Function => {
  return (dispatch) => {
    dispatch(updateHotelEditErrorsAction(fieldValidationResult, fieldId))
  }
}

export const updateHotelEditErrorsAction = (fieldValidationResult: ValidationResult, fieldId: string): IUpdateHotelEditErrorsAction => ({
  type: actionsEnums.UPDATE_HOTEL_EDIT_ERRORS,
  fieldId,
  fieldValidationResult
});
