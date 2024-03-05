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
	const PUBLIC_TRIPS_HEADER =
		"https://res.cloudinary.com/poshretreats/image/upload/v1709191048/btqalldwguomymizel6n.jpg";
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
				description="Step into the world of our vibrant group trips! Join our friendly community of explorers, immerse yourself in diverse cultures, and create lasting memories. Dive into our thoughtfully curated group travel experiences today with confidence and excitement!"
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
