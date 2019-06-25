import * as React from "react";
import { HotelCollectionComponent } from './hotel-collection.component'
import { HotelEntityVm } from "./hotel-collection.vm";
import { getHotelCollection } from './hotel-collection.api';
import { mapFromApiCollectionToVmCollection } from './hotel-collection.mapper'
import { RouteComponentProps, withRouter } from "react-router-dom";
import { routesLinks } from "core";
import { useDispatch } from "react-redux";
import { onClickEditHotelAction } from "./actions";

interface Props extends RouteComponentProps {
}

export const HotelCollectionContainerInner = (props: Props) => {
  const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>([])

  const dispatch = useDispatch();

  const onEditHotelClick = (hotel: HotelEntityVm) => {
    dispatch(onClickEditHotelAction(hotel))
    props.history.push(routesLinks.hotelEdit(hotel.id));
  }

  React.useEffect(() => {
    getHotelCollection().then((result) => {
      const hotelCollectionVm = mapFromApiCollectionToVmCollection(result);
      setHotelCollection(hotelCollectionVm);
    })
  }, [])

  return (
    <HotelCollectionComponent onEditHotelClick={onEditHotelClick} hotelCollection={hotelCollection}/>
  );
}

export const HotelCollectionContainer = withRouter<Props>(HotelCollectionContainerInner);