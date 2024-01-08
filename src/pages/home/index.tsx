import FAQ from "components/faq";
import HowWeWork from "components/howWeWork";
import MiniTripHolder from "./MiniTripHolder";
import { useEffect, useState } from "react";
import useToastStore from "components/appToast/store";
import { GeneralResponseType, makeGetRequestWithToken } from "requests/requests";
import { SERVER_GET_LATEST_PUBLIC_TRIPS } from "routes/server";
import ReactSlickSlider from "components/reactSlickSlider";
import TripHeader from "components/menuHeader/TripHeader";
import MenuHeader from "components/menuHeader";
import { AboutComponent } from "pages/about";
import { Spacer } from "./style";
import { isMobile } from "react-device-detect";
import { AppSpace } from "utilities/styles";

export default function Home() {
	const [loading, setLoading] = useState<boolean>(false);
	const [publicTrips, setPublicTrips] = useState<any>([]);
	const toast = useToastStore();
	async function getPublicTrips() {
		try {
			setLoading(true);
			const res = (await makeGetRequestWithToken(
				SERVER_GET_LATEST_PUBLIC_TRIPS
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
	console.log({ publicTrips, loading });
	useEffect(() => {
		getPublicTrips();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<MenuHeader />
			<ReactSlickSlider
				isComponent={true}
				h="90vh"
				m="0"
				slideSettings={{ slidesToShow: 1, vertical: false, speed: 1000 }}
			>
				{publicTrips.map((data: any, i: number) => (
					<TripHeader key={i} data={data} showJoinButton={true} isComponent={true} />
				))}
			</ReactSlickSlider>
			<MiniTripHolder />
			<AboutComponent isHome={true} />
			<AppSpace margin={!isMobile ? "150px 0 0 0" : ""} />
			<HowWeWork />
			<Spacer />
			<FAQ />
		</>
	);
}
