import { IS_LOCAL, IS_PRODUCTION, IS_STAGING } from "../constants/constants";

const LOCAL_SERVER_URL = "http://127.0.0.1:8200";
const DEVELOPMENT_SERVER_URL = "http://localhost:8200";
const STAGING_SERVER_URL = "https://trigger-backend.onrender.com";
const PRODUCTION_SERVER_URL = "https://backends.triggerapp.online";
export const SERVER_URL = IS_LOCAL
  ? LOCAL_SERVER_URL
  : IS_STAGING
  ? STAGING_SERVER_URL
  : IS_PRODUCTION
  ? PRODUCTION_SERVER_URL
  : DEVELOPMENT_SERVER_URL;
// const URL_TAG = "/api/v2";
// const URL_TAG2 = '/api/v1';
// const SERVER_AND_TAG = `${SERVER_URL}${URL_TAG}`;
// const SERVER_AND_TAG2 = `${SERVER_URL}${URL_TAG2}`;

//Auth Endpoints
export const SOCIAL_LOGIN_URL = `${SERVER_URL}/users/social_login`;
export const SERVER_LOGIN_URL = `${SERVER_URL}/auth/login`;
export const SERVER_SIGNUP_URL = `${SERVER_URL}/users/create`;
export const SERVER_OTP_URL = `${SERVER_URL}/users/otp`;
export const SERVER_LOGOUT_URL = `${SERVER_URL}/users/logout`;

//Circles
export const GET_CIRCLES = `${SERVER_URL}/circles`;
export const updateCircleUrl = (id: string) => `${SERVER_URL}/circles/${id}`;

//Activities
export const SERVER_GET_ACTIVITIES = `${SERVER_URL}/activity/all`;
export const SERVER_GET_MY_ACTIVITIES = `${SERVER_URL}/activity`;
export const SERVER_CREATE_ACTIVITIES = `${SERVER_URL}/activity/create`;

//Search and Profile
export const GET_SEARCHED_USER = `${SERVER_URL}/users/search`;
export const GET_CONTACTS = `${SERVER_URL}/contacts`;

//contactRequest
export const REQUEST_CONTACT_BY_EMAIL_URL = `${SERVER_URL}/contact-requests/send/email`;


//profile
export const UPDATE_PROFILE_IMAGE = `${SERVER_URL}/users/profile_picture`;


//checkin
export const GET_CHECKIN = `${SERVER_URL}/checkin`;
