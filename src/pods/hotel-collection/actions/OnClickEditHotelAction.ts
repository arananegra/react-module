import { actionsEnums } from "common";
import { HotelEntityVm } from "../hotel-collection.vm";

export interface IOnClickEditHotelAction {
  type: string;
  hotelToEdit: HotelEntityVm
}

export const onClickEditHotelAction = (hotelToEdit: HotelEntityVm): IOnClickEditHotelAction => ({
  type: actionsEnums.ON_CLICK_EDIT_HOTEL,
  hotelToEdit
});