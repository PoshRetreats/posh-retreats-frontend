import AdminMenu from "components/menuHeader/admin";
import { AdminContainer } from "../home/style";
import { AdminHomeContainer } from "../pastTrips/style";
import { HeaderDiv, PastTripHomeStyle } from "./stye";
import { PAST_TRIPS } from "assets";
import { ADMIN_PAST_TRIPS_HOME_DETAILS_URL } from "routes/frontend";
import { useNavigate } from "react-router-dom";

const PastTripHomeContent = () => {
    const navigate = useNavigate()
	return (
		<>
			<PastTripHomeStyle>
				<main className="past_trip">
					<section onClick={() => navigate(ADMIN_PAST_TRIPS_HOME_DETAILS_URL)} className="image_text">
						<div className="image">
							<img src={PAST_TRIPS} alt="" />
						</div>
						<div className="text_button">
							<div className="text">
								<p>10/03/2023 - 10/04/2023</p>
								<h3 className="location">Morocco 2023</h3>
							</div>
							<div className="tabs">Adventures</div>
						</div>
					</section>
                    <section onClick={() => navigate(ADMIN_PAST_TRIPS_HOME_DETAILS_URL)} className="image_text">
						<div className="image">
							<img src={PAST_TRIPS} alt="" />
						</div>
						<div className="text_button">
							<div className="text">
								<p>10/03/2023 - 10/04/2023</p>
								<h3 className="location">Morocco 2023</h3>
							</div>
							<div className="tabs">Adventures</div>
						</div>
					</section>
                    <section onClick={() => navigate(ADMIN_PAST_TRIPS_HOME_DETAILS_URL)} className="image_text">
						<div className="image">
							<img src={PAST_TRIPS} alt="" />
						</div>
						<div className="text_button">
							<div className="text">
								<p>10/03/2023 - 10/04/2023</p>
								<h3 className="location">Morocco 2023</h3>
							</div>
							<div className="tabs">Adventures</div>
						</div>
					</section>
                    <section onClick={() => navigate(ADMIN_PAST_TRIPS_HOME_DETAILS_URL)} className="image_text">
						<div className="image">
							<img src={PAST_TRIPS} alt="" />
						</div>
						<div className="text_button">
							<div className="text">
								<p>10/03/2023 - 10/04/2023</p>
								<h3 className="location">Morocco 2023</h3>
							</div>
							<div className="tabs">Adventures</div>
						</div>
					</section>
				</main>
			</PastTripHomeStyle>
		</>
	);
};

export default function PastTripsAndReviewsHome() {
	return (
		<AdminContainer>
			<AdminMenu />
			<HeaderDiv>
				<p>Welcome, Posh Retreats</p>
				<h1>Past Trips And Reviews</h1>
			</HeaderDiv>
			<AdminHomeContainer>
				<PastTripHomeContent />
			</AdminHomeContainer>
		</AdminContainer>
	);
}
