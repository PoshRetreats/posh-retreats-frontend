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
			<MenuHeader img={PRIVATE_TRIPS_HEADER} />
			<RequestFormLinkArea>
				<button onClick={() => navigate(PRIVATE_TRIPS_FORM_URL)}>
					REQUEST CUSTOM LINK
				</button>
			</RequestFormLinkArea>
			<HowWeWork />
			<FAQ />
		</>
	);
}
