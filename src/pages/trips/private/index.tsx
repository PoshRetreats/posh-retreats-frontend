import FAQ from "components/faq";
import HowWeWork from "components/howWeWork";
import MenuHeader from "components/menuHeader";
import { PRIVATE_TRIPS_HEADER } from "assets";


export default function PrivateTrip() {
	return (
		<div>
			<MenuHeader img={PRIVATE_TRIPS_HEADER} />
			<HowWeWork />
			<FAQ />
		</div>
	);
}
