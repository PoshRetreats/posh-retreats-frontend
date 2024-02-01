import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
	.slick-slide {
		display: flex;
		justify-content: center;
		align-items: center;
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
	img {
		width: 100%;
		border: 2px solid transparent; // Optional: style for non-active slides
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
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 4000,
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
					<Slide key={index}>
						<img src={img} alt={`Slide ${index}`} />
					</Slide>
				))}
			</Slider>
		</CarouselContainer>
	);
};

export default Carousel;
