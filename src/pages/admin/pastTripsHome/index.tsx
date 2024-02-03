import AdminMenu from "components/menuHeader/admin";
import { AdminContainer } from "../home/style";
import { AdminHomeContainer } from "../reviewPastTrips/style";
import { HeaderDiv, PastTripHomeStyle } from "./stye";
// import { ADMIN_PAST_TRIPS_HOME_DETAILS_URL } from "routes/frontend";
import { useNavigate } from "react-router-dom";
import { useGetPastTrips } from "hooks/useGetPastRips";
import ComponentLoader from "components/loaders/ComponentLoader";
import { dateModifierWithYear } from "utilities/helpers";

const ADMIN_PAST_TRIP_DETAILS = "/admin/user/past_trips-home-details"
const PastTripHomeContent = () => {
	const navigate = useNavigate();
	const { loading, pastTripsData } = useGetPastTrips();
	return (
		<>
			{loading ? (
				<ComponentLoader color="#000" />
			) : (
				pastTripsData && (
					<PastTripHomeStyle>
						<main className="past_trip">
							{pastTripsData?.map((details: any) => {
								const firstTworeakDown = details.breakdown.slice(0, 2);
								const date = dateModifierWithYear(new Date(details?.depatureDate));
								const returnDate = dateModifierWithYear(
									new Date(details?.returnDate)
								);
								return (
									<section
									key={details?._id}
										onClick={() =>{
											
											navigate( `${ADMIN_PAST_TRIP_DETAILS}/${details?._id}`, { state: details })
										}}
										className="image_text"
									>
										<div className="image">
											<img src={details?.images[0]} alt="" />
										</div>
										<div className="text_button">
											<div className="text">
												<p>
													{date} - {returnDate}
												</p>
												<h3 className="location">{details?.title}</h3>
											</div>
											<div className="tab_div">
												{firstTworeakDown?.map((list: string) => (
													<div className="tabs">{list}</div>
												))}
											</div>
										</div>
									</section>
								);
							})}
						</main>
					</PastTripHomeStyle>
				)
			)}
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
