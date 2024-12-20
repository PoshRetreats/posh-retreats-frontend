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
	ADMIN_PAST_TRIPS_DETAILS_URL,
	PUBLIC_TRIPS_FORM_URL,
	ADMIN_CREATE_GROUP_TRIPS_URL,
	ADMIN_GROUP_TRIPS_DETAILS_INFO_URL,
	ADMIN_MESSAGES_URL,
	ADMIN_CREATE,
	ADMIN_PRIVATE_TRIPS_DETAILS_URL,
	ADMIN_GROUP_TRIPS_ITINERARY_URL,
	PAST_TRIPS_URL,
	ADMIN_PAST_TRIPS_HOME_DETAILS_URL,
	ADMIN_PAST_TRIPS_ADD,
	ADMIN_GROUP_TRIP_USERS_URL,
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
import PastTripsAndReviews from "pages/admin/reviewPastTrips";
import AdminLogin from "pages/admin/auth/login";
import AdminGroupTripsDetails from "pages/admin/trips/groupTripDetails";
import PastTripsAndReviewsDetails from "pages/admin/reviewPastTrips/details";
import GroupForm from "pages/trips/public/groupTrip/Form";
import AdminGroupTripList from "pages/admin/trips/List";
import { GroupDetailsInfo } from "pages/admin/trips/groupTripDetails/groupDetailsInfo";
import Messages from "pages/admin/messages";
import { PrivateTripDetails } from "pages/admin/privateTrips/details/index.";
import CreateAdmin from "pages/admin/auth/create";
import AddItinerary from "pages/admin/trips/addItinerary";
import PastTrips from "pages/reviews/PastTrips";
import PastTripsAndReviewsHome from "pages/admin/pastTripsHome";
import { PastTripHomeDetailsPage } from "pages/admin/pastTripsHome/details";
import AdminTripForm from "pages/admin/trips/TripForm";

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
		path: PAST_TRIPS_URL,
		Component: PastTrips,
		exact: true,
		isProtected: false,
		isAdmin: false,
		showAdminMenu: false,
		showDefaultFooter: true,
	},
	{
		id: 115,
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
		Component: AdminGroupTripList,
		exact: true,
		isProtected: true,
		isAdmin: true,
		showAdminMenu: true,
		showDefaultFooter: false,
	},
	{
		id: 17,
		path: ADMIN_CREATE_GROUP_TRIPS_URL,
		Component: AdminGroupTrips,
		exact: true,
		isProtected: true,
		isAdmin: true,
		showAdminMenu: true,
		showDefaultFooter: false,
	},

	{
		id: 10,
		path: TRIPS_OVERVIEW_URL,
		Component: GroupTripOverView,
		exact: true,
		isProtected: false,
		isAdmin: false,
		showAdminMenu: false,
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
		id: 15,
		path: ADMIN_PRIVATE_TRIPS_URL,
		Component: PrivateTrips,
		exact: true,
		isProtected: true,
		hide: false,
		showBottomNav: false,
	},
	{
		id: 12,
		path: ADMIN_PAST_TRIPS_URL,
		// Component: PastTripsAndReviews,
		Component: PastTripsAndReviewsHome,
		// Component: PastTripHomeDetailsPage,
		exact: true,
		isProtected: true,
		hide: false,
		showBottomNav: false,
	},
	{
		id: 13,
		path: ADMIN_GROUP_TRIPS_DETAILS_URL,
		Component: AdminGroupTripsDetails,
		exact: true,
		isProtected: true,
		hide: false,
		showBottomNav: false,
	},
	{
		id: 14,
		path: ADMIN_PAST_TRIPS_DETAILS_URL,
		Component: PastTripsAndReviewsDetails,
		exact: true,
		isProtected: true,
		hide: false,
		showBottomNav: false,
	},
	{
		id: 16,
		path: PUBLIC_TRIPS_FORM_URL,
		Component: GroupForm,
		exact: true,
		isProtected: false,
		hide: false,
		showBottomNav: false,
	},
	{
		id: 17,
		path: ADMIN_MESSAGES_URL,
		Component: Messages,
		exact: true,
		isProtected: true,
		hide: false,
		showBottomNav: false,
	},
	{
		id: 18,
		path: ADMIN_GROUP_TRIPS_DETAILS_INFO_URL,
		Component: GroupDetailsInfo,
		exact: true,
		isProtected: true,
		hide: false,
		showBottomNav: false,
	},
	{
		id: 19,
		path: ADMIN_PRIVATE_TRIPS_DETAILS_URL,
		Component: PrivateTripDetails,
		isProtected: true,
		hide: false,
		showBottomNav: false,
	},
	{
		id: 20,
		path: ADMIN_CREATE,
		Component: CreateAdmin,
		exact: true,
		isProtected: true,
		hide: false,
		showBottomNav: false,
	},
	{
		id: 21,
		path: ADMIN_GROUP_TRIPS_ITINERARY_URL,
		Component: AddItinerary,
		exact: true,
		isProtected: true,
		hide: false,
		showBottomNav: false,
	},
	{
		id: 22,
		path: ADMIN_PAST_TRIPS_HOME_DETAILS_URL,
		Component: PastTripHomeDetailsPage,
		exact: true,
		isProtected: true,
		hide: false,
		showBottomNav: false,
	},
	{
		id: 23,
		path: ADMIN_PAST_TRIPS_ADD,
		Component: PastTripsAndReviews,
		exact: true,
		isProtected: true,
		hide: false,
		showBottomNav: false,
	},
	{
		id: 24,
		path: ADMIN_GROUP_TRIP_USERS_URL,
		Component: AdminTripForm,
		exact: true,
		isProtected: true,
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
