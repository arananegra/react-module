import { actionsEnums } from "common";
import { HotelEntityVm } from "../hotel-edit.vm";
import { onUpdateHotelEditErrorsThunk } from "./onUpdateHotelEditErrorsActions";
import { hotelFormValidation } from "../hotel-edit.validation";
import { ValidationResult } from "@lemoncode/fonk";

export interface IUpdateHotelEditFieldsAction {
	type: string;
	hotelEditToUpdate: HotelEntityVm;
}

export const onUpdateHotelEditFieldsActionThunk = (hotelEditToUpdate: HotelEntityVm, fieldId: string, value: string): Function => {
	return (dispatch) => {
		dispatch(updateHotelEditFieldsAction(hotelEditToUpdate))
		hotelFormValidation
			.validateField(fieldId, value, hotelEditToUpdate)
			.then((fieldValidationResult: ValidationResult) => {
				dispatch(onUpdateHotelEditErrorsThunk(fieldValidationResult, fieldId))
			});
	}
}

export const updateHotelEditFieldsAction = (hotelEditToUpdate: HotelEntityVm): IUpdateHotelEditFieldsAction => ({
	type: actionsEnums.UPDATE_HOTEL_EDIT_FIELD,
	hotelEditToUpdate
});
