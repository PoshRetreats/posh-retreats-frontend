import React, { ReactNode } from "react";
import styled, { keyframes, css } from "styled-components";
import { useInView } from "react-intersection-observer";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Define a type for the props expected by the AnimatedDiv component
interface AnimatedDivProps {
	animate: boolean;
}

const AnimatedDiv = styled.div<AnimatedDivProps>`
	opacity: 0;
	transform: translateY(20px);
	animation: ${({ animate }) =>
		animate &&
		css`
			${fadeIn} 1s ease-in-out forwards;
		`};
`;

// Define a type for the props expected by the ScrollAnimation component
interface ScrollAnimationProps {
	children: ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
	const [ref, inView] = useInView({
		triggerOnce: false,
	});

	return (
		<AnimatedDiv ref={ref} animate={inView}>
			{children}
		</AnimatedDiv>
	);
};

export default ScrollAnimation;
