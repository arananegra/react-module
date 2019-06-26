import * as React from "react"
import Card from '@material-ui/core/Card';
import { HotelEntityVm } from "../hotel-collection.vm";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import { CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from "@material-ui/core/styles";

interface Props {
  hotel: HotelEntityVm;
  onEditHotelClick: (hotelClicked: HotelEntityVm) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
    [theme.breakpoints.up('sm')]: {
      width: '500px',
    },
    width: '90vw',
    marginTop: '10px',
    marginLeft: '5px',
    marginRight: '5px'
  }
}));

export const HotelCard = (props: Props) => {
  const {hotel, onEditHotelClick} = props;

  const classes = useStyles();

  const onClickEditHotel = (e) => {
    onEditHotelClick(hotel)
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="hotel">{hotel.rating}</Avatar>
        }
        title={hotel.name}
        subheader={hotel.address}
      />
      <CardContent>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <CardMedia
            image={hotel.picture}
            title={hotel.name}
            style={{height: 0, paddingTop: '56%'}}
          />
          <Typography variant="subtitle1" gutterBottom>
            {hotel.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={onClickEditHotel} aria-label="edit">
          <EditIcon/>
        </IconButton>
      </CardActions>
    </Card>
  )
}