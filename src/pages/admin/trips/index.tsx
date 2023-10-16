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
	DatePickerr,
	MuiInnputField,
	MuiMultiSelect,
	MuiTextArea,
} from "components/muiInputFields";
import { useState } from "react";
import { AddButton } from "components/buttons/addButton";
import { SubmitButton } from "components/buttons/submitButton";
import { UpcomingTripImage } from "components/menuHeader/admin/upcomingTripImage";
import { UPCOMING_GROUP_TRIPS_IMAGE } from "assets";
import { SelectChangeEvent } from "@mui/material";
import { TripFeatures } from "./tripFeatures";
import { Images } from "./paymentImage";
import { TripDetails } from "./tripDetails";


const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard"];

// const features = ["Breakdown", "Inclusions", "Exclusions"];

type CreateTripType = {
	setIsSubmitted: React.Dispatch<React.SetStateAction<string>>;
}

export function CreateTrip({ setIsSubmitted, }: CreateTripType) {

	const [tags, setTags] = useState<string[]>([]);

	const [groupTripDetails, setGroupTripDetails] = useState({
		title: "",
		details: "",
		date: "",
		breakthrough: "",
		inclusions: "",
		exclusions: "",
		image: "",
		payment: "",
	});


	const handleChange = (event: SelectChangeEvent<typeof tags>) => {

		const { target: { value }, } = event;

		setTags(typeof value === "string" ? value.split(",") : value);
	};



	return (
		<>
			<CreateTripsCardContainer>
				<h1>Create Trip</h1>
				<GreyText>Add information</GreyText>
				<CreateTripCardList>
					<MuiInnputField
						value={groupTripDetails.title}
						onchange={(e) =>
							setGroupTripDetails({ ...groupTripDetails, title: e.target.value })
						}
						type="text"
						placeholder="Title"
					/>
					<MuiTextArea
						value={groupTripDetails.details}
						onchange={(e) =>
							setGroupTripDetails({ ...groupTripDetails, details: e.target.value })
						}
						placeholder="Details"
					/>
					<MuiMultiSelect
						onchange={handleChange}
						placeholder="Tags"
						selectValue={tags}
						names={names}
					/>
					<AddButton />
					<DatePickerr
						onchange={(e) =>
							setGroupTripDetails({ ...groupTripDetails, date: e.target.value })
						}
						value={groupTripDetails.date}
						placeholder="Departure Date"
					/>
					<TripFeatures
						setGroupTripDetails={setGroupTripDetails}
						groupTripDetails={groupTripDetails}
					/>
					<Images
						setGroupTripDetails={setGroupTripDetails}
						groupTripDetails={groupTripDetails}
					/>
				</CreateTripCardList>
				<SubmitButton
					className="Submit_btn"
					name="Proceed"
					onclick={() => setIsSubmitted("trip-details")}
				/>
			</CreateTripsCardContainer>
		</>
	);
}



// UPCOMING TRIP SECTION
export function AllGroupTrip() {
	return (
		<AllGroupTripContainer>
			<AllGroupTripCardTemp>
				<h1>All Group Trips</h1>
				<GreyText>Recently Published</GreyText>
				<ContentSection>
					<AllGroupTripCardList>
						<h3 className="upcoming_trip_h3">
							Let’s Tour the shallow waters of Mozambique!
						</h3>
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
	const [isSubmitted, setIsSubmitted] = useState<string>("create-trip"); // this is a temperary state just to toggle the other detials page from create trip
	return (
		<AdminContainer>
			<AdminMenu />
			<AdminTripContainer>
				<AdminHeaderTitle title="Group Trips" />
				<AdminHomeFlexDiv>
					{isSubmitted === "create-trip" ? (
						<CreateTrip setIsSubmitted={setIsSubmitted} />
					) : (
						isSubmitted === "trip-details" && <TripDetails setIsSubmitted={setIsSubmitted} />
					)}
					<AllGroupTrip />
				</AdminHomeFlexDiv>
			</AdminTripContainer>
		</AdminContainer>
	);
}
