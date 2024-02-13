import { IS_LOCAL, IS_PRODUCTION, IS_STAGING } from "../constants/constants";

const LOCAL_SERVER_URL = "http://127.0.0.1:8200";
// const DEVELOPMENT_SERVER_URL = "http://localhost:8200";
const STAGING_SERVER_URL = "https://poshretreats.onrender.com";
const PRODUCTION_SERVER_URL = "https://posh-retreats-backend.onrender.com";
export const SERVER_URL = IS_LOCAL
	? LOCAL_SERVER_URL
	: IS_STAGING
	? STAGING_SERVER_URL
	: IS_PRODUCTION
	? PRODUCTION_SERVER_URL
	: PRODUCTION_SERVER_URL;
// const URL_TAG = "/api/v2";
// const URL_TAG2 = '/api/v1';
// const SERVER_AND_TAG = `${SERVER_URL}${URL_TAG}`;
// const SERVER_AND_TAG2 = `${SERVER_URL}${URL_TAG2}`;

//Auth Endpoints
export const SERVER_LOGIN_URL = `${SERVER_URL}/auth/login`;
export const SERVER_CREATE_ADMIN = `${SERVER_URL}/admin/create`;

//Contact-us
export const CONTACT_US = `${SERVER_URL}/contact-us`;

//Trips
export const SERVER_GROUP_TRIP = `${SERVER_URL}/trip/public/create`
export const SERVER_PRIVATE_TRIP = `${SERVER_URL}/trip/private/create`
export const SERVER_CREATE_TRIP = `${SERVER_URL}/trip/create`
export const SERVER_ALL_TRIPS = `${SERVER_URL}/trip/all`
export const SERVER_GET_PUBLIC_TRIPS = `${SERVER_URL}/trip/public/all`
export const SERVER_GET_ADMIN_PUBLIC_TRIPS = `${SERVER_URL}/trip/public/admin/all`
export const SERVER_GET_LATEST_PUBLIC_TRIPS = `${SERVER_URL}/trip/public/latest`
export const SERVER_JOIN_PUBLIC_TRIPS = `${SERVER_URL}/trip/join`
export const SERVER_DELETE_PUBLIC_TRIPS = `${SERVER_URL}/trip/public/delete`;
export const SERVER_END_PUBLIC_TRIPS = `${SERVER_URL}/trip/public/end`;
export const SERVER_CREATE_TRIP_ITINERARY = `${SERVER_URL}/trip/public/itinerary`;
export const SERVER_GET_PAST_TRIPS = `${SERVER_URL}/trip/past`;
export const SERVER_GET_PAST_TRIP_REVIEWS = `${SERVER_URL}/trip/review/:id`;


export const SERVER_PAST_TRIPS_AND_REVIEW = `${SERVER_URL}/trip/past`
export const SERVER_GET_PRIVATE_TRIP = `${SERVER_URL}/trip/private/all`
export const SERVER__ADD_REVIEW = `${SERVER_URL}/trip/public/review`

export const SERVER_PAST_TRIP_PREVIEW = `${SERVER_URL}/trip/review`