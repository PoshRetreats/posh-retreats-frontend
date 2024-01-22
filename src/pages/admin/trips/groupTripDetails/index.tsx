import { SubmitButton } from "components/buttons/submitButton";
import {
	SelectedTagsMain,
	TripDetailsDescription,
	TripDetailsMain,
	SelectedTagsBtn,
	Dates,
	Active,
	TripDetailsImageMain,
	GroupTripNameContainer,
} from "./style";
import { ACTIVE_ICON, BACK_ICON, THREE_DOT } from "assets";
import { SelectedTripImage } from "components/selectedTripImage";
import { FC } from "react";
import { SelectedTagType } from "../types";
import {
	AdminContainer,
	AdminHomeFlexDiv,
	AdminTripContainer,
	GreyText,
} from "../style";
import AdminMenu from "components/menuHeader/admin";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
// import { AllGroupTrip } from "..";
import { useLocation } from "react-router-dom";
import { AdminHeaderSpace } from "components/menuHeader/admin/style";
import {
	// TripCardContainer,
	TripHeadText,
} from "pages/admin/home/style";
import { ADMIN_GROUP_TRIPS_DETAILS_INFO_URL } from "routes/frontend";
import useAppNavigator from "hooks/useAppNavigator";

export const SelectedTags: FC<{ selectedTags: SelectedTagType }> = ({
	selectedTags,
}) => {
	return (
		<>
			<SelectedTagsMain>
				{selectedTags &&
					selectedTags?.map((tag, index) => (
						<SelectedTagsBtn key={index}>
							<span>{tag?.tag || tag}</span>
						</SelectedTagsBtn>
					))}
			</SelectedTagsMain>
		</>
	);
};
// IMAGES: THIS WILL BE MAPPED WHEN THE API'S COME
export const TripDetailsImage = (image: string[] | any) => {
	return (
		<TripDetailsImageMain>
			{image &&
				image.image?.map((images: any, index: string | number) => (
					<div key={index} className="images">
						<SelectedTripImage
							src={images?.images || images}
							alt="selected trip details"
						/>
					</div>
				))}
		</TripDetailsImageMain>
	);
};

export function TripDetails(data: any) {
	const { appNavigator } = useAppNavigator();
	// LIST OF TAGS SELECTED BY USER THESE DATA WILL COME FROM BACK END
	console.log({ data });
	const tag = data?.data.tags;

	const breakdown = data?.data.breakDown;

	const inclusions = data?.data.inclusions;

	const exclusions = data?.data.exclusions;
	const payment = data?.data.amount;

	const image = data?.data.image;

	const depatureDate = data?.data.depatureDate;
	const returnDate = data?.data?.returnDate;

	const formatedDepatureDate = new Date(depatureDate)?.toLocaleString();
	const formatedreturnDate = new Date(returnDate)?.toLocaleDateString();

	// const month = String(inputDate.getMonth() + 1).padStart(2, "0"); // Month (0-11) is zero-based
	// const day = String(inputDate.getDate()).padStart(2, "0");
	// const year = inputDate.getFullYear();

	// const formattedDate = `${month}/${day}/${year}`;

	return (
		<>
			<TripDetailsMain>
				<header>
					<section className="header_section">
						<img onClick={() => appNavigator(-1)} alt="back icon" src={BACK_ICON} />
						<h1>Trip details</h1>
					</section>
					<img src={THREE_DOT} alt="dots" />
				</header>
				<h3>{data.data.title}</h3>
				<TripDetailsDescription>
					<div className="included_trips">
						<h3>Trip Includes</h3>
						<section className="included_trips_condition">
							<Active alt="active" src={ACTIVE_ICON} />
							<span>{data?.data.tripType}</span>
						</section>
					</div>
					<p>{data?.data.details}</p>
					<SelectedTags selectedTags={tag} />
					<Dates>{formatedDepatureDate}</Dates>
					<Dates>{formatedreturnDate}</Dates>
					{breakdown?.map((condition: any, index: any) => (
						<section key={index} className="condition">
							<Active alt="active" src={ACTIVE_ICON} />
							<span>{condition.condition || condition}</span>
						</section>
					))}
					<h3 className="trip_includes_header">Trip Includes</h3>
					{inclusions?.map((inclusion: any, index: any) => (
						<div key={index} className="included_trips">
							<section className="included_trips_condition">
								<Active alt="active" src={ACTIVE_ICON} />
								<span>{inclusion.inclusion || inclusion}</span>
							</section>
						</div>
					))}
					<h3 className="trip_includes_header">Trip Does Not Includes</h3>
					{exclusions?.map((exclusion: any, index: any) => (
						<div key={index} className="included_trips">
							<section className="included_trips_condition">
								<Active alt="active" src={ACTIVE_ICON} />
								<span>{exclusion.exclusion || exclusion}</span>
							</section>
						</div>
					))}
					<TripDetailsImage image={image} />
					<div className="included_trips">
						<h3>Payment</h3>
						<section className="included_trips_condition">
							<span>{payment}</span>
						</section>
					</div>
					<div className="included_trips">
						<h3>Trip Capacity</h3>
						<section className="condition">
							<span>{data?.data.registeredTravelers}</span>
							<span>Out Of</span>
							<span>{data?.data.totalExpectedTravelers}</span>
						</section>
					</div>
				</TripDetailsDescription>
				<SubmitButton className="Submit_btn" name="Update" />
			</TripDetailsMain>
		</>
	);
}

export function RegistrationCard({ data }: any) {
	const { appNavigator } = useAppNavigator();

	const joinedTraveller = data?.joinedTravellersForm;
	return (
		<GroupTripNameContainer>
			{joinedTraveller?.map((traveller: any) => (
				<div className="group_name_container" key={traveller?.trip}>
					<div
						onClick={() =>
							appNavigator(
								ADMIN_GROUP_TRIPS_DETAILS_INFO_URL,
								data.joinedTravellersForm
							)
						}
					>
						<TripHeadText>{traveller?.questions.fullName}</TripHeadText>
						<GreyText>{traveller?.questions.location}</GreyText>
					</div>
					<GreyText>{data?.date}</GreyText>
				</div>
			))}
		</GroupTripNameContainer>
	);
}

export default function AdminGroupTripsDetails() {
	const location = useLocation();
	console.log({ state: location.state });
	return (
		<AdminContainer>
			<AdminMenu />
			<AdminHeaderTitle title="Group Trip Details" />
			<AdminHeaderSpace />
			<AdminTripContainer>
				<AdminHomeFlexDiv>
					<TripDetails data={location.state} />
					<RegistrationCard data={location.state} />
				</AdminHomeFlexDiv>
			</AdminTripContainer>
		</AdminContainer>
	);
}
