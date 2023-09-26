import TripHeader from "components/menuHeader/TripHeader";
import { useLocation } from "react-router-dom";
import { OverviewArea, PointsArea } from "./style";
import { JoinTripButton } from "components/menuHeader/style";
import Footer from "components/footer";

export default function GroupTripOverView() {
	const location = useLocation();
	const { data } = location.state;
	console.log({ data });
	return (
		<div>
			<TripHeader data={data} />
			<OverviewArea>
				<img src={data.otherImages[2]} alt="img" />
				<div>
					<h1>Overview</h1>
					<p>{data.overview}</p>
					{data.points.map((point: any, i: any) => (
						<PointsArea>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="8"
								height="8"
								viewBox="0 0 8 8"
								fill="none"
							>
								<circle cx="4" cy="4" r="4" fill="#F7A49D" />
							</svg>
							<p>{point}</p>
						</PointsArea>
					))}
					<h5>{data.date.toLocaleDateString()}</h5>
					<h4>Price - {data.price}</h4>
					<JoinTripButton>Join Trip</JoinTripButton>
				</div>
			</OverviewArea>
			<Footer />
		</div>
	);
}
