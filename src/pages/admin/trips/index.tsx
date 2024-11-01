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
	TripCapacityMain,
} from "./style";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import {
	AutoComplete,
	DatePickerr,
	MuiInnputField,
	// MuiMultiSelect,
	MuiTextArea,
} from "components/muiInputFields";
import { FormEvent, useState } from "react";
import { AddButton } from "components/buttons/addButton";
import { SubmitButton } from "components/buttons/submitButton";
import { UpcomingTripImage } from "components/menuHeader/admin/upcomingTripImage";
import { UPCOMING_GROUP_TRIPS_IMAGE } from "assets";
import { TripFeatures } from "./tripFeatures";
import { Images } from "./paymentImage";
import { SelectedTags } from "./groupTripDetails";
import { FeatureTripAddedDetailsProps, GroupTripDetailsProps } from "./types";
import { InputAdornment } from "@mui/material";
import { ADMIN_GROUP_TRIPS_DETAILS_URL } from "routes/frontend";
import { makePostRequestWithAxios } from "requests/requests";
import { SERVER_CREATE_TRIP } from "routes/server";
import { AdminHeaderSpace } from "components/menuHeader/admin/style";
import useAppNavigator from "hooks/useAppNavigator";

// THIS SHOULD BBE PUT IN A DIFFERENNT FILE
const names = [
	"Adventure",
	"Nature",
	"Luxury",
	"Budget",
	"Cultural",
	"Wildlife",
	"Eco-friendly",
	"Family-friendly",
	"Food and gastronomy",
	"Active and sports",
	"Beach and relaxation",
	"Historical and heritage",
	"Wellness and spa",
	"Photography",
	"Off-the-beaten-path",
	"Volunteer and community-based",
	"Educational and learning",
	"Road trips",
	"Scenic and landscapes",
	"Safari and wildlife encounters",
	"Outdoor",
	"Exploration",
	"Wildlife",
	"Active",
	"Family-Friendly",
	"Wellness",
	"Eco-Friendly",
	"Food and Culinary",
	"Educational",
	"Remote",
	"Relaxation",
	"History and Heritage",
	"Off the Beaten Path",
	"Photography",
	"Sustainable",
	"City Escapes",
	"Retreats",
	"Beach and Coastal",
	"Wildlife Safaris",
	"Expedition",
	"Volunteer and Community-Based",
	"Art and Creativity",
	"Wine and Gastronomy",
	"Thrilling Adventures",
	"Road Trips",
	"Spiritual and Mindfulness",
	"Island Hopping",
	"Cultural Immersion",
	"Mountain Exploration",
	"Cruise and Sailing",
	"Rural Experiences",
	"Winter Escapes",
	"Wellness Retreats",
	"Scenic Landscapes",
	"Indigenous Experiences",
	"Outdoor Camping",
	"Adrenaline Rush",
	"Tropical Getaways",
	"Desert Expeditions",
	"Water Sports",
];

// const features = ["Breakdown", "Inclusions", "Exclusions"];
type TripCapacityType = {
	tripCapacity: { value: string | number; total: string | number };
	setTripCapacity: any;
};

export const TripCapacity = ({
	tripCapacity,
	setTripCapacity,
}: TripCapacityType) => {
	return (
		<>
			<TripCapacityMain>
				<h4>Trip Capacity</h4>
				<div className="inputDiv">
					<input
						value={tripCapacity.value}
						onChange={(e) =>
							setTripCapacity({ ...tripCapacity, value: e.target.value })
						}
						type="number"
					/>
					<span>Out Of</span>
					<input
						value={tripCapacity.total}
						onChange={(e) =>
							setTripCapacity({ ...tripCapacity, total: e.target.value })
						}
						type="number"
					/>
				</div>
			</TripCapacityMain>
		</>
	);
};

