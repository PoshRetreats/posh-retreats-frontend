import { useEffect, useState } from "react";
import { AdminContainer, AdminTripContainer } from "./style";
import AdminMenu from "components/menuHeader/admin";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import { GeneralResponseType, makeGetRequestWithToken } from "requests/requests";
import { SERVER_GET_ADMIN_PUBLIC_TRIPS } from "routes/server";
import useToastStore from "components/appToast/store";
import { GroupTripList } from "pages/trips/public/style";
import MiniGroupTrip from "pages/trips/public/groupTrip/MiniGroupTrip";
import ComponentLoader from "components/loaders/ComponentLoader";

export default function AdminGroupTripList() {
	const [loading, setLoading] = useState<boolean>(false);
	const [publicTrips, setPublicTrips] = useState<any>([]);
	const toast = useToastStore();
	async function getPublicTrips() {
		try {
			setLoading(true);
			const res = (await makeGetRequestWithToken(
				SERVER_GET_ADMIN_PUBLIC_TRIPS
			)) as GeneralResponseType;
			// toast.showSuccessToast("Message sent successfully");
			console.log({ res });
			setPublicTrips(res.data);
		} catch (err) {
			toast.showFailedToast("could not fetch trips");
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getPublicTrips();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<AdminContainer>
			<AdminMenu />
			<AdminTripContainer>
				<AdminHeaderTitle title="Group Trips" />
				<GroupTripList>
					{loading && <ComponentLoader />}
					{publicTrips.map((trip: any, key: number) => (
						<MiniGroupTrip key={key} data={trip} isAdmin={true} />
					))}
				</GroupTripList>
			</AdminTripContainer>
		</AdminContainer>
	);
}
