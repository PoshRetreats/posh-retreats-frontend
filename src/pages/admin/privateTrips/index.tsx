import AdminMenu from "components/menuHeader/admin";
import {
	ActivityCardContainer,
	ActivityCardTemp,
	PrivateTripHomeContainer,
	AdminHomeFlexDiv,
	AllTripsCardContainer,
	GreyText,
	PrivateTripContainer,
	TripCardContainer,
    EntryDetailsCardContainer,
	TripCardList,
	TripHeadText,
} from "./style";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";

type BasicTripData = {
	title: string;
	email?: string;
	date: string;
	total?: string;
};

type InformationData = {
	title: string;
	details?: string | number;
};



const privateTripsdetails: InformationData[] = [
	{
		title: "Name",
        details: "Sheldon Cooper"
	},
    {
        title: "Email",
        details: "ahelly@mail.com",
    },
	{
        title: "Where would you like to travel to?:",
		details: "The Grand Canyon",
	},
    {
        title: "Where would you like to travel to?:",
		details: "The Grand Canyon",
	},
    {
        title: "Where would you like to travel to?:",
		details: "The Grand Canyon",
	},
	{ 
        title: "How many people will be traveling?:",
        details: 5 },
    { 
        title: "Are there any other destinations you would be interested in?:",
        details: "Istanbul"
    }
];


const upcoming: BasicTripData[] = [
	{
		title: "Explore Canary Island",
		total: "Group Trips",
		date: "05/05/2023 6:45 am",
	},
];



export function EntryDetails({ title, details }: InformationData) {
	return (
		<>
			<EntryDetailsCardContainer>
				<div>
					<TripHeadText>{title}</TripHeadText>
				</div>
				<GreyText>{details}</GreyText>
			</EntryDetailsCardContainer>
		</>
	);
}

export function RegistrationCard({ title, email, date,total }: BasicTripData) {
	return (
		<TripCardContainer>
			<div>
				<TripHeadText>{title}</TripHeadText>
				<GreyText>{email || total}</GreyText>
			</div>
			<GreyText>{date}</GreyText>
		</TripCardContainer>
	);
}

export function Registration() {
	return (
		<AllTripsCardContainer>
			<h1>Registrations</h1>
			<GreyText>All Entries</GreyText>
			{/* <TripCardList>
				{tripData.map(({ title, email, date }: BasicTripData) => (
					<RegistrationCard  title={title} email={email} date={date} />
				))}
			</TripCardList> */}
            <TripCardList>
				{privateTripsdetails.map(({ title,details }: InformationData) => (
					<EntryDetails title={title} details={details} />
				))}
			</TripCardList>
		</AllTripsCardContainer>
	);
}

export function UpcominngTrips() {
	return (
		<ActivityCardContainer>
			<ActivityCardTemp>
				<h1>Upcoming Trips</h1>
				<GreyText>Recently Published</GreyText>
				<TripCardList>
					{upcoming.map(({ title, total, date }: BasicTripData) => (
						<RegistrationCard title={title} total={total} date={date} />
					))}
				</TripCardList>
			</ActivityCardTemp>
		</ActivityCardContainer>
	);
}

export default function PrivateTrips() {
	return (
		<PrivateTripContainer>
			<AdminMenu />
			<PrivateTripHomeContainer>
				<AdminHeaderTitle title="Private Trips" />
				<AdminHomeFlexDiv>
					<Registration />
					<UpcominngTrips />
				</AdminHomeFlexDiv>
			</PrivateTripHomeContainer>
		</PrivateTripContainer>
	);
}
