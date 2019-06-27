import * as React from "react"
import { useSelector } from 'react-redux';
import { State } from "../../reducers";
import { HotelEditComponent } from "./hotel-edit.component";
import { LoadingPropagateSpinnerComponent } from "../../common/components";
import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { CityApiEntityApi } from "../../common/api-entities/city-api.entity";
import { getHotelEditCityList } from "./hotel-edit.api";
import { HotelEntityVm } from "./hotel-edit.vm";

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

  const [cities, setCities] = React.useState<CityApiEntityApi[]>([])

  React.useEffect(() => {
    getHotelEditCityList().then((result: CityApiEntityApi[]) => {
      setCities(result);
    });
  }, []);

  const classes = useStyles();

  return (
    <>
      <LoadingPropagateSpinnerComponent className={classes.spinner} area={'hotel-edit'}>
        <HotelEditComponent
          onClickSave={() => console.log('save')}
          onChangeField={((fieldId, value) => console.log(fieldId, value))} cities={cities}
          hotelToEdit={hotelToEdit}/>
      </LoadingPropagateSpinnerComponent>
    </>
  )
}