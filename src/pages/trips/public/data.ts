import { GROUP_TRIPS_IMAGE1 } from "assets";

const currentDate = new Date();

// Calculate the date for next week
const nextWeekDate = new Date();
nextWeekDate.setDate(currentDate.getDate() + 7);


export const groupTripsData = [
	{
		title: `Explore Fuerteventura, Canary Islands`,
		tags: ["adventure", "hiking"],
    date: nextWeekDate,
    total: 300,
    occupied: 40,
    image: GROUP_TRIPS_IMAGE1
	},
	{
		title: `Explore Fuerteventura, Canary Islands`,
		tags: ["adventure", "hiking"],
    date: nextWeekDate,
    total: 300,
    occupied: 40,
    image: GROUP_TRIPS_IMAGE1
	},
	{
		title: `Explore Fuerteventura, Canary Islands`,
		tags: ["adventure", "hiking"],
    date: nextWeekDate,
    total: 300,
    occupied: 40,
    image: GROUP_TRIPS_IMAGE1
	},
	{
		title: `Explore Fuerteventura, Canary Islands`,
		tags: ["adventure", "hiking"],
    date: nextWeekDate,
    total: 300,
    occupied: 40,
    image: GROUP_TRIPS_IMAGE1
	},
];
