//frontend urls
export const base_url = window.location.origin;
//Auth Routes
export const WELCOME_URL = "/welcome";
export const LOGIN_URL = "/login";
export const SIGNUP_URL = "/signup";
export const OTP_URL = "/otp";

//Home Routes
export const HOME_URL = "/";
//we use this for tracking dont change it
export const EMAIL_SIGNUP_URL = "/email_sign_up";
export const FORGOT_PASSWORD_URL = "/password/new";
export const RESET_PASSWORD_URL = "/password/reset/:reset_password_token";

//Activity
export const ACTIVITY_URL = "/activity";

//Map
export const MAP_URL = "/map";
export const ACTIVITY_MAP_URL = "/map/activity";

//Checkin
export const CHECKIN_URL = "/checkin";

//Profile
export const PROFILE_URL = "/profile";
export const getProfileLink = () => `/profile`;
export const ADD_PEOPLE_URL = "/profile/people/add";
export const VIEW_PEOPLE_URL = "/profile/:id/people";
export const getViewPeople = (id: string) => `/profile/${id}/people`;

//Circle
export const CIRCLES_URL = "/circle";
export const CREATE_CIRCLE_URL = "/circle/create";
export const EDIT_CIRCLE_URL = "/circle/edit";

//alerts
export const ALERT_URL = "/alerts";

//settings
export const SETTINGS_URL = "/settings";
export const ACCOUNT_INFORMATION_URL = "/settings/account_information";