export function CreateTrip() {
	const { appNavigator } = useAppNavigator();
	const [tags, setTags] = useState<string[]>([]);

	const [selectedTags, setSelectedTags] = useState<string>("");
	const [tripType, setTripType] = useState<string>("");

	const [tripCapacity, setTripCapacity] = useState<{
		value: number | string;
		total: number | string;
	}>({
		value: "",
		total: "",
	});

	const [addedFeatures, setAddedFeatures] = useState<FeatureTripAddedDetailsProps>({
		breakDown: [],
		inclusion: [],
		exclusion: [],
		image: [],
	});

	const [groupTripDetails, setGroupTripDetails] = useState<
		GroupTripDetailsProps | any
	>({
		title: "",
		details: "",
		depatureDate: "",
		returnDate: "",
		breakDown: "",
		inclusion: "",
		exclusion: "",
		image: "",
		payment: "",
	});

	const detailsValidation =
		groupTripDetails.title === "" ||
		groupTripDetails.details === "" ||
		groupTripDetails.date === "" ||
		groupTripDetails.payment === "";

	const featuresValidation = [
		addedFeatures.breakDown,
		addedFeatures.inclusion,
		addedFeatures.exclusion,
		addedFeatures.image,
		tags,
	].some((feature: any) => feature.length === 0);

	const AddTags = () => {
		if (tags.includes(selectedTags)) {
			setSelectedTags("");
			return;
		}

		setTags([...tags, selectedTags]);

		setSelectedTags("");
	};

	// POST REQUEST
	const [, setData] = useState();
	const [loading, setLoading] = useState<boolean>(false);

	// POST DATA
	const postData = {
		title: groupTripDetails.title,
		details: groupTripDetails.details,
		tags: tags,
		depatureDate: groupTripDetails.depatureDate.$d,
		returnDate: groupTripDetails.returnDate.$d,
		tripType: tripType,
		breakdown: addedFeatures.breakDown,
		inclusions: addedFeatures.inclusion,
		exclusions: addedFeatures.exclusion,
		images: addedFeatures.image,
		amount: groupTripDetails.payment,
		registeredTravelers: tripCapacity.value,
		totalExpectedTravelers: tripCapacity.total,
	};

	console.log({ postData });
	async function SubmitCreateTrip(event: FormEvent) {
		event.preventDefault();

		if (detailsValidation) {
			alert("please complete your registration details");
			return;
		}

		if (featuresValidation) {
			alert("please complete your registration features");
			return;
		}

		setLoading(true);
		makePostRequestWithAxios(SERVER_CREATE_TRIP, postData)
			.then((res: any) => {
				setData(res);
				setLoading(false);
				appNavigator(ADMIN_GROUP_TRIPS_DETAILS_URL, postData);
			})
			.catch((err) => {
				setLoading(false);
				alert(err.message);
			});
	}

	return (
		<>
			<CreateTripsCardContainer onSubmit={SubmitCreateTrip}>
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
					<AutoComplete
						onChange={(event: any, value: any) => setTripType(value)}
						placeholder="Trip Type"
						value={tripType}
						// names={names}
						option={["public", "private"]}
					/>
					<AutoComplete
						onChange={(event: any, value: any) => setSelectedTags(value)}
						placeholder="Tags"
						value={selectedTags}
						// names={names}
						option={names}
					/>
					{tags.length > 0 && <SelectedTags selectedTags={tags} />}
					<AddButton onclick={AddTags} />
					<DatePickerr
						dateOnChange={(event: any) =>
							setGroupTripDetails({ ...groupTripDetails, depatureDate: event })
						}
						value={groupTripDetails.date}
						placeholder="Departure Date"
					/>
					<DatePickerr
						dateOnChange={(event: any) =>
							setGroupTripDetails({ ...groupTripDetails, returnDate: event })
						}
						value={groupTripDetails.date}
						placeholder="Return Date"
					/>
					<TripFeatures
						addedFeatures={addedFeatures}
						setAddedFeatures={setAddedFeatures}
						setGroupTripDetails={setGroupTripDetails}
						groupTripDetails={groupTripDetails}
					/>
					<Images
						addedFeatures={addedFeatures}
						setAddedFeatures={setAddedFeatures}
						setGroupTripDetails={setGroupTripDetails}
						groupTripDetails={groupTripDetails}
					/>
					<MuiInnputField
						value={groupTripDetails.payment}
						onchange={(e) =>
							setGroupTripDetails({ ...groupTripDetails, payment: e.target.value })
						}
						type="text"
						placeholder="Payment"
						startAdornment={<InputAdornment position="start">$</InputAdornment>}
					/>
					<TripCapacity
						tripCapacity={tripCapacity}
						setTripCapacity={setTripCapacity}
					/>
				</CreateTripCardList>
				<SubmitButton
					loading={loading}
					type="submit"
					className="Submit_btn"
					name="Proceed"
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
	return (
		<AdminContainer>
			<AdminMenu />
			<AdminHeaderTitle title="Create Group Trips" />
			<AdminHeaderSpace />
			<AdminTripContainer>
				<AdminHomeFlexDiv>
					<CreateTrip />
					<AllGroupTrip />
				</AdminHomeFlexDiv>
			</AdminTripContainer>
		</AdminContainer>
	);
}
