import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isMobile } from "react-device-detect";
import styled from "styled-components";

type Settings = {
	dots?: boolean;
	infinite?: boolean;
	speed?: number;
	slidesToShow?: number;
	slidesToScroll?: number;
	autoplay?: boolean;
	vertical?: boolean;
	swipe?: boolean;
	draggable?: boolean;
};

type ReactSlickSliderProps = {
	images?: string[];
	isComponent?: boolean;
	slideSettings?: Settings;
	children?: any;
	h?: string;
	m?: string;
};

function ReactSlickSlider({
	images = [],
	slideSettings,
	isComponent = false,
	children,
	h,
	m,
}: ReactSlickSliderProps) {
	const StyledCarousel = styled(Slider)`
		position: relative;
		.slick-slide {
			height: fit-content;
			margin: ${m || "0 10px"};
			padding-bottom: 20px;
		}

		.slick-list {
			height: ${h || "320px"};
		}
	`;

	const settings = {
		dots: slideSettings?.dots || true,
		infinite: slideSettings?.infinite || true,
		speed: slideSettings?.speed || 500,
		slidesToShow: isMobile
			? slideSettings?.slidesToShow || 1
			: slideSettings?.slidesToShow || 3,
		slidesToScroll: slideSettings?.slidesToScroll || 1,
		autoplay: slideSettings?.autoplay || true,
		vertical: slideSettings?.vertical || false,
		swipe: slideSettings?.swipe || true,
		draggable: slideSettings?.draggable || true,
	};

	if (isComponent) {
		return <StyledCarousel {...settings}>{children}</StyledCarousel>;
	}

	return (
		<StyledCarousel {...settings}>
			{images.map((image: string, i: number) => (
				<img src={image} key={i} alt="group-tag" />
			))}
		</StyledCarousel>
	);
}

export default ReactSlickSlider;
