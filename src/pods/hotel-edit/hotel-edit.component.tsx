import * as React from "react"
import { HotelEntityVm } from "../hotel-collection/hotel-collection.vm";
import { useSelector } from 'react-redux';
import { State } from "../../reducers";
import { TextFieldForm } from "../../common/components";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  image: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center'
  }
});

export const HotelEdit = () => {

  const classes = useStyles();

  const hotel: HotelEntityVm = useSelector((state: State) => {
    return state.hotelEdit.hotelSelectedToEdit
  });

  return (
    <div className={classes.formContainer}>
      <TextFieldForm
        label="Name"
        name="name"
        value={hotel.name}
        onChange={() => console.log()}
      />
      <div className={classes.image}>
        <img
          src={hotel.picture}
          style={{width: '20rem'}}/>
      </div>

    </div>
  )
}