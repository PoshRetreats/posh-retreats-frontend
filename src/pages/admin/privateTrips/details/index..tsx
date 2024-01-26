import AdminMenu from "components/menuHeader/admin";
import {
	AdminHomeFlexDiv,
	GreyText,
	PrivateTripContainer,
	PrivateTripHomeContainer,
	TripCardContainer,
	TripHeadText,
} from "../style";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import { AdminHeaderSpace } from "components/menuHeader/admin/style";
import { PrivateTripStyleContainer } from "./style";
import { BACK_ICON } from "assets";
import { useLocation, useNavigate } from "react-router-dom";

export const PrivateTripDetails = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const data = location?.state;
	return (
		<>
			<PrivateTripContainer>
				<AdminMenu />
				<AdminHeaderTitle title="Private Trips" />
				<AdminHeaderSpace />
				<PrivateTripHomeContainer>
					<AdminHomeFlexDiv>
						<PrivateTripStyleContainer>
							<div className="private_trip_entries_header">
								<img onClick={() => navigate(-1)} src={BACK_ICON} alt="" />
								<div>
									<h1>Registrations</h1>

									<GreyText>All Entries</GreyText>
								</div>
							</div>
							<div className="details_main_content">
								{!data ? (
									<TripCardContainer>
										<TripHeadText>No available trips at the moment</TripHeadText>
									</TripCardContainer>
								) : (
									data && (
										<div>
											<div className="line"></div>
											<section>
												<h3>{data?.fullName}</h3>
												<p>Name</p>
											</section>
											<section>
												<h3>{data?.email}</h3>
												<p>Email address</p>
											</section>
											<section>
												<h3>{data?.travellingTo}</h3>
												<p>Where would you like to travel to?</p>
											</section>
											<section>
												<h3>{data?.noOfTravellers}</h3>
												<p>How many people will be traveling?</p>
											</section>
											<section>
												<h3>{data?.otherDestinations}</h3>
												<p>
													Are there any other destinations you would be interested
													in?
												</p>
											</section>
											<section>
												<h3>{data?.celebratingOccassion}</h3>
												<p>
													Are you celebrating a special occasion? If yes mention the
													occasion below
												</p>
											</section>
											<section>
												<h3>{data?.travelDates}</h3>
												<p>
													What are your travel dates? Please specify how long you
													want the trip to be
												</p>
											</section>
											<section>
												<h3>{data?.budgetMinusFlight}</h3>
												<p>What is your budget per person not including flights</p>
											</section>
											<section>
												<h3>{data?.specificActivies}</h3>
												<p>
													Are there any specific activities you want us to include in
													your trip itinerary
												</p>
											</section>
											<section>
												<h3>{data?.yourThoughts}</h3>
												<p>
													Share any additional thoughts or notes about your dream
													trip
												</p>
											</section>
											<section>
												<h3>{data?.whoToldYou}</h3>
												<p>How did you hear about us?</p>
											</section>
										</div>
									)
								)}
							</div>
						</PrivateTripStyleContainer>
					</AdminHomeFlexDiv>
				</PrivateTripHomeContainer>
			</PrivateTripContainer>
		</>
	);
};
