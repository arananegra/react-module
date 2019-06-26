import * as React from "react";
import { AppBackLayout } from "../layout/app-back.layout";
import { routerSwitchRoutes } from "core";
import { HotelCollectionContainer } from "../pods/hotel-collection";

export const HotelEditScene = () => (
  <AppBackLayout backingRoute={routerSwitchRoutes.hotelCollection}>
    <HotelCollectionContainer/>
  </AppBackLayout>
);