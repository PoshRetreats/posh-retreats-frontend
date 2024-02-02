import { AdminContainer, AdminHomeContainer } from "pages/admin/home/style";
import { HeaderDiv } from "../stye";
import AdminMenu from "components/menuHeader/admin";
import { PastTripsHomeDetailsStyle } from "./style";
import { BACK_ICON } from "assets";
import { SubmitButton } from "components/buttons/submitButton";
import { ADMIN_PAST_TRIPS_ADD } from "routes/frontend";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { dateModifierWithYear } from "utilities/helpers";
import { useGetPastTripsReviews } from "hooks/useGetReview";

const PastTripHomeDetails = ({ data }: any) => {
	const navigate = useNavigate();
	const location = useLocation();

	const { reviewTripsData } = useGetPastTripsReviews();
	console.log(location?.state?.data, "review", reviewTripsData);

	const date = dateModifierWithYear(new Date(data?.depatureDate));

	const returnDate = dateModifierWithYear(new Date(data?.returnDate));

	return (
		<PastTripsHomeDetailsStyle>
			<div className="container">
				<div className="text_backicon">
					<div className="icon" onClick={() => navigate(-1)}>
						<img src={BACK_ICON} alt="" />
					</div>
					<div className="text">
						<p>
							{date} - {returnDate}
						</p>
						<h3 className="location">{data?.title}</h3>
					</div>
				</div>
				<div className="details">
					<p>{data?.details}</p>
					{/* <p className="name">Rita Ora (Petra, Jordan, 2015)</p> */}
				</div>
				<div className="image_div">
					{data?.images?.map((image: string) => {
						return (
							<div className="image">
								<img src={image} alt="" />
							</div>
						);
					})}
				</div>
				{reviewTripsData?.map(
					(reviews: { comment: string; name: string; _id: string, updatedAt: string,profileImage: string }) => {
						const reviewProfileImage = reviews?.profileImage;
						console.log(reviews)
						const reviewDate = dateModifierWithYear(new Date(reviews?.updatedAt));
						return (
							<section key={reviews?._id}>
								<div className="details">
									<p>{reviews?.comment}</p>
									<p className="name">
										{reviews?.name} {reviewDate}
									</p>
								</div>
								<div className="image_div">
									<div className="image">
										<img src={reviewProfileImage} alt="" />
									</div>
								</div>
							</section>
						);
					}
				)}
				<div className="button">
					<SubmitButton
						onclick={() => navigate(ADMIN_PAST_TRIPS_ADD, { state: data })}
						name="Add Reviews"
					/>
				</div>
			</div>
		</PastTripsHomeDetailsStyle>
	);
};

export const PastTripHomeDetailsPage = () => {
	const location = useLocation();
	const { PastTrips_id } = useParams();

	console.log(PastTrips_id);
	return (
		<AdminContainer>
			<AdminMenu />
			<HeaderDiv>
				<p>Welcome, Posh Retreats</p>
				<h1>Past Trips And Reviews</h1>
			</HeaderDiv>
			<AdminHomeContainer>
				<PastTripHomeDetails data={location?.state} />
			</AdminHomeContainer>
		</AdminContainer>
	);
};
