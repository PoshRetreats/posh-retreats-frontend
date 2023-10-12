import AdminMenu from "components/menuHeader/admin";
import {
	AdminContainer,
	AdminHomeFlexDiv,
	AdminTripContainer,
	AllGroupTripCardList,
	AllGroupTripCardTemp,
	AllGroupTripContainer,
	ContentSection,
	CreateTripCardList,
	CreateTripsCardContainer,
	GreyText,
	ImageDiv,
} from "./style";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import {
	MuiInnputField,
	MuiMultiSelect,
	MuiTextArea,
} from "components/muiInputFields";
import { useState } from "react";
import { AddButton } from "components/buttons/addButton";
import { SubmitButton } from "components/buttons/submitButton";
import { UpcomingTripImage } from "components/menuHeader/admin/upcomingTripImage";
import { UPCOMING_GROUP_TRIPS_IMAGE } from "assets";

const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard"];

const features = ["Breakdown", "Inclusions", "Exclusions"];

// FEATURES
export function TripFeatures() {
	return (
		<>
			<div>
				<h3>Features</h3>
				<GreyText>What are the rules for this trip?</GreyText>
				{features.map((feature) => (
					<CreateTripCardList>
						<MuiInnputField type="text" placeholder={feature} />
						<AddButton />
					</CreateTripCardList>
				))}
			</div>
		</>
	);
}

export function CreateTrip() {
	const [selectValue] = useState<string[]>([]);
	return (
		<>
			<CreateTripsCardContainer>
				<h1>Create Trip</h1>
				<GreyText>Add information</GreyText>
				<CreateTripCardList>
					<MuiInnputField type="text" placeholder="Title" />
					<MuiTextArea placeholder="Details" />
					<MuiMultiSelect
						placeholder="Tags"
						selectValue={selectValue}
						names={names}
					/>
					<AddButton />
					<MuiInnputField type="text" placeholder="Departure Date" />
					<TripFeatures />
				</CreateTripCardList>
				<SubmitButton className="Submit_btn" name="Proceed" />
			</CreateTripsCardContainer>
		</>
	);
}

// UPCOMING TRIP SECTION
export function UpcomingGroupTrip() {
	return (
		<AllGroupTripContainer>
			<AllGroupTripCardTemp>
				<h1>Upcoming Trips</h1>
				<GreyText>Recently Published</GreyText>
				<ContentSection>
					<AllGroupTripCardList>
						<h3 className="upcoming_trip_h3">Let’s Tour the shallow waters of Mozambique!</h3>
						<GreyText>03/01/2022 3:56 pm</GreyText>
					</AllGroupTripCardList>
					<ImageDiv>
						<UpcomingTripImage src={UPCOMING_GROUP_TRIPS_IMAGE} alt="" />
					</ImageDiv>
				</ContentSection>
			</AllGroupTripCardTemp>
		</AllGroupTripContainer>
	);
}

export default function AdminGroupTrips() {
	return (
		<AdminContainer>
			<AdminMenu />
			<AdminTripContainer>
				<AdminHeaderTitle title="Group Trips" />
				<AdminHomeFlexDiv>
					<CreateTrip />
					<UpcomingGroupTrip />
				</AdminHomeFlexDiv>
			</AdminTripContainer>
		</AdminContainer>
	);
}
