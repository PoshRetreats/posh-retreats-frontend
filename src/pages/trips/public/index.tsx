import { PUBLIC_TRIPS_HEADER } from "assets";
import MenuHeader from "components/menuHeader";
import React from "react";

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
		</div>
	);
}
