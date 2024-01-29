import TripHeader from "components/menuHeader/TripHeader";
import {
	GroupImageFlex,
	ItineraryArea,
	ItineraryList,
	OverviewArea,
	PaymentArea,
	PaymentFirstSection,
	PaymentSecondFirstSection,
	PointsArea,
	ItineraryCard,
} from "./style";
import { JoinTripButton } from "components/menuHeader/style";
import Footer from "components/footer";
import { gotoGroupTripForm } from "routes/frontend";
import ReactSlickSlider from "components/reactSlickSlider";
import useAppNavigator from "hooks/useAppNavigator";
import { CURRENCY } from "constants/constants";

export default function GroupTripOverView() {
	// const location = useLocation();
	// const navigate = useNavigate();
	const { browserState, appNavigator } = useAppNavigator();
	const data = browserState.tripDetails;
	console.log({ data, browserState });
	const date = new Date(data.depatureDate)?.toLocaleDateString();
	const formUrl = gotoGroupTripForm(data._id);

	function gotoForm() {
		appNavigator(formUrl, { trip: data });
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
			<ItineraryArea>
				<h1>Itinerary</h1>
				<ItineraryList>
					{data?.review?.itinerary?.map((item: any, i: number) => (
						<ItineraryCard change={i % 2 === 0} key={i}>
							<h3>Day {item.day}</h3>
							<p>{item.description}</p>
						</ItineraryCard>
					))}
				</ItineraryList>
			</ItineraryArea>
			<GroupImageFlex>
				<ReactSlickSlider images={data.images} />
			</GroupImageFlex>
			{data?.review && (
				<PaymentArea>
					<PaymentFirstSection>
						<h3>Pricing</h3>
						<p>
							<br />
							The package cost of your trip is highlighted in the table on the left.
							Please note that all displayed prices are based on double occupancy
							meaning you get to share your room/suite with a fellow adventurer. At
							Posh Retreats, we provide you the freedom to settle payments either in
							full or through convenient monthly installments.
							<br /> <br /> Feel free to join an available trip at any time, simply
							cover the deposit and any outstanding payments, then settle balances by
							their due date..
						</p>
					</PaymentFirstSection>
					<PaymentSecondFirstSection>
						<div>
							<h3>Package Price</h3>
							<h3>
								{CURRENCY}
								{data?.amount}
							</h3>
						</div>
						<div>
							<h3>
								Deposit {CURRENCY}
								{data?.review?.initialDeposit}
							</h3>
						</div>
						{data?.review?.paymentPlan?.map((plan: any, i: number) => (
							<div key={i}>
								<h3>{plan?.paymentTitle}</h3>
								<h3>
									{CURRENCY}
									{plan?.amount}
								</h3>
							</div>
						))}
					</PaymentSecondFirstSection>
				</PaymentArea>
			)}
			<Footer />
		</div>
	);
}
