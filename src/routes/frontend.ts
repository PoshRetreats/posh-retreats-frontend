//frontend urls
export const base_url = window.location.origin;

//Home Routes
export const HOME_URL = "/";
//we use this for tracking dont change it

//trips
export const TRIPS_URL = "/trips";
export const TRIPS_OVERVIEW_URL = "/trips/overview";
export const PUBLIC_TRIPS_FORM_URL = "/trips/group/:tripID";
export const gotoGroupTripForm = (tripID: string) => `/trips/group/${tripID}`;
export const PRIVATE_TRIPS_URL = "/trips/private";
export const PRIVATE_TRIPS_FORM_URL = "/trips/private/form";

//reviews
export const REVIEWS_URL = "/reviews";

//about
export const ABOUT_US_URL = "/about";

//contact
export const CONTACT_US_URL = "/contact_us";

//ADMIN
export const ADMIN_HOME_URL = "/admin/user";
export const ADMIN_LOGIN = "/admin/login";
export const ADMIN_GROUP_TRIPS_URL = "/admin/user/group_trips";
export const ADMIN_GROUP_TRIPS_DETAILS_URL = "/admin/user/group_trips_details";
export const ADMIN_PRIVATE_TRIPS_URL = "/admin/user/private_trips";
export const ADMIN_PRIVATE_TRIPS_DETAILS_URL = "/admin/user/private_trips_details";
export const ADMIN_PAST_TRIPS_URL = "/admin/user/past_trips";
export const ADMIN_MESSAGES_URL = "/admin/user/messages";
