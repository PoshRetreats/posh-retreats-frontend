import { useState } from "react";
import {
	ReviewsContainer,
} from "./style";
import useAppNavigator from "hooks/useAppNavigator";
import Carousel from "./Carousel";
import ReviewTripHeader from "components/menuHeader/ReviewHeader";
import { ReviewsSlider } from "./reviews";

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
			<ReviewsSlider/>
		</ReviewsContainer>
	);
}
