import * as React from "react";
import { AppBackLayout } from "../layout/app-back.layout";
import { routerSwitchRoutes } from "core";
import { HotelEditContainer } from "../pods/hotel-edit";

export const HotelEditScene = () => (
  <AppBackLayout backingRoute={routerSwitchRoutes.hotelCollection}>
    <HotelEditContainer/>
  </AppBackLayout>
);