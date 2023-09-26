import { PUBLIC_TRIPS_HEADER } from "assets";
import FAQ from "components/faq";
import HowWeWork from "components/howWeWork";
import MenuHeader from "components/menuHeader";
import { groupTripsData } from "./data";
import MiniGroupTrip from "./groupTrip/MiniGroupTrip";
import { GroupTripList } from "./style";

export default function Trips() {
	return (
		<div>
			<MenuHeader
				title="Group Trips"
				description="Be a part of our next group experience where you can make 
awesome connections and explore new horizons with new
friends. Experience new cultures, take new adventures and
create lasting memories."
				img={PUBLIC_TRIPS_HEADER}
			/>
			<GroupTripList>
				{groupTripsData.map((trip) => (
					<MiniGroupTrip data={trip} />
				))}
			</GroupTripList>
			<HowWeWork />
			<FAQ />
		</div>
	);
}
