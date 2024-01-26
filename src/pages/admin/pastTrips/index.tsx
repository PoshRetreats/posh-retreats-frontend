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
	PastTripCardList,
	TripHeadText,
	AllGroupTripContainer,
	AllGroupTripCardTemp,
	ContentSection,
	AllGroupTripCardList,
	ImageDiv,
} from "./style";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import { MuiInnputField, MuiTextArea } from "components/muiInputFields";
import { FormEvent, useRef, useState } from "react";
import { ImageInput } from "components/imageInput";
import { CreateTripCardList } from "../trips/style";
import { SubmitButton } from "components/buttons/submitButton";
import { UpcomingTripImage } from "components/menuHeader/admin/upcomingTripImage";
import { UPCOMING_GROUP_TRIPS_IMAGE } from "assets";
import { useNavigate } from "react-router-dom";
import { ADMIN_PAST_TRIPS_DETAILS_URL } from "routes/frontend";
import { makePostRequestWithAxios } from "requests/requests";

type BasicTripData = {
	title: string;
	total: string;
	date: string;
};

// const imageInputDetails = [
// 	{ name: "imag1", label: "Select image" },
// 	{ name: "imag2", label: "Select image" },
// 	{ name: "imag3", label: "Select image" },
// 	{ name: "imag4", label: "Select image" },
// 	{ name: "imag5", label: "Select image" },
// 	{ name: "imag6", label: "Select image" },
// ];

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
	location: string;
	year: string;
};

export function Review({setReviews,review}:ReviewState | any ) {
	

	const reviews = [
		{ name: "review", label: "Review" },
		{ name: "name", label: "Name" },
		{ name: "location", label: "Location" },
		{ name: "year", label: "Year" },
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

export function TripDetails() {

	const navigate = useNavigate()
	const inneRef = useRef<HTMLInputElement | null>(null);

	const [information, setInformation] = useState<string>("");

	const [review, setReviews] = useState<ReviewState>({
		review: "",
		name: "",
		location: "",
		year: "",
	});



	const [imageFields, setImageFields] = useState<any>({
		image1: "",
		// image2: "",
		// image3: "",
		// image4: "",
	});
	


	const clickImageField = () => inneRef.current?.click();

	// function handleImageFieldChange(event: {
	// 	target: { value: string; name: string };
	// }) {
	// 	const value = event.target.value;

	// 	setImageFields({ ...imageFields, [event.target.name]: value });
	// }

	
	const [loading, setLoading] = useState<boolean>(false)

	const imgArray = Object.values(imageFields);


	const postData = {
		information: information,
		review: review.review,
		name: review.name,
		location: review.location,
		year: review.year,
		image: imgArray
	}

	const detailsValidation =
		information === "" ||
		review.review === "" ||
		review.name === "" ||
		review.location === "" ||
		review.year === "" ||
		review.name === "" 

	async function submitTripReview(event: FormEvent){
		event.preventDefault();
		if(detailsValidation){
			alert("Please complete the review form *")
		}

		makePostRequestWithAxios("", postData)
		
			.then((res: any) => {
				// setData(res)
				setLoading(false)
				//TODO: save basic admin data
				navigate(ADMIN_PAST_TRIPS_DETAILS_URL, {
					state: postData
				})
				return res
			})
			.catch((err) => {
				setLoading(false)
				alert(err.message);
			});
	}

	return (
		<AllTripsCardContainer onSubmit={submitTripReview}>
			<h1>Trip Details</h1>
			<MuiTextArea
				value={information}
				onchange={(e) => setInformation(e.target.value)}
				placeholder="Add Information"
			/>
			<PastTripCardList>
				{/* {imageInputDetails.map((details, index) => (
					<div key={index}>
						<ImageInput
							inneRef={inneRef}
							onChange={handleImageFieldChange}
							onClick={clickImageField}
							image={imageFields}
						/>
					</div>
				))} */}
				<div >
						<ImageInput
							inneRef={inneRef}
							onChange={(e) => {
								const file = e.target.files[0];
								if (file) {
								  const reader = new FileReader();
								  reader.onload = (event:any) => {
									const imageDataUrl = event.target.result;
									setImageFields({ ...imageFields, image1: imageDataUrl });
								  };
								  reader.readAsDataURL(file);
								}
							  }}
							onClick={clickImageField}
							image={imageFields.image1}
						/>
					</div>
	
					
			</PastTripCardList>
			<Review review ={review} setReviews = {setReviews} />
			<ButtonDiv>
				<SubmitButton loading = {loading} type="submit" className="Submit_btn_preview" name="Post" />
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
	return (
		<AdminContainer>
			<AdminMenu />
			<AdminHomeContainer>
				<AdminHeaderTitle title="Past Trips And Reviews" />
				<AdminHomeFlexDiv>
					<TripDetails />
					<AllPastTrip />
				</AdminHomeFlexDiv>
			</AdminHomeContainer>
		</AdminContainer>
	);
}
