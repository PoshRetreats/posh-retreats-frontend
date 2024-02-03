import { REVIEWS_HEADER } from "assets";
import MenuHeader from "components/menuHeader";
import { useEffect, useState } from "react";
import { GeneralResponseType, makeGetRequestWithToken } from "requests/requests";
import { SERVER_GET_PAST_TRIPS } from "routes/server";
import {
	MiniPastTripDescriptionArea,
	PastTripContainer,
	PastTripList,
	PhotoAmount,
	ReviewsContainer,
} from "./style";
import useAppNavigator from "hooks/useAppNavigator";
import Carousel from "./Carousel";
import ReviewTripHeader from "components/menuHeader/ReviewHeader";

export default function Reviews() {
	const { browserState } = useAppNavigator();
	const [currentImage, setCurrentImage] = useState("");
	console.log({ browserState });

	return (
		<ReviewsContainer>
			<ReviewTripHeader img={currentImage} />
			<Carousel
				onActiveImageChange={(img) => setCurrentImage(img)}
				images={browserState?.trip?.images}
			/>
		</ReviewsContainer>
	);
}
