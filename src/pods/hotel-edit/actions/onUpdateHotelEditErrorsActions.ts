import { FieldValidationResult } from "lc-form-validation";
import { actionsEnums } from "common";

export interface IUpdateHotelEditErrorsAction {
  type: string;
  fieldId: any;
  fieldValidationResult: FieldValidationResult;
}

export const onUpdateHotelEditErrorsThunk = (fieldValidationResult: FieldValidationResult, fieldId: any): Function => {
  return (dispatch) => {
    dispatch(updateHotelEditErrorsAction(fieldValidationResult, fieldId))
  }
}

export const updateHotelEditErrorsAction = (fieldValidationResult: FieldValidationResult, fieldId: string): IUpdateHotelEditErrorsAction => ({
  type: actionsEnums.UPDATE_HOTEL_EDIT_ERRORS,
  fieldId,
  fieldValidationResult
});