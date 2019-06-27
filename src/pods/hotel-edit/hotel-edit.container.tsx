import * as React from "react"
import { HotelEntityVm } from "../hotel-collection/hotel-collection.vm";
import { useSelector } from 'react-redux';
import { State } from "../../reducers";
import { HotelEditComponent } from "./hotel-edit.component";
import { LoadingPropagateSpinnerComponent } from "../../common/components";
import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
  spinner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.3)'
  }
}));

export const HotelEditContainer = () => {

  const hotelToEdit: HotelEntityVm = useSelector((state: State) => {
    return state.hotelEdit.hotelSelectedToEdit
  });

  const classes = useStyles();

  return (
    <>
      <LoadingPropagateSpinnerComponent className={classes.spinner} area={'hotel-edit'}>
        <HotelEditComponent hotelToEdit={hotelToEdit}/>
      </LoadingPropagateSpinnerComponent>
    </>
  )
}