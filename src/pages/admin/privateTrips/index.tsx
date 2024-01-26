import AdminMenu from "components/menuHeader/admin";
import {
	PrivateTripHomeContainer,
	AdminHomeFlexDiv,
	AllTripsCardContainer,
	GreyText,
	PrivateTripContainer,
	TripCardContainer,
	TripHeadText,
} from "./style";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import { AdminHeaderSpace } from "components/menuHeader/admin/style";
import { useGetPrivateTrip } from "hooks/useGetPrivateTrip.";
import ComponentLoader from "components/loaders/ComponentLoader";
import { ADMIN_PRIVATE_TRIPS_DETAILS_URL } from "routes/frontend";
import useAppNavigator from "hooks/useAppNavigator";

export default function PrivateTrips() {
	const { appNavigator } = useAppNavigator();
	const { loading, privateTrips } = useGetPrivateTrip();

	return (
		<PrivateTripContainer>
			<AdminMenu />
			<AdminHeaderTitle title="Private Trips" />
			<AdminHeaderSpace />
			<PrivateTripHomeContainer>
				<AdminHomeFlexDiv>
					<AllTripsCardContainer>
						<h1>Registrations</h1>
						<GreyText>All Entries</GreyText>
						{loading ? (
							<ComponentLoader color="#000" />
						) : privateTrips.length === 0 ? (
							<TripCardContainer>
								<TripHeadText>No available trips at the moment</TripHeadText>
							</TripCardContainer>
						) : (
							privateTrips?.map((details: any, index: number) => {
								const date = new Date(details?.createdAt)?.toLocaleDateString();
								return (
									<TripCardContainer
										onClick={() =>
											appNavigator(ADMIN_PRIVATE_TRIPS_DETAILS_URL, details)
										}
										className="link"
										key={index}
									>
										<div>
											<TripHeadText>{details?.fullName}</TripHeadText>
											<GreyText>{details?.email}</GreyText>
										</div>
										<GreyText>{date}</GreyText>
									</TripCardContainer>
								);
							})
						)}
					</AllTripsCardContainer>
				</AdminHomeFlexDiv>
			</PrivateTripHomeContainer>
		</PrivateTripContainer>
	);
}
