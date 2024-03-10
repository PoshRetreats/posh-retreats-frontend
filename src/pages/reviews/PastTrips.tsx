import MenuHeader from "components/menuHeader";
import { useEffect, useState } from "react";
import { GeneralResponseType, makeGetRequestWithToken } from "requests/requests";
import { SERVER_GET_PAST_TRIPS } from "routes/server";
import {
	MiniPastTripDescriptionArea,
	PastTripContainer,
	PastTripList,
	PhotoAmount,
} from "./style";
import useAppNavigator from "hooks/useAppNavigator";
import { getReviewsUrl } from "routes/frontend";
import ComponentLoader from "components/loaders/ComponentLoader";

export function PastTrip({ trip }: any) {
	const { appNavigator } = useAppNavigator();
	console.log({ trip });

	function goToTripReview() {
		const getReviewsPageUrl = getReviewsUrl(trip._id);
		appNavigator(getReviewsPageUrl, { trip });
	}

	return (
		<PastTripContainer tripBgImage={trip?.images[0]}>
			<PhotoAmount>
				<p>{trip?.images?.length} Photos</p>
			</PhotoAmount>
			<MiniPastTripDescriptionArea onClick={goToTripReview}>
				<small>{new Date(trip?.depatureDate).toLocaleDateString()}</small>
				<p>{trip?.title}</p>
			</MiniPastTripDescriptionArea>
		</PastTripContainer>
	);
}

export default function PastTrips() {
	const [loading, setLoading] = useState<boolean>(false);
	const [pastTrips, setPastTrips] = useState([]);
	const REVIEWS_HEADER =
		"https://res.cloudinary.com/poshretreats/image/upload/v1709343210/panuthbkdfw3c68ict8s.jpg";

	async function getPastTrips() {
		try {
			const res = (await makeGetRequestWithToken(
				SERVER_GET_PAST_TRIPS
			)) as GeneralResponseType;
			console.log({ res });
			setPastTrips(res?.data);
		} catch (err) {
			console.log({ err });
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getPastTrips();
	}, []);

	return (
		<div>
			<MenuHeader
				title="Past Trips and Reviews"
				description="Take a look at what it’s like taking an adventure with us.
We make every minute of your retreat worth it!"
				img={REVIEWS_HEADER}
			/>
			<PastTripList>
				{loading ? (
					<ComponentLoader color="#000" />
				) : (
					pastTrips &&
					pastTrips.map((trip: any, i) => <PastTrip key={i} trip={trip} />)
				)}
			</PastTripList>
		</div>
	);
}
