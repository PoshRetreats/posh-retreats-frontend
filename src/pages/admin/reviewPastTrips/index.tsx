import AdminMenu from "components/menuHeader/admin";
import {
	AdminContainer,
	AdminHomeContainer,
	AdminHomeFlexDiv,
	AllTripsCardContainer,
	ReviewContainer,
	ButtonDiv,
	GreyText,
	TripCardContainer,
	TripHeadText,
	AllGroupTripContainer,
	AllGroupTripCardTemp,
	ContentSection,
	AllGroupTripCardList,
	ImageDiv,
	PastTripCardImageUrl,
} from "./style";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import { MuiInnputField } from "components/muiInputFields";
import { FormEvent, useState } from "react";
import { CreateTripCardList } from "../trips/style";
import { SubmitButton } from "components/buttons/submitButton";
import { UpcomingTripImage } from "components/menuHeader/admin/upcomingTripImage";
import { UPCOMING_GROUP_TRIPS_IMAGE } from "assets";
import { makePostRequestWithAxios } from "requests/requests";
import useAppNavigator from "hooks/useAppNavigator";
import { SERVER__ADD_REVIEW } from "routes/server";
import { useLocation } from "react-router-dom";

type BasicTripData = {
	title: string;
	total: string;
	date: string;
};

const ADMIN_PAST_TRIP_DETAILS = "/admin/user/past_trips-home-details"

export function TripDetailsCard({ title, total, date }: BasicTripData) {
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

type ReviewState = {
	review: string;
	name: string;
};

export function Review({ setReviews, review }: ReviewState | any) {
	const reviews = [
		{ name: "review", label: "Review" },
		{ name: "name", label: "Name" },
	];

	function handleChange(event: { target: { value: string; name: string } }) {
		const value = event.target.value;

		setReviews({ ...review, [event.target.name]: value });
	}

	return (
		<>
			<ReviewContainer>
				<h3>Trip Reviews</h3>
				<CreateTripCardList>
					{reviews.map((reviewItem) => (
						<div key={reviewItem.name}>
							<MuiInnputField
								onchange={handleChange}
								value={review[reviewItem.name as keyof ReviewState]}
								type="text"
								name={reviewItem.name}
								placeholder={reviewItem.label}
							/>
						</div>
					))}
				</CreateTripCardList>
			</ReviewContainer>
		</>
	);
}

export function TripDetails(tripDetailsData: any) {
	const { appNavigator } = useAppNavigator();

	const [information, setInformation] = useState<string>("");

	const [review, setReviews] = useState<ReviewState>({
		review: "",
		name: "",
	});

	const [imageFields, setImageFields] = useState<string>("");

	const [loading, setLoading] = useState<boolean>(false);

const tripId = tripDetailsData?.tripDetailsData?._id
	const postData = {
		tripId: tripId,
		reviewObj: {
			name: review.name,
			comment: review.review,
			profileImage:imageFields
		},
	};

	const detailsValidation =
		review.review === "" ||
		review.name === ""

		async function submitTripReview(event: FormEvent) {
			event.preventDefault();
			if (detailsValidation) {
				alert("Please complete the review form *");
			}
			setLoading(true);
			makePostRequestWithAxios(SERVER__ADD_REVIEW, postData)
				.then((res: any) => {
					// setData(res)
					setLoading(false);
					//TODO: save basic admin data
					console.log(res)
					appNavigator(`${ADMIN_PAST_TRIP_DETAILS}/${res?.data?.trip}`, res);
					return res;
				})
				.catch((err) => {
					setLoading(false);
					alert(err.message);
				}).finally(() => setLoading(false));
		};

	return (
		<AllTripsCardContainer onSubmit={submitTripReview} >
			<h1>Trip Details</h1>
			<MuiInnputField
					onchange={(e) => setInformation(e.target.value)}
					value={information}
					type="text"
					name="information"
					placeholder="Information"
				/>
			<PastTripCardImageUrl>
				<MuiInnputField
					onchange={(e) => setImageFields(e.target.value)}
					value={imageFields}
					type="text"
					name="image url"
					placeholder="paste photo url here..."
				/>
			</PastTripCardImageUrl>
			<Review review={review} setReviews={setReviews} />
			<ButtonDiv>
				<SubmitButton
					loading={loading}
					type="submit"
					className="Submit_btn_preview"
					name={loading?"Loading":"Post"}
				/>
			</ButtonDiv>
		</AllTripsCardContainer>
	);
}

export function AllPastTrip() {
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
						<GreyText>2022</GreyText>
					</AllGroupTripCardList>
					<ImageDiv>
						<UpcomingTripImage src={UPCOMING_GROUP_TRIPS_IMAGE} alt="" />
					</ImageDiv>
				</ContentSection>
			</AllGroupTripCardTemp>
		</AllGroupTripContainer>
	);
}

export default function PastTripsAndReviews() {
	const location = useLocation()

	return (
		<AdminContainer>
			<AdminMenu />
			<AdminHomeContainer>
				<AdminHeaderTitle title="Past Trips And Reviews" />
				<AdminHomeFlexDiv>
					<TripDetails tripDetailsData={location?.state} />
					<AllPastTrip />
				</AdminHomeFlexDiv>
			</AdminHomeContainer>
		</AdminContainer>
	);
}
