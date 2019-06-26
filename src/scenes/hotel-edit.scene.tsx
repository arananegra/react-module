import * as React from "react";
import { HotelEdit } from "../pods/hotel-edit/hotel-edit.component";
import { AppBackLayout } from "../layout/app-back.layout";
import { routerSwitchRoutes } from "core";

export const HotelEditScene = () => (
  <AppBackLayout backingRoute={routerSwitchRoutes.hotelCollection}>
    <HotelEdit/>
  </AppBackLayout>
);