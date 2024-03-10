import FAQ from "components/faq";
import HowWeWork from "components/howWeWork";
import MenuHeader from "components/menuHeader";
// import { PRIVATE_TRIPS_HEADER } from "assets";
import { RemoveMobileSpace, RequestFormLinkArea } from "./style";
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
				description="Indulge in the luxury of personalization with our private trips. Whether you're a solo explorer or prefer traveling with your own crew, we've got you covered. We handle all the trip planning and activity bookings, ensuring that every moment is customized to your desires. Say goodbye to the hassle of planning and booking, and embrace the joy of a seamless, stress-free journey."
				img={PRIVATE_TRIPS_HEADER}
			/>
			<RequestFormLinkArea>
				<button onClick={() => navigate(PRIVATE_TRIPS_FORM_URL)}>
					REQUEST PRIVATE TRIP
				</button>
			</RequestFormLinkArea>
			<RemoveMobileSpace />
			<HowWeWork type="private" />
			<FAQ type="group" />
		</>
	);
}
