import * as React from "react";
import { HotelEntityVm } from "./hotel-collection.vm";
import { HotelCard } from "./components/hotel-card.component";
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from "@material-ui/core/styles";

interface Props {
  hotelCollection: HotelEntityVm[];
  onEditHotelClick: (hotelClicked: HotelEntityVm) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  listLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '2%'
  }
}));

export const HotelCollectionComponent = (props: Props) => {
  const {hotelCollection, onEditHotelClick} = props;

  const classes = useStyles();

  return (
    <div className={classes.listLayout}>
      {
        hotelCollection.map((hotel) => <HotelCard key={hotel.id} onEditHotelClick={onEditHotelClick} hotel={hotel}/>)
      }
    </div>

  );
}