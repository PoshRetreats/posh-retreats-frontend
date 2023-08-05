import NotFound from "../pages/notFound";
import Trips from "../pages/trips";
import { TRIPS_URL } from "./frontend";

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
    id: 0,
    path: "*",
    Component: NotFound,
    exact: false,
    isProtected: false,
    hide: false,
  },
];
