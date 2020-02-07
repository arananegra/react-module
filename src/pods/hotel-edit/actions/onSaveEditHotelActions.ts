import { actionsEnums } from "common";
import { toast } from 'react-toastify';
import { HotelEntityVm } from "../hotel-edit.vm";
import { hotelFormValidation } from "../hotel-edit.validation";
import { FormValidationResult } from "@lemoncode/fonk";

interface ISaveHotelEditAction {
	type: string
}

export const onSaveHotelEditRequestThunk = (hotelEditToSave: HotelEntityVm): Function => {
	return (dispatch) => {
		hotelFormValidation
			.validateForm(hotelEditToSave)
			.then((formValidationResult: FormValidationResult) => {
				if (formValidationResult.succeeded) {
					toast.success("Hotel guardado (API por implementar)");
					dispatch(onSaveHotelEditAction())
				} else {
					toast.error("No se puede guardar el hotel. Revisa los campos");
				}
			});
	}
}

export const onSaveHotelEditAction = (): ISaveHotelEditAction => ({
	type: actionsEnums.ON_UPDATE_HOTEL_SUCCEED
});
