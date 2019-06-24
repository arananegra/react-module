import * as React from "react";
import { HotelEntityVm } from "./hotel-collection.vm";
import { HotelCard } from "./components/hotel-card.component";
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from "@material-ui/core/styles";

interface Props {
  hotelCollection: HotelEntityVm[];
}

const useStyles = makeStyles((theme: Theme) => ({
  listLayout: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'blue',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: 'yellow',
      display: 'flex',
      flexWrap:'wrap',
      justifyContent: 'space-between',
    },
  }
}));

export const HotelCollectionComponent = (props: Props) => {
  const {hotelCollection} = props;

  const classes = useStyles();

  return (
    <div className={classes.listLayout}>
      {
        hotelCollection.map((hotel) => <HotelCard key={hotel.id} hotel={hotel}/>)
      }
    </div>

  );
}