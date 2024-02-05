import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import media from "utilities/styles/media";
import { ARROW_LEFT, ARROW_RIGHT } from "assets";

const CarouselContainer = styled.div`
	width: 90%;
	margin: auto;
	padding: 3rem;
	max-width: 1600px;
	.slick-slide {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 16px;
		img {
			border-radius: 16px;
		}
	}

	.slick-list {
		overflow: hidden;
	}

	.slick-prev,
	.slick-next {
		z-index: 1;
	}
`;

const Slide = styled.div`
max-width: 440px;
	img {
		width: 100%;
		border: 2px solid transparent; // Optional: style for non-active slides

		${media.mobile`
      /* width: 300px; */
    `}
	}

	&.slick-current img {
		border: 2px solid pink; // Style for the active slide
	}
`;

interface CarouselProps {
	images: string[];
	onActiveImageChange?: (activeImageUrl: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({ images, onActiveImageChange }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const settings = {
		dots: false,
		focusOnSelect: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 4000,
		nextArrow: <img src={ARROW_RIGHT} alt="" />,
		prevArrow: <img src={ARROW_LEFT} alt="" />,
		beforeChange: (current: number, next: number) => setCurrentSlide(next),
	};

	useEffect(() => {
		if (onActiveImageChange && images[currentSlide]) {
			onActiveImageChange(images[currentSlide]);
		}
	}, [currentSlide, images, onActiveImageChange]);

	return (
		<CarouselContainer>
			<Slider {...settings}>
				{images.map((img, index) => (
					<Slide className="slide_img_container" key={index}>
						<img src={img} alt={`Slide ${index}`} />
					</Slide>
				))}
			</Slider>
		</CarouselContainer>
	);
};

export default Carousel;
