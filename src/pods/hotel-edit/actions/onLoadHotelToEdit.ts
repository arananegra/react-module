import { actionsEnums } from "common";
import { HotelEntityVm } from "../hotel-edit.vm";
import { routerSwitchRoutes, routesLinks } from "core";
import { history } from "../../../createHistory";
import { getHotel } from "../hotel-edit.api";
import { toast } from "react-toastify";
import { trackPromise } from "react-promise-tracker";
import { mapFromApiToVm } from "../hotel-edit.mapper";

export interface IOnClickEditHotelAction {
  type: string;
  hotelToEdit: HotelEntityVm
}

export const onLoadHotelToEdit = (hotelToEdit: HotelEntityVm): IOnClickEditHotelAction => ({
  type: actionsEnums.ON_LOAD_HOTEL_TO_EDIT,
  hotelToEdit
});

export const onClickEditHotelActionThunk = (hotelToEditId: string): Function => {
  return (dispatch) => {
    history.push(routesLinks.hotelEdit(hotelToEditId))
    trackPromise(getHotel(hotelToEditId)
      .then((hotelToEditEntityApi) => {
        const hotelToEdit = mapFromApiToVm(hotelToEditEntityApi)
        dispatch(onLoadHotelToEdit(hotelToEdit))
      })
      .catch(() => {
        history.push(routerSwitchRoutes.hotelCollection)
        toast.error("Error cargando el hotel a editar");
      }), 'hotel-edit')
  }
}
