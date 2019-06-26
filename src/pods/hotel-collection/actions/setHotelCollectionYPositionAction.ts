import { actionsEnums } from "common";

export interface ISetHotelCollectionYPositionAction {
  type: string;
  yPosition: number
}

export const setHotelCollectionYPositionAction = (yPosition: number): ISetHotelCollectionYPositionAction => ({
  type: actionsEnums.SET_HOTEL_COLLECTION_Y_POSITION,
  yPosition
});
