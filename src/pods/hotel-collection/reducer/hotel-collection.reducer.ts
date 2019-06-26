import { actionsEnums } from "common/actionEnums";
import { createDefaultHotelVm, HotelCollectionVm } from "../hotel-collection.vm";
import { ISetHotelCollectionYPositionAction } from "../actions";

export type HotelCollectionState = HotelCollectionVm;

const defaultHotelCollectionState = (): HotelCollectionState => createDefaultHotelVm();

export const hotelCollectionReducer = (state: HotelCollectionState = defaultHotelCollectionState(), action): HotelCollectionState => {
  switch (action.type) {
    case actionsEnums.SET_HOTEL_COLLECTION_Y_POSITION:
      return handleSetYPositionAction(state, action);
  }
  return state;
}


const handleSetYPositionAction = (state: HotelCollectionState, action: ISetHotelCollectionYPositionAction): HotelCollectionState => ({
  ...state,
  yListPosition: action.yPosition,
});