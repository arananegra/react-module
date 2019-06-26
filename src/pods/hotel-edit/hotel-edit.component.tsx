import * as React from "react"
import { HotelEntityVm } from "../hotel-collection/hotel-collection.vm";
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

interface Props {
  hotelToEdit: HotelEntityVm
}

export const HotelEditComponent = (props: Props) => {

  const classes = useStyles();

  const {hotelToEdit} = props

  return (
    <div className={classes.formContainer}>
      <TextFieldForm
        label="Name"
        name="name"
        value={hotelToEdit.name}
        onChange={() => console.log()}
      />
      <div className={classes.image}>
        <img
          src={hotelToEdit.picture}
          style={{width: '20rem'}}/>
      </div>

    </div>
  )
}