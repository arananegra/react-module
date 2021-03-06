import * as React from "react";
import { HotelEntityVm } from "./hotel-collection.vm";
import { HotelCard } from "./components/hotel-card.component";
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from "@material-ui/core/styles";
import { animated, useTrail } from 'react-spring'
import { useSelector } from "react-redux";
import { State } from "../../reducers";


interface Props {
  hotelCollection: HotelEntityVm[];
  onEditHotelClick: (hotelClicked: HotelEntityVm) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  listLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '2%'
  }
}));

export const HotelCollectionComponent = (props: Props) => {
  const {hotelCollection, onEditHotelClick} = props;

  const yPosition: number = useSelector((state: State) => {
    return state.hotelCollection.yListPosition
  });

  const trail = useTrail(hotelCollection.length, {
    from: {marginLeft: -10, opacity: 0, transform: 'translate3d(0px,-20px,0)'},
    to: {marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)'}
  })

  const classes = useStyles();

  React.useLayoutEffect(() => {
    window.scrollTo(0, yPosition);
    //se necesitan como dependencias la posicion y la colección de hoteles
  }, [yPosition, hotelCollection]);

  return (
    <div className={classes.listLayout}>
      {trail.map((props, index) => {
        return (
          <animated.div key={hotelCollection[index].id} style={props}>
            <HotelCard onEditHotelClick={onEditHotelClick} hotel={hotelCollection[index]}/>
          </animated.div>
        )
      })}
    </div>

  );
}