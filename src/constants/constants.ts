const COOKIETIMEINSECONDS = {
	sixMonths: 15780000,
	oneWeek: 604800,
};

export const AUTH_TOKEN_NAME: string = "djk9829nfjKL873app";
export const AUTH_CONFIG: any = {
	path: "/",
	sameSite: "strict",
	maxAge: COOKIETIMEINSECONDS.sixMonths,
};
export const IS_PRODUCTION = process.env.REACT_APP_ENV === "production";
export const IS_STAGING = process.env.REACT_APP_ENV === "staging";
export const IS_LOCAL = process.env.REACT_APP_ENV === "local";

enum CURRENCIES {
	DOLLARS = "$",
	POUNDS = "£",
	NAIRA = "₦",
}

export const CURRENCY = CURRENCIES.POUNDS