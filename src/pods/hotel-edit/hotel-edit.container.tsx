import * as React from "react"
import { HotelEntityVm } from "../hotel-collection/hotel-collection.vm";
import { useSelector } from 'react-redux';
import { State } from "../../reducers";
import { HotelEditComponent } from "./hotel-edit.component";
import { LoadingBounceSpinnerComponent } from "../../common/components";
import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
  spinner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export const HotelEditContainer = () => {

  const hotelToEdit: HotelEntityVm = useSelector((state: State) => {
    return state.hotelEdit.hotelSelectedToEdit
  });

  const classes = useStyles();

  return (
    <>
      <LoadingBounceSpinnerComponent className={classes.spinner} area={'hotel-edit'}>
        <HotelEditComponent hotelToEdit={hotelToEdit}/>
      </LoadingBounceSpinnerComponent>
    </>
  )
}