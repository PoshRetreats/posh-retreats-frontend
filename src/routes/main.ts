import NotFound from "pages/notFound";
import Trips from "pages/trips";
import PrivateTrip from "pages/trips/private";
import { PRIVATE_TRIPS_FORM_URL, PRIVATE_TRIPS_URL, TRIPS_URL } from "./frontend";
import PrivateTripForm from "pages/trips/private/Form";

export const mainRoutes = [
  {
    id: 1,
    path: TRIPS_URL,
    Component: Trips,
    exact: true,
    isProtected: false,
    hide: false,
    showBottomNav: false,
  },
  {
    id: 2,
    path: PRIVATE_TRIPS_URL,
    Component: PrivateTrip,
    exact: true,
    isProtected: false,
    hide: false,
    showBottomNav: false,
  },
  {
    id: 3,
    path: PRIVATE_TRIPS_FORM_URL,
    Component: PrivateTripForm,
    exact: true,
    isProtected: false,
    hide: false,
    showBottomNav: false,
  },
  {
    id: 0,
    path: "*",
    Component: NotFound,
    exact: false,
    isProtected: false,
    hide: false,
  },
];
