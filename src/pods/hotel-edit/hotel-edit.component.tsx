import * as React from "react"
import { HotelEntityVm } from "../hotel-collection/hotel-collection.vm";
import { TextFieldArea, TextFieldForm } from "../../common/components";
import StarRatings from 'react-star-ratings';
import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { CityApiEntityApi } from "../../common/api-entities/city-api.entity";
import { TextFieldSelect } from "../../common/components/text-field-select.component";

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

const currencies = [
  {
    value: 'Sin ciudad',
    id: 'Sin ciudad',
  },
  {
    value: 'Málaga',
    id: 'Málaga',
  },
  {
    value: 'Chicago',
    id: 'Chicago',
  },
  {
    value: 'Barcelona',
    id: 'Barcelona',
  },
  {
    value: 'Tokyo',
    id: 'Tokyo',
  },
];


interface Props {
  hotelToEdit: HotelEntityVm;
  //cities: CityApiEntityApi[];
}

export const HotelEditComponent = (props: Props) => {

  const classes = useStyles();

  const [rating, setRating] = React.useState(0);

  const {hotelToEdit} = props

  const [values, setValues] = React.useState({
    currency: 'Málaga',
  });

  const onStarClick = (nextValue) => {
    setRating(nextValue)
  }

  const handleChange = (value) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [value]: event.target.value});
  };

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
            changeRating={onStarClick}
            numberOfStars={5}
            name='rating'
          />
        </div>
        <TextFieldSelect
          label={'Ciudades'}
          onChange={(field, value) => console.log(field, value)}
          value={currencies[1].value}
          name={'Ciudades'}
          items={currencies}/>
      </div>

      <TextFieldArea
        name={'Descripcion'}
        label="Descripción"
        value={hotelToEdit.description}
        multiline={true}
        onChange={() => console.log('')}
        rows={4}
        fullWidth={true}/>


      <Button onClick={() => console.log("guardar")}
              style={{outline: 'none'}}
              variant="contained"
              color="primary">
        Guardar
      </Button>

    </div>
  )
}