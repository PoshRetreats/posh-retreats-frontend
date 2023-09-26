import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';


const CarouselContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

interface AutoCarouselProps {
  images: string[];
}

const AutoCarousel: React.FC<AutoCarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current slide index, reset to 0 when it reaches the end
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change the image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [images]);

  return (
    <CarouselContainer>
      <Carousel
        autoPlay={false} // Disable built-in auto-play feature
        infiniteLoop
        showThumbs={false}
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default AutoCarousel;