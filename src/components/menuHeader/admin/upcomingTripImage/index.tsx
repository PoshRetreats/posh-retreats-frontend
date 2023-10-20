import { UpcomingTripImageMain } from "./style";

type ImageTripProps = {
	src: string;
	alt: string;
};

export function UpcomingTripImage({ src, alt }: ImageTripProps) {
	return (
		<>
			<UpcomingTripImageMain alt={alt} src={src} />
		</>
	);
}
