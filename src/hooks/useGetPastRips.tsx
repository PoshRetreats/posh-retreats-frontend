import useToastStore from "components/appToast/store";
import { useEffect, useState } from "react";
import { GeneralResponseType, makeGetRequestWithToken } from "requests/requests";
import { SERVER_PAST_TRIPS_AND_REVIEW } from "routes/server";

export const useGetPastTrips = () =>{
    const toast = useToastStore();

    const [loading, setLoading] = useState<boolean>(false);
	const [pastTripsData, setPastTripData] = useState<any>([]);
	console.log(pastTripsData)
	

	async function getPrivateTrips() {
		try {
			setLoading(true);
			const res = (await makeGetRequestWithToken(
				SERVER_PAST_TRIPS_AND_REVIEW
			)) as GeneralResponseType;
			// toast.showSuccessToast("Message sent successfully");
			console.log({ res });
			setPastTripData(res?.data);
		} catch (err) {
			console.log({ err });
			toast.showFailedToast("could not fetch trips");
		} finally { 
			setLoading(false);
		}
	}

	useEffect(() => {
		getPrivateTrips();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    return {loading, pastTripsData, setPastTripData, setLoading}
}