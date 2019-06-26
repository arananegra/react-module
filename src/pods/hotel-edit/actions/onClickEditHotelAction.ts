import { actionsEnums } from "common";
import { HotelEntityVm } from "../hotel-edit.vm";
import { routesLinks } from "core";
import { history } from "../../../createHistory";

export interface IOnClickEditHotelAction {
  type: string;
  hotelToEdit: HotelEntityVm
}

export const onClickEditHotelAction = (hotelToEdit: HotelEntityVm): IOnClickEditHotelAction => ({
  type: actionsEnums.ON_CLICK_HOTEL_TO_EDIT,
  hotelToEdit
});

export const onClickEditHotelActionThunk = (hotelToEdit: HotelEntityVm): Function => {
  return (dispatch) => {
    dispatch(onClickEditHotelAction(hotelToEdit))
    history.push(routesLinks.hotelEdit(hotelToEdit.id));
  }
}
