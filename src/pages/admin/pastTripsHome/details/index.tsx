import { AdminContainer, AdminHomeContainer } from "pages/admin/home/style";
import { HeaderDiv } from "../stye";
import AdminMenu from "components/menuHeader/admin";
import { PastTripsHomeDetailsStyle } from "./style";
import { BACK_ICON, SELECTED_TRIP_IMAGE } from "assets";
import { SubmitButton } from "components/buttons/submitButton";
import { ADMIN_PAST_TRIPS_ADD } from "routes/frontend";
import { useNavigate } from "react-router-dom";

const PastTripHomeDetails = () => {
    const navigate = useNavigate()
	return (
		<PastTripsHomeDetailsStyle>
			<div className="container">
				<div className="text_backicon">
					<div className="icon">
						<img src={BACK_ICON} alt="" />
					</div>
					<div className="text">
						<p>10/03/2023 - 10/04/2023</p>
						<h3 className="location">Morocco 2023</h3>
					</div>
				</div>
				<div className="details">
					<p>
						“Explore breathtaking landscapes, from lush rainforests to breathtaking
						mountain peaks, all while indulging in world-class accommodations that
						cater to your every desire. Dive into crystal-clear waters and swim
						alongside majestic marine life.”
					</p>
					<p className="name">Rita Ora (Petra, Jordan, 2015)</p>
				</div>
				<div className="image">
					<img src={SELECTED_TRIP_IMAGE} alt="" />
				</div>
				<div className="button">
					<SubmitButton onclick={() => navigate(ADMIN_PAST_TRIPS_ADD)} name="Add Reviews" />
				</div>
			</div>
		</PastTripsHomeDetailsStyle>
	);
};

export const PastTripHomeDetailsPage = () => {
	return (
		<AdminContainer>
			<AdminMenu />
			<HeaderDiv>
				<p>Welcome, Posh Retreats</p>
				<h1>Past Trips And Reviews</h1>
			</HeaderDiv>
			<AdminHomeContainer>
				<PastTripHomeDetails />
			</AdminHomeContainer>
		</AdminContainer>
	);
};
