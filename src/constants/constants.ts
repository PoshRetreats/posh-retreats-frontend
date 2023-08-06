const COOKIETIMEINSECONDS = {
  sixMonths: 15780000,
  oneWeek: 604800,
};

export const GOOGLEAPIKEY = 'AIzaSyApQp5MATSHUWicggY-ecnfsnWwe1FZFwI'
export const AUTH_TOKEN_NAME : string= 'trig109cdndjk9829nfjKL873app';
export const CHECKIN_KEY : string= 'cHZ8G8Vmn)98';
export const AUTH_CONFIG  = {
  path: '/',
  sameSite: 'strict',
  maxAge: COOKIETIMEINSECONDS.sixMonths,
};
export const IS_PRODUCTION = process.env.REACT_APP_ENV === 'production';
export const IS_STAGING = process.env.REACT_APP_ENV === 'staging';
export const IS_LOCAL = process.env.REACT_APP_ENV === 'local';
export const WELCOME_MESSAGE = 'xrgtys';
export const USER_PROFILE_KEY = 'S78aNdme18a';
