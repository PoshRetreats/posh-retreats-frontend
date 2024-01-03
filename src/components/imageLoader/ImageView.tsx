import LazyLoad from "react-lazyload";

type ImageProps = {
	alt: string;
	height?: string;
	width?: string;
	src: string;
};

function ImageView({ alt, height, src }: ImageProps) {
	return (
		<LazyLoad height={height} offset={100}>
			<img src={src} alt={alt} />
		</LazyLoad>
	);
}

export default ImageView;
