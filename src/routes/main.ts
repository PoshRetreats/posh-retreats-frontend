import NotFound from "pages/notFound";
import Trips from "pages/trips/public";
import PrivateTrip from "pages/trips/private";
import {
	ABOUT_US_URL,
	ADMIN_GROUP_TRIPS_URL,
	ADMIN_HOME_URL,
	ADMIN_PAST_TRIPS_URL,
	ADMIN_PRIVATE_TRIPS_URL,
	ADMIN_LOGIN,
	CONTACT_US_URL,
	HOME_URL,
	PRIVATE_TRIPS_FORM_URL,
	PRIVATE_TRIPS_URL,
	REVIEWS_URL,
	TRIPS_OVERVIEW_URL,
	TRIPS_URL,
	ADMIN_GROUP_TRIPS_DETAILS_URL,
} from "./frontend";
import PrivateTripForm from "pages/trips/private/Form";
import Home from "pages/home";
import Reviews from "pages/reviews";
import About from "pages/about";
import ContactUs from "pages/contactUs";
import AdminHome from "pages/admin/home";
import AdminGroupTrips from "pages/admin/trips";
import GroupTripOverView from "pages/trips/public/groupTrip";
import PrivateTrips from "pages/admin/privateTrips";
import PastTripsAndReviews from "pages/admin/pastTrips";
import AdminLogin from "pages/admin/auth/login";
import AdminGroupTripsDetails from "pages/admin/trips/groupTripDetails";

export const mainRoutes = [
	{
		id: 1,
		path: TRIPS_URL,
		Component: Trips,
		exact: true,
		isProtected: false,
		isAdmin: false,
		showAdminMenu: false,
		showDefaultFooter: true,
	},
	{
		id: 2,
		path: PRIVATE_TRIPS_URL,
		Component: PrivateTrip,
		exact: true,
		isProtected: false,
		isAdmin: false,
		showAdminMenu: false,
		showDefaultFooter: true,
	},
	{
		id: 3,
		path: PRIVATE_TRIPS_FORM_URL,
		Component: PrivateTripForm,
		exact: true,
		isProtected: false,
		isAdmin: false,
		showAdminMenu: false,
		showDefaultFooter: true,
	},
	{
		id: 4,
		path: HOME_URL,
		Component: Home,
		exact: true,
		isProtected: false,
		isAdmin: false,
		showAdminMenu: false,
		showDefaultFooter: true,
	},
	{
		id: 5,
		path: REVIEWS_URL,
		Component: Reviews,
		exact: true,
		isProtected: false,
		isAdmin: false,
		showAdminMenu: false,
		showDefaultFooter: true,
	},
	{
		id: 6,
		path: ABOUT_US_URL,
		Component: About,
		exact: true,
		isProtected: false,
		isAdmin: false,
		showAdminMenu: false,
		showDefaultFooter: true,
	},
	{
		id: 7,
		path: CONTACT_US_URL,
		Component: ContactUs,
		exact: true,
		isProtected: false,
		isAdmin: false,
		showAdminMenu: false,
		showDefaultFooter: true,
	},
	{
		id: 8,
		path: ADMIN_HOME_URL,
		Component: AdminHome,
		exact: true,
		isProtected: true,
		isAdmin: true,
		showAdminMenu: true,
		showDefaultFooter: false,
	},
	{
		id: 9,
		path: ADMIN_GROUP_TRIPS_URL,
		Component: AdminGroupTrips,
		exact: true,
		isProtected: false,
		isAdmin: true,
		showAdminMenu: true,
		showDefaultFooter: false,
	},
	
	{
		id: 10,
		path: TRIPS_OVERVIEW_URL,
		Component: GroupTripOverView,
		exact: true,
		isProtected: true,
		isAdmin: true,
		showAdminMenu: true,
		showDefaultFooter: false,
	},
	{
		id: 11,
		path: ADMIN_LOGIN,
		Component: AdminLogin,
		exact: true,
		isProtected: false,
		isAdmin: true,
		showAdminMenu: true,
		showDefaultFooter: false,
	},
	{
		id: 11,
		path: ADMIN_PRIVATE_TRIPS_URL,
		Component: PrivateTrips,
		exact: true,
		isProtected: false,
		hide: false,
		showBottomNav: false,	
	},
	{
		id: 12,
		path: ADMIN_PAST_TRIPS_URL,
		Component: PastTripsAndReviews,
		exact: true,
		isProtected: false,
		hide: false,
		showBottomNav: false,	
	},
	{
		id: 13,
		path: ADMIN_GROUP_TRIPS_DETAILS_URL,
		Component: AdminGroupTripsDetails,
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
		isAdmin: false,
		showAdminMenu: false,
		showDefaultFooter: false,
	},
];
