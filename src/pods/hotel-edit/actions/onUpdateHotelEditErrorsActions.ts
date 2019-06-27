import { FieldValidationResult } from "lc-form-validation";
import { actionsEnums } from "common";

export interface IUpdateHotelEditErrorsAction {
  type: string;
  fieldId: string;
  value: any;
  fieldValidationResult: FieldValidationResult;
}

export const updateHotelEditErrorsAction = (fieldValidationResult: FieldValidationResult, fieldId: string, value: string): IUpdateHotelEditErrorsAction => ({
  type: actionsEnums.UPDATE_HOTEL_EDIT_ERRORS,
  fieldId,
  value,
  fieldValidationResult
});

export const onUpdateHotelEditErrorsThunk = (fieldValidationResult: FieldValidationResult, fieldId: string, value: string): Function => {
  return (dispatch) => {
    dispatch(updateHotelEditErrorsAction(fieldValidationResult, fieldId, value))
  }
}