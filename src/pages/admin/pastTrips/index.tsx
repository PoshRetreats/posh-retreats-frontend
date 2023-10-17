import AdminMenu from "components/menuHeader/admin";
import {
	ActivityCardContainer,
	ActivityCardTemp,
	AdminContainer,
	AdminHomeContainer,
	AdminHomeFlexDiv,
	AllTripsCardContainer,
	ReviewContainer,
    ButtonDiv,
	GreyText,
	TripCardContainer,
	TripCardList,
	PastTripCardList,
	TripHeadText,
} from "./style";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import { MuiInnputField, MuiTextArea } from "components/muiInputFields";
import { useRef, useState } from "react";
import { ImageInput } from "components/imageInput";
import { CreateTripCardList } from "../trips/style";
import { SubmitButton } from "components/buttons/submitButton";

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

const imageInputDetails = [
	{ name: "imag1", label: "Select image" },
	{ name: "imag1", label: "Select image" },
	{ name: "imag1", label: "Select image" },
	{ name: "imag1", label: "Select image" },
	{ name: "imag1", label: "Select image" },
	{ name: "imag1", label: "Select image" },
];

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

export function Review() {
	const [review, setReviews] = useState({
		review: "",
		name: "",
		location: "",
		year: "",
	});

	const reviews = [
		{ name: "imag1", label: "review", value: review.review },
		{ name: "imag1", label: "name", value: review.name },
		{ name: "imag1", label: "location", value: review.location },
		{ name: "imag1", label: "year", value: review.year },
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
					{reviews.map((review) => (
						<MuiInnputField
							onchange={handleChange}
							value={review.value}
							type="text"
							name={review.name}
							placeholder={review.label}
						/>
					))}
				</CreateTripCardList>
			</ReviewContainer>
		</>
	);
}

export function TripDetails() {
	const ref = useRef<HTMLInputElement | null>(null);

	const clickImageField = () => ref.current?.click();

	const [imageFields, setImageFields] = useState({
		image1: "",
		image2: "",
	});

	function handleImageFieldChange(event: {
		target: { value: string; name: string };
	}) {
		const value = event.target.value;

		setImageFields({ ...imageFields, [event.target.name]: value });
	}

	return (
		<AllTripsCardContainer>
			<h1>Trip Details</h1>
			<MuiTextArea
				// value={groupTripDetails.details}

				placeholder="Add Information"
			/>
			<PastTripCardList>
				{imageInputDetails.map((details) => (
					<ImageInput
						ref={ref}
						onChange={handleImageFieldChange}
						onClick={clickImageField}
					/>
				))}
			</PastTripCardList>
			<Review />
			<ButtonDiv>
				<SubmitButton
					className="Submit_btn_preview"
					name="Post"
					// onclick={() => setIsSubmitted("trip-details")}
				/>
			</ButtonDiv>
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
					{tripData.map(({ title, total, date }: BasicTripData) => (
						<TripDetailsCard title={title} total={total} date={date} />
					))}
				</TripCardList>
			</ActivityCardTemp>
			{/* <ActivityCardTemp>
				<h1>Activity</h1>
				<GreyText>Recently Published</GreyText>
				<TripCardList>
					{tripData.map(({ title, total, date }: BasicTripData) => (
						<TripCard title={title} total={total} date={date} />
					))}
				</TripCardList>
			</ActivityCardTemp> */}
		</ActivityCardContainer>
	);
}

export default function PastTripsAndReviews() {
	return (
		<AdminContainer>
			<AdminMenu />
			<AdminHomeContainer>
				<AdminHeaderTitle title="Past Trips And Reviews" />
				<AdminHomeFlexDiv>
					<TripDetails />
					<ActivityCard />
				</AdminHomeFlexDiv>
			</AdminHomeContainer>
		</AdminContainer>
	);
}
