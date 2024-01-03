import useAppNavigator from "hooks/useAppNavigator";
import { Cover, TripContainer, TripHolderContainer, TripTextArea } from "./style";
import { MINI_GROUP_ICON, MINI_PRIVATE_ICON } from "assets";
import { PRIVATE_TRIPS_URL, TRIPS_URL } from "routes/frontend";
import AnimateComponent from "components/animateComponent";

function MiniTripHolder() {
	const { appNavigator } = useAppNavigator();
	return (
		<TripHolderContainer>
			<AnimateComponent>
				<TripContainer onClick={() => appNavigator(TRIPS_URL)} img={MINI_GROUP_ICON}>
					<Cover padding="16px 16px 0 0" />
					<TripTextArea>
						<h1>Group Trips</h1>
						<p>
							Join our culturally immersive group trips and discover the world with
							like-minded adventurers.
						</p>
					</TripTextArea>
				</TripContainer>
			</AnimateComponent>
			<AnimateComponent>
				<TripContainer
					onClick={() => appNavigator(PRIVATE_TRIPS_URL)}
					img={MINI_PRIVATE_ICON}
				>
					<Cover padding="16px 16px 0 0" />
					<TripTextArea>
						<h1>Private Trips</h1>
						<p>
							Let our expert trip planners craft your mind-blowing private getaway.
						</p>
					</TripTextArea>
				</TripContainer>
			</AnimateComponent>
		</TripHolderContainer>
	);
}

export default MiniTripHolder;
