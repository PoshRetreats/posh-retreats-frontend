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
import { useGetPrivateTrip } from "hooks/useGetPrivateTrip.";
import { BACK_ICON } from "assets";
import { useNavigate } from "react-router-dom";
import ComponentLoader from "components/loaders/ComponentLoader";

export const PrivateTripDetails = () => {
	const navigate = useNavigate();
	const { loading, privateTrips } = useGetPrivateTrip();
    console.log(privateTrips)
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
								{loading ? (
									<ComponentLoader />
								) : privateTrips.length === 0 ? (
									<TripCardContainer>
										<TripHeadText>No available trips at the moment</TripHeadText>
									</TripCardContainer>
								) : (
									privateTrips.map((trips: any) => {
										return (
											<div>
                                                <div className="line"></div>
												<section>
													<h3>{trips?.fullName}</h3>
													<p>Name</p>
												</section>
												<section>
													<h3>{trips?.email}</h3>
													<p>Email address</p>
												</section>
												<section>
													<h3>{trips?.travellingTo}</h3>
													<p>Where would you like to travel to?</p>
												</section>
												<section>
													<h3>{trips?.noOfTravellers}</h3>
													<p>How many people will be traveling?</p>
												</section>
												<section>
													<h3>{trips?.otherDestinations}</h3>
													<p>
														Are there any other destinations you would be interested
														in?
													</p>
												</section>
												<section>
													<h3>{trips?.celebratingOccassion}</h3>
													<p>
														Are you celebrating a special occasion? If yes mention
														the occasion below
													</p>
												</section>
												<section>
													<h3>{trips?.travelDates}</h3>
													<p>
														What are your travel dates? Please specify how long you
														want the trip to be
													</p>
												</section>
												<section>
													<h3>{trips?.budgetMinusFlight}</h3>
													<p>What is your budget per person not including flights</p>
												</section>
												<section>
													<h3>{trips?.specificActivies}</h3>
													<p>
														Are there any specific activities you want us to include
														in your trip itinerary
													</p>
												</section>
												<section>
													<h3>{trips?.yourThoughts}</h3>
													<p>
														Share any additional thoughts or notes about your dream
														trip
													</p>
												</section>
												<section>
													<h3>{trips?.whoToldYou}</h3>
													<p>How did you hear about us?</p>
												</section>
											</div>
										);
									})
								)}
							</div>
						</PrivateTripStyleContainer>
					</AdminHomeFlexDiv>
				</PrivateTripHomeContainer>
			</PrivateTripContainer>
		</>
	);
};
