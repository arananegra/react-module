import { actionsEnums } from "common/actionEnums";
import { createDefaultHotelVm, HotelVm } from "../hotel-collection.vm";
import { IOnClickEditHotelAction } from "../actions";

export type HotelCollectionState = HotelVm;

const defaultHotelCollectionState = (): HotelCollectionState => createDefaultHotelVm();

export const hotelCollectionReducer = (state: HotelCollectionState = defaultHotelCollectionState(), action): HotelCollectionState => {
  switch (action.type) {
    case actionsEnums.ON_CLICK_EDIT_HOTEL:
      return handleClickEditHotelAction(state, action);
  }
  return state;
}

const handleClickEditHotelAction = (state: HotelCollectionState, action: IOnClickEditHotelAction): HotelCollectionState => ({
  ...state,
  hotelSelectedToEdit: action.hotelToEdit,
});