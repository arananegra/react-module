import * as React from "react"
import { TextFieldArea, TextFieldForm } from "../../common/components";
import StarRatings from 'react-star-ratings';
import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from "@material-ui/core/Button";
import { CityApiEntityApi } from "../../common/api-entities/city-api.entity";
import { TextFieldSelect } from "../../common/components/text-field-select.component";
import { HotelEntityVm } from "./hotel-edit.vm";

const useStyles = makeStyles((theme: Theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: '1rem',
    marginRight: '1rem',
    marginBottom: '1rem'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  image: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center'
  },
  ratingAndCities: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  button: {
    marginBottom: '2rem',
    width: '90vw'
  }
}));

interface Props {
  hotelToEdit: HotelEntityVm;
  cities: CityApiEntityApi[];
  onClickSave: () => void;
  onChangeField: (fieldId: string, value: string) => void;

}

export const HotelEditComponent = (props: Props) => {

  const classes = useStyles();

  const {hotelToEdit, onChangeField, cities, onClickSave} = props

  const onStarClick = (name) => (nextValue) => {
    onChangeField(name, nextValue)
  }

  return (
    <div className={classes.formContainer}>
      <TextFieldForm
        label="Name"
        name="name"
        value={hotelToEdit.name}
        onChange={onChangeField}
      />
      <div className={classes.image}>
        <img
          src={hotelToEdit.picture}
          style={{width: '50vw'}}/>
      </div>

      <div className={classes.ratingAndCities}>
        <div style={{
          display: "flex",
          alignItems: "center",
          padding: '0.70rem'
        }}>
          <StarRatings
            rating={hotelToEdit.rating}
            starDimension={'4vw'}
            starSpacing={'0.5vw'}
            starRatedColor="blue"
            changeRating={onStarClick('rating')}
            numberOfStars={5}
            name='rating'
          />
        </div>
        <div style={{
          width: '40%'
        }}>
          <TextFieldSelect
            fullWidth={true}
            label={'Ciudades'}
            onChange={onChangeField}
            value={hotelToEdit.city}
            name={'cities'}
            items={cities}/>
        </div>
      </div>

      <TextFieldArea
        name={'Description'}
        label="Descripción"
        value={hotelToEdit.description}
        multiline={true}
        onChange={onChangeField}
        rows={4}
        fullWidth={true}/>

      <Button onClick={onClickSave}
              style={{outline: 'none'}}
              variant="contained"
              color="primary">
        Guardar
      </Button>

    </div>
  )
}