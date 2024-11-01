import BrandColors from "utilities/styles/colors";

type ComponentLoaderProps = {
	color?: string;
	size?: string;
	className?: string;
};
export default function ComponentLoader({
	color = BrandColors.white,
	size = "20px",
	className,
}: ComponentLoaderProps) {
	return (
		<div className={className} >
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				style={{
					margin: "auto",
					background: "none",
					display: "block",
					shapeRendering: "auto",
				}}
				width={size}
				height={size}
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
			>
				<circle
					cx="50"
					cy="50"
					fill="none"
					stroke={color}
					strokeWidth="10"
					r="35"
					strokeDasharray="164.93361431346415 56.97787143782138"
				>
					<animateTransform
						attributeName="transform"
						type="rotate"
						repeatCount="indefinite"
						dur="1s"
						values="0 50 50;360 50 50"
						keyTimes="0;1"
					></animateTransform>
				</circle>
			</svg>
		</div>
	);
}
