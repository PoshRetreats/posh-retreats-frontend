import React from "react";
import { MiniGroupTripContainer } from "./style";

export default function MiniGroupTrip({ data }: any) {
	return (
		<MiniGroupTripContainer img={data.image}>
			<h3>{data.title}</h3>
		</MiniGroupTripContainer>
	);
}
