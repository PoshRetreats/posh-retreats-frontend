import { PUBLIC_TRIPS_HEADER } from "assets";
import FAQ from "components/faq";
import HowWeWork from "components/howWeWork";
import MenuHeader from "components/menuHeader";
import MiniGroupTrip from "./groupTrip/MiniGroupTrip";
import { GroupTripList } from "./style";
import { useEffect, useState } from "react";
import { GeneralResponseType, makeGetRequestWithToken } from "requests/requests";
import { SERVER_GET_PUBLIC_TRIPS } from "routes/server";
import useToastStore from "components/appToast/store";
import ComponentLoader from "components/loaders/ComponentLoader";

export default function Trips() {
	const [loading, setLoading] = useState<boolean>(false);
	const [publicTrips, setPublicTrips] = useState<any>([]);
	const toast = useToastStore();
	async function getPublicTrips() {
		try {
			setLoading(true);
			const res = (await makeGetRequestWithToken(
				SERVER_GET_PUBLIC_TRIPS
			)) as GeneralResponseType;
			// toast.showSuccessToast("Message sent successfully");
			console.log({ res });
			setPublicTrips(res.data);
		} catch (err) {
			toast.showFailedToast("Messages could not be delivered at the moment");
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getPublicTrips();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			<MenuHeader
				title="Group Trips"
				description="Be a part of our next group experience where you can make 
awesome connections and explore new horizons with new
friends. Experience new cultures, take new adventures and
create lasting memories."
				img={PUBLIC_TRIPS_HEADER}
			/>
			<GroupTripList>
				{loading && <ComponentLoader />}
				{publicTrips.map((trip: any, key: number) => (
					<MiniGroupTrip key={key} data={trip} isAdmin={false} />
				))}
			</GroupTripList>
			<HowWeWork type="group" />
			<FAQ type="group" />
		</div>
	);
}
