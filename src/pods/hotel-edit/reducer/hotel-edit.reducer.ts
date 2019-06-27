import { actionsEnums } from "common/actionEnums";
import { createDefaultHotelEditVm, HotelEditFormErrors, HotelEditVm, HotelEntityVm } from "../hotel-edit.vm";
import { IOnClickEditHotelAction } from "../actions";
import { IUpdateHotelEditFieldsAction } from "../actions/onUpdateHotelEditActions";
import { IUpdateHotelEditErrorsAction } from "../actions/onUpdateHotelEditErrorsActions";

export type HotelEditState = HotelEditVm;

const defaultHotelEditState = (): HotelEditState => createDefaultHotelEditVm();

export const hotelEditReducer = (state: HotelEditState = defaultHotelEditState(), action): HotelEditState => {
  switch (action.type) {
    case actionsEnums.ON_LOAD_HOTEL_TO_EDIT:
      return handleClickEditHotelAction(state, action);

    case actionsEnums.UPDATE_HOTEL_EDIT_FIELD:
      return handleHotelEditChangeAction(state, action);

    case actionsEnums.UPDATE_HOTEL_EDIT_ERRORS:
      return handleHotelEditErrorsChangeAction(state, action)
  }
  return state;
}

const handleClickEditHotelAction = (state: HotelEditState, action: IOnClickEditHotelAction): HotelEditState => ({
  ...state,
  hotelSelectedToEdit: action.hotelToEdit,
});

const handleHotelEditChangeAction = (state: HotelEditState, action: IUpdateHotelEditFieldsAction): HotelEditState => ({
  ...state,
  hotelSelectedToEdit: action.hotelEditToUpdate,
});

const handleHotelEditErrorsChangeAction = (state: HotelEditState, action: IUpdateHotelEditErrorsAction): HotelEditState => {
  const newHotelEdit: HotelEntityVm = {
    ...state.hotelSelectedToEdit,
    [action.fieldId]: action.value
  };

  const newHotelEditErrors: HotelEditFormErrors = {
    ...state.hotelEditFormErrors,
    [action.fieldId]: action.fieldValidationResult
  };

  return {
    ...state,
    hotelSelectedToEdit: newHotelEdit,
    hotelEditFormErrors: newHotelEditErrors
  };
};
