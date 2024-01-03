import React, { ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimateComponentProps {
	children: ReactNode;
}

const AnimateComponent: React.FC<AnimateComponentProps> = ({ children }) => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true,
	});

	const animations = ["fadeIn", "slideUp", "scale"];

	const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

	const animationVariants: Record<string, any> = {
		fadeIn: { opacity: 1 },
		slideUp: { y: 0 },
		scale: { scale: 1 },
	};

	if (inView) {
		controls.start(animationVariants[randomAnimation]);
	}

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial={{ opacity: 0, y: 50, scale: 0.8 }}
			style={{ opacity: 1, scale: 1 }} // Ensure final opacity and size are unaffected
		>
			{children}
		</motion.div>
	);
};

export default AnimateComponent;
