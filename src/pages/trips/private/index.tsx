import FAQ from "components/faq";
import HowWeWork from "components/howWeWork";
import MenuHeader from "components/menuHeader";
import { PRIVATE_TRIPS_HEADER } from "assets";
import { RequestFormLinkArea } from "./style";
import { useNavigate } from "react-router-dom";
import { PRIVATE_TRIPS_FORM_URL } from "routes/frontend";

export default function PrivateTrip() {
	const navigate = useNavigate();
	return (
		<>
			<MenuHeader
				title="Private Trips"
				description="Be a part of our next group experience where you can make 
awesome connections and explore new horizons with new
friends. Experience new cultures, take new adventures and
create lasting memories."
				img={PRIVATE_TRIPS_HEADER}
			/>
			<RequestFormLinkArea>
				<button onClick={() => navigate(PRIVATE_TRIPS_FORM_URL)}>
					REQUEST PRIVATE TRIP
				</button>
			</RequestFormLinkArea>
			<HowWeWork type="private" />
			<FAQ type="group" />
		</>
	);
}
