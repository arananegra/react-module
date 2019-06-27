import { actionsEnums } from "common/actionEnums";
import { createDefaultHotelEditVm, HotelEditVm } from "../hotel-edit.vm";
import { IOnClickEditHotelAction } from "../actions";
import { IUpdateHotelEditFieldsAction } from "../actions/onUpdateHotelEditActions";

export type HotelEditState = HotelEditVm;

const defaultHotelEditState = (): HotelEditState => createDefaultHotelEditVm();

export const hotelEditReducer = (state: HotelEditState = defaultHotelEditState(), action): HotelEditState => {
  switch (action.type) {
    case actionsEnums.ON_LOAD_HOTEL_TO_EDIT:
      return handleClickEditHotelAction(state, action);

    case actionsEnums.UPDATE_HOTEL_EDIT_FIELD:
      return handleHotelEditChangeAction(state, action);
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
