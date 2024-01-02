import AdminMenu from "components/menuHeader/admin";
import {
	ActivityCardContainer,
	ActivityCardTemp,
	AdminContainer,
	AdminHomeContainer,
	AdminHomeFlexDiv,
	AllTripsCardContainer,
	GreyText,
	TripCardContainer,
	TripCardList,
	TripHeadText,
} from "./style";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import { GeneralResponseType, makeGetRequestWithToken } from "requests/requests";
import { SERVER_GET_PUBLIC_TRIPS } from "routes/server";
import { useEffect, useState } from "react";

type BasicTripData = {
	title: string;
	total: string;
	date: string;
};

enum TripType {
	PUBLIC = "public",
	PRIVATE= "private"
};

const tripData: BasicTripData[] = [
	{
		title: "Explore Canary Island",
		total: "24 registrations",
		date: "05/05/2023 6:45 am",
	},
	{
		title: "Explore Canary Island",
		total: "24 registrations",
		date: "05/05/2023 6:45 am",
	},
	{
		title: "Explore Canary Island",
		total: "24 registrations",
		date: "05/05/2023 6:45 am",
	},
];

export function TripCard({ trip }: any) {
	const date = new Date(trip?.createdAt).toLocaleDateString();
	return (
		<TripCardContainer>
			<div>
				<TripHeadText>{trip?.title}</TripHeadText>
				<GreyText>{trip?.tripType || TripType.PRIVATE}</GreyText>
			</div>
			<GreyText>{date}</GreyText>
		</TripCardContainer>
	);
}

export function AllTripsCard() {
	const [allTrips, setAllTrips] = useState([]);
	async function getAllTrips() {
		try {
			const res = (await makeGetRequestWithToken(
				SERVER_GET_PUBLIC_TRIPS
			)) as GeneralResponseType;
			setAllTrips(res.data);
			console.log({ res });
		} catch (err) {
			console.log({ err });
		}
	}

	useEffect(() => {
		getAllTrips();
	}, []);
	return (
		<AllTripsCardContainer>
			<h1>All Trips</h1>
			<GreyText>All Registrations</GreyText>
			<TripCardList>
				{allTrips.map((trip, i) => (
					<TripCard trip={trip} key={i} />
				))}
			</TripCardList>
		</AllTripsCardContainer>
	);
}

export function ActivityCard() {
	return (
		<ActivityCardContainer>
			<ActivityCardTemp>
				<h1>Upcoming Trips</h1>
				<GreyText>Recently Published</GreyText>
				<TripCardList>
					{tripData.map(({ title, total, date }: BasicTripData, i: number) => (
						<TripCard key={i} title={title} total={total} date={date} />
					))}
				</TripCardList>
			</ActivityCardTemp>
			<ActivityCardTemp>
				<h1>Activity</h1>
				<GreyText>Recently Published</GreyText>
				<TripCardList>
					{tripData.map(({ title, total, date }: BasicTripData, i: number) => (
						<TripCard key={i} title={title} total={total} date={date} />
					))}
				</TripCardList>
			</ActivityCardTemp>
		</ActivityCardContainer>
	);
}

export default function AdminHome() {
	return (
		<AdminContainer>
			<AdminMenu />
			<AdminHomeContainer>
				<AdminHeaderTitle />
				<AdminHomeFlexDiv>
					<AllTripsCard />
					{/* <ActivityCard /> */}
				</AdminHomeFlexDiv>
			</AdminHomeContainer>
		</AdminContainer>
	);
}
