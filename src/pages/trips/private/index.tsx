import FAQ from "components/faq";
import HowWeWork from "components/howWeWork";
import MenuHeader from "components/menuHeader";
// import { PRIVATE_TRIPS_HEADER } from "assets";
import { RequestFormLinkArea } from "./style";
import { useNavigate } from "react-router-dom";
import { PRIVATE_TRIPS_FORM_URL } from "routes/frontend";

export default function PrivateTrip() {
	const navigate = useNavigate();
	const PRIVATE_TRIPS_HEADER =
		"https://res.cloudinary.com/poshretreats/image/upload/v1709191665/7B9A4B80-D297-42DB-9825-6E12BDC890D9_pyzauo.jpg";
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
