import { SubmitButton } from "components/buttons/submitButton";
import {
	SelectedTagsMain,
	TripDetailsDescription,
	TripDetailsMain,
	SelectedTagsBtn,
	Dates,
	Active,
	TripDetailsImageMain,
} from "./style";
import { ACTIVE_ICON, BACK_ICON, THREE_DOT } from "assets";
import { SelectedTripImage } from "components/selectedTripImage";
import { FC } from "react";
import { SelectedTagType } from "../types";
import { AdminContainer, AdminHomeFlexDiv, AdminTripContainer } from "../style";
import AdminMenu from "components/menuHeader/admin";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import { AllGroupTrip } from "..";
import { useLocation, useNavigate } from "react-router-dom";

export const SelectedTags: FC<{ selectedTags: SelectedTagType }> = ({
	selectedTags,
}) => {
	return (
		<>
			<SelectedTagsMain>
				{selectedTags &&
					selectedTags.map((tag, index) => (
						<SelectedTagsBtn key={index}>
							<span>{tag.tag || tag}</span>
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
			{image && image.image?.map((images: any, index: string | number) => (
				<div key={index} className="images">
					<SelectedTripImage
						src={images.images || images}
						alt="selected trip details"
					/>
				</div>
			))}
		</TripDetailsImageMain>
	);
};

export function TripDetails(data: any) {
	const navigate = useNavigate();
	// LIST OF TAGS SELECTED BY USER THESE DATA WILL COME FROM BACK END
	

	const tag = data?.data.tags;

	const breakDown = data?.data.features.breakDown;

	const inclusions = data?.data.features.inclusions;

	const exclusions = data?.data.features.exclusions;
	const payment = data?.data.payment;

	const image = data?.data.features.image;

    const date = data?.data.date
    console.log(date)

    const inputDate = new Date(date);

const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Month (0-11) is zero-based
const day = String(inputDate.getDate()).padStart(2, '0');
const year = inputDate.getFullYear();

const formattedDate = `${month}/${day}/${year}`;



	return (
		<>
			<TripDetailsMain>
				<header>
					<section className="header_section">
						<img onClick={() => navigate(-1)} alt="back icon" src={BACK_ICON} />
						<h1>Trip details</h1>
					</section>
					<img src={THREE_DOT} alt="dots" />
				</header>
				<h3>Let’s Tour the shallow waters of Mozambique!</h3>
				<TripDetailsDescription>
					<p>{data?.data.details}</p>
					<SelectedTags selectedTags={tag} />
					<Dates>{formattedDate}</Dates>
					{breakDown?.map((condition: any, index: any) => (
						<section key={index} className="condition">
							<Active alt="active" src={ACTIVE_ICON} />
							<span>{condition.condition || condition}</span>
						</section>
					))}
					{inclusions?.map((inclusion: any, index: any) => (
						<div key={index} className="included_trips">
							<h3>Trip Includes</h3>
							<section className="included_trips_condition">
								<Active alt="active" src={ACTIVE_ICON} />
								<span>{inclusion.inclusion || inclusion}</span>
							</section>
						</div>
					))}
					{exclusions?.map((exclusion: any, index: any) => (
						<div key={index} className="included_trips">
							<h3>Trip Does Not Includes</h3>
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
							<span>${payment}</span>
						</section>
					</div>
                   <div className="included_trips">
                   <h3>Trip Capacity</h3>
                    <section className="condition">
                    
							<span>{data?.data.tripCapacity.value}</span>
                            <span>Out Of</span>
                            <span>{data?.data.tripCapacity.total}</span>
						</section>
                   </div>
				</TripDetailsDescription>
				<SubmitButton className="Submit_btn" name="Update" />
			</TripDetailsMain>
		</>
	);
}

export default function AdminGroupTripsDetails() {
	const location = useLocation();

	return (
		<AdminContainer>
			<AdminMenu />
			<AdminTripContainer>
				<AdminHeaderTitle title="Group Trips" />
				<AdminHomeFlexDiv>
					<TripDetails data={location.state} />
					<AllGroupTrip />
				</AdminHomeFlexDiv>
			</AdminTripContainer>
		</AdminContainer>
	);
}
