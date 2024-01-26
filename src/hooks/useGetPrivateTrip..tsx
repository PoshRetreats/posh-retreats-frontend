import useToastStore from "components/appToast/store";
import { useEffect, useState } from "react";
import { GeneralResponseType, makeGetRequestWithToken } from "requests/requests";
import { SERVER_GET_PRIVATE_TRIP } from "routes/server";

export const useGetPrivateTrip = () =>{

    const [loading, setLoading] = useState<boolean>(false);
	const [privateTrips, setPrivateTrips] = useState<any>([]);

	console.log(privateTrips, loading);

	const toast = useToastStore();



    async function getPrivateTrips() {
		try {
			setLoading(true);
			const res = (await makeGetRequestWithToken(
				SERVER_GET_PRIVATE_TRIP
			)) as GeneralResponseType;
			// toast.showSuccessToast("Message sent successfully");
			console.log({ res });
			setPrivateTrips(res?.data);
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

    return {loading, setLoading, privateTrips, setPrivateTrips}
}