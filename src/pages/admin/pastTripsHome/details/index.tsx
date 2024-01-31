import { AdminContainer, AdminHomeContainer } from "pages/admin/home/style";
import { HeaderDiv } from "../stye";
import AdminMenu from "components/menuHeader/admin";
import { PastTripsHomeDetailsStyle } from "./style";
import { BACK_ICON } from "assets";
import { SubmitButton } from "components/buttons/submitButton";
import { ADMIN_PAST_TRIPS_ADD } from "routes/frontend";
import { useLocation, useNavigate } from "react-router-dom";
import { dateModifierWithYear } from "utilities/helpers";

const PastTripHomeDetails = ({ data }: any) => {
	const navigate = useNavigate();
	const location = useLocation();

	console.log(location?.state?.data);

	const reviewData = location?.state?.data;
	console.log(data,"review", reviewData?.profileImage);

	const reviewDate = dateModifierWithYear(new Date(reviewData?.updatedAt));
	const date = dateModifierWithYear(new Date(data?.depatureDate));

	const returnDate = dateModifierWithYear(new Date(data?.returnDate));

	const reviewProfileImage = reviewData?.profileImage

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
				<div className="details">
					<p>{reviewData?.comment}</p>
					<p className="name">
						{reviewData?.name} {reviewDate}
					</p>
				</div>
				<div className="image_div">
					<div className="image">
						<img src={reviewProfileImage} alt="" />
					</div>
				</div>
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
