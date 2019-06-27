import * as React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { State } from "../../reducers";
import { HotelEditComponent } from "./hotel-edit.component";
import { LoadingPropagateSpinnerComponent } from "../../common/components";
import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { CityApiEntityApi } from "../../common/api-entities/city-api.entity";
import { getHotelEditCityList } from "./hotel-edit.api";
import { HotelEntityVm } from "./hotel-edit.vm";
import { animated, useSpring } from 'react-spring'
import { onUpdateHotelEditFieldsActionThunk } from "./actions/onUpdateHotelEditActions";

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

  const springProps = useSpring({
    config: {tension: 200, friction: 40},
    from: {marginLeft: -50, opacity: 1},
    to: {marginLeft: 0, opacity: 1}
  });

  const [cities, setCities] = React.useState<CityApiEntityApi[]>([])

  React.useEffect(() => {
    getHotelEditCityList().then((result: CityApiEntityApi[]) => {
      setCities(result);
    });
  }, []);

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useStyles();

  const dispatch = useDispatch();

  const hotelEditErrors = useSelector((state: State) => state.hotelEdit.hotelEditFormErrors)

  const updateHotelEdit = (fieldId: string, value: string) => {
    dispatch(onUpdateHotelEditFieldsActionThunk({
      ...hotelToEdit,
      [fieldId]: value
    }, fieldId, value))
  };


  return (
    <>
      <LoadingPropagateSpinnerComponent className={classes.spinner} area={'hotel-edit'}>
        <animated.div style={springProps}>
          <HotelEditComponent
            hotelEditErrors={hotelEditErrors}
            onClickSave={() => console.log('save')}
            onChangeField={updateHotelEdit} cities={cities}
            hotelToEdit={hotelToEdit}/>
        </animated.div>
      </LoadingPropagateSpinnerComponent>
    </>
  )
}