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

type BasicTripData = {
	title: string;
	total: string;
	date: string;
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

export function TripCard({ title, total, date }: BasicTripData) {
	return (
		<TripCardContainer>
			<div>
				<TripHeadText>{title}</TripHeadText>
				<GreyText>{total}</GreyText>
			</div>
			<GreyText>{date}</GreyText>
		</TripCardContainer>
	);
}

export function AllTripsCard() {
	return (
		<AllTripsCardContainer>
			<h1>All Trips</h1>
			<GreyText>All Registrations</GreyText>
			<TripCardList>
				{tripData.map(({ title, total, date }: BasicTripData) => (
					<TripCard title={title} total={total} date={date} />
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
					<ActivityCard />
				</AdminHomeFlexDiv>
			</AdminHomeContainer>
		</AdminContainer>
	);
}
