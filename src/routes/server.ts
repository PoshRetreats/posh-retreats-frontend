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

//Contact-us
export const CONTACT_US = `${SERVER_URL}/contact-us`;
