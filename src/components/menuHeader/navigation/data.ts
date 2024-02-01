import {
	ABOUT_US_URL,
	CONTACT_US_URL,
	PAST_TRIPS_URL,
	PRIVATE_TRIPS_URL,
	TRIPS_URL,
} from "routes/frontend";

export const navbarData = [
	{
		id: 1,
		name: "Group Trips",
		path: TRIPS_URL,
		sub: TRIPS_URL,
	},
	{
		id: 2,
		name: "Private Trips",
		path: PRIVATE_TRIPS_URL,
	},
	{
		id: 3,
		name: "Past Trips and Reviews",
		path: PAST_TRIPS_URL,
	},
	{
		name: "About Us",
		path: ABOUT_US_URL,
		// currentPath
	},
	{
		name: "Contact Us",
		path: CONTACT_US_URL,
		// currentPath
	},
];
