import { generatePath } from 'react-router';

interface BaseRoutes {
  login : string;
  hotelCollection : string;
}

const appBaseRoutes : BaseRoutes =  {
  login: '/',
  hotelCollection: '/hotel-collection',
}

interface RouterSwitchRoutes extends BaseRoutes {
  hotelEdit: string;
}

export const routerSwitchRoutes : RouterSwitchRoutes = {
  ...appBaseRoutes,
  hotelEdit: `/hotel-edit/:id`,
}

interface RoutesLinks extends BaseRoutes {
  hotelEdit: (id : any) => string;
}

export const routesLinks : RoutesLinks = {
  ...appBaseRoutes,
  hotelEdit: (id) => generatePath(routerSwitchRoutes.hotelEdit, {id})
}

/*
 /hotel-edit/:id
 /hotel-edit/3
*/