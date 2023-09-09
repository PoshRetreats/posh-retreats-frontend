import { REVIEWS_HEADER } from "assets";
import MenuHeader from "components/menuHeader";
import React from "react";

export default function Reviews() {
	return (
		<div>
			<MenuHeader title="Past Trips and Reviews"
				description="Have a look at what it’s like taking an adventure with us.
We make every minute of your retreat worth it!" img={REVIEWS_HEADER} />
		</div>
	);
}
