import * as React from "react"
import { HotelEntityVm } from "../hotel-collection/hotel-collection.vm";
import { TextFieldForm } from "../../common/components";
import StarRatings from 'react-star-ratings';
import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

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
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


interface Props {
  hotelToEdit: HotelEntityVm
}

export const HotelEditComponent = (props: Props) => {

  const classes = useStyles();

  const [rating, setRating] = React.useState(0);

  const {hotelToEdit} = props

  const [values, setValues] = React.useState({
    currency: 'EUR',
  });

  const onStarClick = (nextValue) => {
    setRating(nextValue)
  }

  const handleChange = (name) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [name]: event.target.value});
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
        <TextField
          id="cities-selector"
          select
          error={Boolean("Esto es un error grave")}
          label="Seleccione ciudad"
          className={classes.textField}
          value={values.currency}
          onChange={handleChange('currency')}
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <TextField
        id="standard-textarea"
        label="Descripción"
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
        <Button onClick={() => console.log("guardar")}
                style={{outline: 'none'}}
                variant="contained"
                color="primary">
          Guardar
        </Button>

    </div>
  )
}