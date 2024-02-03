import { REVIEWS_HEADER } from "assets";
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
				description="Have a look at what it’s like taking an adventure with us.
We make every minute of your retreat worth it!"
				img={REVIEWS_HEADER}
			/>
			<PastTripList>
				{!loading &&
					pastTrips.map((trip: any, i) => <PastTrip key={i} trip={trip} />)}
			</PastTripList>
		</div>
	);
}
