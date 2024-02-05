import Slider from "react-slick";
import { ReviewSliderContainerStyle } from "./style";
import { Avatar } from "@mui/material";
import { ARROW_LEFT, ARROW_RIGHT } from "assets";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { GeneralResponseType, makeGetRequestWithToken } from "requests/requests";
import { SERVER_PAST_TRIP_PREVIEW } from "routes/server";
import ComponentLoader from "components/loaders/ComponentLoader";
import { dateModifierWithYear } from "utilities/helpers";

export const ReviewsSlider = () => {
	const { tripId } = useParams();

	const [reviewsData, setReviewsData] = useState([]);

	const [loading, setLoading] = useState(false);

	console.log("reviewData", reviewsData);
	const settings = {
		// dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <img src={ARROW_RIGHT} alt="" />,
		prevArrow: <img src={ARROW_LEFT} alt="" />,
	};

	async function getPastTripsReviews() {
		try {
			const res = (await makeGetRequestWithToken(
				`${SERVER_PAST_TRIP_PREVIEW}/${tripId}`
			)) as GeneralResponseType;

			setReviewsData(res?.data);
		} catch (err) {
			console.log({ err });
		} finally {
			setLoading(false);
		}
	}

	useMemo(() => {
		getPastTripsReviews();
        // eslint-disable-next-line 
	}, []);
	return (
		<ReviewSliderContainerStyle>
			{loading ? (
				<ComponentLoader color="#000" />
			) : (
				reviewsData && (
					<Slider {...settings}>
						{reviewsData?.map((reviews: any) => (
							<div className="content">
								<div className="avatar_details">
									<div className="avatar">
										<Avatar src={reviews?.profileImage} alt={reviews?.name} />
									</div>
									<div className="details">
										<p className="info">{reviews?.comment}</p>
										<span className="name_year">
											{reviews?.name}(
											{dateModifierWithYear(new Date(reviews?.updatedAt))})
										</span>
									</div>
								</div>
							</div>
						))}
					</Slider>
				)
			)}
		</ReviewSliderContainerStyle>
	);
};
