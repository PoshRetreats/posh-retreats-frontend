import {
	GROUP_TRIPS_IMAGE1,
	GROUP_TRIPS_IMAGE2,
	GROUP_TRIPS_IMAGE3,
	GROUP_TRIPS_IMAGE4,
} from "assets";

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
		image: GROUP_TRIPS_IMAGE1,
		otherImages: [
			GROUP_TRIPS_IMAGE2,
			GROUP_TRIPS_IMAGE3,
			GROUP_TRIPS_IMAGE4,
			GROUP_TRIPS_IMAGE1,
		],
		overview: `Visit the captivating island of Fuerteventura, a true gem in the Canary Islands! Get
    ready to immerse yourself in a world of extraordinary wonders as you step onto the
    sun-kissed shores of this paradise. Picture yourself basking in the warm embrace of
    the Atlantic Ocean on pristine, golden beaches that seem to stretch into eternity.
    Fuerteventura, known for its constant breeze, is a haven for windsurfers and
    kiteboarders, offering thrilling aquatic adventures for the adventurous at heart.
    But that's not all - brace yourself for a breathtaking landscape that seems straight
    out of a dream. Explore otherworldly volcanic landscapes and vast sand dunes at
    Corralejo Natural Park, where you can witness an awe-inspiring dance between
    nature and time. Discover hidden coves and secret caves, revealing treasures
    waiting to be explored.`,
		price: "$4550",
		points: [
			"6 days and 5 nights",
			"This trip is open to men and women",
			"This trip is open to men and women",
			"This trip is open to men and women",
		],
	},
	{
		title: `Explore Fuerteventura, Canary Islands`,
		tags: ["adventure", "hiking"],
		date: nextWeekDate,
		total: 300,
		occupied: 290,
		image: GROUP_TRIPS_IMAGE2,
    otherImages: [
			GROUP_TRIPS_IMAGE1,
			GROUP_TRIPS_IMAGE3,
			GROUP_TRIPS_IMAGE4,
			GROUP_TRIPS_IMAGE2,
		],
		overview: `Visit the captivating island of Fuerteventura, a true gem in the Canary Islands! Get
    ready to immerse yourself in a world of extraordinary wonders as you step onto the
    sun-kissed shores of this paradise. Picture yourself basking in the warm embrace of
    the Atlantic Ocean on pristine, golden beaches that seem to stretch into eternity.
    Fuerteventura, known for its constant breeze, is a haven for windsurfers and
    kiteboarders, offering thrilling aquatic adventures for the adventurous at heart.
    But that's not all - brace yourself for a breathtaking landscape that seems straight
    out of a dream. Explore otherworldly volcanic landscapes and vast sand dunes at
    Corralejo Natural Park, where you can witness an awe-inspiring dance between
    nature and time. Discover hidden coves and secret caves, revealing treasures
    waiting to be explored.`,
		price: "$4550",
		points: [
			"6 days and 5 nights",
			"This trip is open to men and women",
			"This trip is open to men and women",
			"This trip is open to men and women",
		],
	},
	{
		title: `Explore Fuerteventura, Canary Islands`,
		tags: ["adventure", "hiking"],
		date: nextWeekDate,
		total: 300,
		occupied: 120,
		image: GROUP_TRIPS_IMAGE3,
    otherImages: [
			GROUP_TRIPS_IMAGE2,
			GROUP_TRIPS_IMAGE1,
			GROUP_TRIPS_IMAGE4,
			GROUP_TRIPS_IMAGE3,
		],
		overview: `Visit the captivating island of Fuerteventura, a true gem in the Canary Islands! Get
    ready to immerse yourself in a world of extraordinary wonders as you step onto the
    sun-kissed shores of this paradise. Picture yourself basking in the warm embrace of
    the Atlantic Ocean on pristine, golden beaches that seem to stretch into eternity.
    Fuerteventura, known for its constant breeze, is a haven for windsurfers and
    kiteboarders, offering thrilling aquatic adventures for the adventurous at heart.
    But that's not all - brace yourself for a breathtaking landscape that seems straight
    out of a dream. Explore otherworldly volcanic landscapes and vast sand dunes at
    Corralejo Natural Park, where you can witness an awe-inspiring dance between
    nature and time. Discover hidden coves and secret caves, revealing treasures
    waiting to be explored.`,
		price: "$4550",
		points: [
			"6 days and 5 nights",
			"This trip is open to men and women",
			"This trip is open to men and women",
			"This trip is open to men and women",
		],
	},
	{
		title: `Explore Fuerteventura, Canary Islands`,
		tags: ["adventure", "hiking"],
		date: nextWeekDate,
		total: 300,
		occupied: 110,
		image: GROUP_TRIPS_IMAGE4,
    otherImages: [
			GROUP_TRIPS_IMAGE2,
			GROUP_TRIPS_IMAGE3,
			GROUP_TRIPS_IMAGE1,
			GROUP_TRIPS_IMAGE4,
		],
		overview: `Visit the captivating island of Fuerteventura, a true gem in the Canary Islands! Get
    ready to immerse yourself in a world of extraordinary wonders as you step onto the
    sun-kissed shores of this paradise. Picture yourself basking in the warm embrace of
    the Atlantic Ocean on pristine, golden beaches that seem to stretch into eternity.
    Fuerteventura, known for its constant breeze, is a haven for windsurfers and
    kiteboarders, offering thrilling aquatic adventures for the adventurous at heart.
    But that's not all - brace yourself for a breathtaking landscape that seems straight
    out of a dream. Explore otherworldly volcanic landscapes and vast sand dunes at
    Corralejo Natural Park, where you can witness an awe-inspiring dance between
    nature and time. Discover hidden coves and secret caves, revealing treasures
    waiting to be explored.`,
		price: "$4550",
		points: [
			"6 days and 5 nights",
			"This trip is open to men and women",
			"This trip is open to men and women",
			"This trip is open to men and women",
		],
	},
];
