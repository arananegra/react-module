import { actionsEnums } from "common/actionEnums";
import { createDefaultHotelEditVm, HotelEditVm } from "../hotel-edit.vm";
import { IOnClickEditHotelAction } from "../actions";

export type HotelEditState = HotelEditVm;

const defaultHotelEditState = (): HotelEditState => createDefaultHotelEditVm();

export const hotelEditReducer = (state: HotelEditState = defaultHotelEditState(), action): HotelEditState => {
  switch (action.type) {
    case actionsEnums.ON_CLICK_HOTEL_TO_EDIT:
      return handleClickEditHotelAction(state, action);
  }
  return state;
}

const handleClickEditHotelAction = (state: HotelEditState, action: IOnClickEditHotelAction): HotelEditState => ({
  ...state,
  hotelSelectedToEdit: action.hotelToEdit,
});