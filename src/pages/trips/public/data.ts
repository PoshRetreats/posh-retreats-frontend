import { GROUP_TRIPS_IMAGE1, GROUP_TRIPS_IMAGE2, GROUP_TRIPS_IMAGE3, GROUP_TRIPS_IMAGE4 } from "assets";

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
    occupied: 140,
    image: GROUP_TRIPS_IMAGE1
	},
	{
		title: `Explore Fuerteventura, Canary Islands`,
		tags: ["adventure", "hiking"],
    date: nextWeekDate,
    total: 300,
    occupied: 290,
    image: GROUP_TRIPS_IMAGE2
	},
	{
		title: `Explore Fuerteventura, Canary Islands`,
		tags: ["adventure", "hiking"],
    date: nextWeekDate,
    total: 300,
    occupied: 120,
    image: GROUP_TRIPS_IMAGE3
	},
	{
		title: `Explore Fuerteventura, Canary Islands`,
		tags: ["adventure", "hiking"],
    date: nextWeekDate,
    total: 300,
    occupied: 110,
    image: GROUP_TRIPS_IMAGE4
	},
];
