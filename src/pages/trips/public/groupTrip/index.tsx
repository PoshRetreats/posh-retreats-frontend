import TripHeader from "components/menuHeader/TripHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { GroupImageFlex, OverviewArea, PointsArea } from "./style";
import { JoinTripButton } from "components/menuHeader/style";
import Footer from "components/footer";
import { gotoGroupTripForm } from "routes/frontend";
import ReactSlickSlider from "components/reactSlickSlider";

export default function GroupTripOverView() {
	const location = useLocation();
	const navigate = useNavigate();
	const { data } = location.state;
	const date = new Date(data.depatureDate)?.toLocaleDateString();
	const formUrl = gotoGroupTripForm(data._id);

	function gotoForm() {
		navigate(formUrl, { state: { trip: data } });
	}
	return (
		<div>
			<TripHeader data={data} />
			<OverviewArea>
				<img src={data.images[2]} alt="img" />
				<div>
					<h1>Overview</h1>
					<p>{data.details}</p>
					{data.breakdown.map((point: any, i: any) => (
						<PointsArea key={i}>
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
					<h5>{date}</h5>
					<h4>Price - ${data.amount}</h4>
					<JoinTripButton onClick={gotoForm}>Join Trip</JoinTripButton>
				</div>
			</OverviewArea>
			<GroupImageFlex>
				{/* {data.images.map((image: string, i: number) => (
					<img src={image} key={i} alt="group-tag" />
				))} */}
				<ReactSlickSlider images={data.images} />
			</GroupImageFlex>
			<Footer />
		</div>
	);
}
