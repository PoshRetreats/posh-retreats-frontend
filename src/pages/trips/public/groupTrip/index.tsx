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
	IncludedAndExcludedArea,
	ImageDiv,
} from "./style";
import { JoinTripButton } from "components/menuHeader/style";
import Footer from "components/footer";
import { gotoGroupTripForm } from "routes/frontend";
import ReactSlickSlider from "components/reactSlickSlider";
import useAppNavigator from "hooks/useAppNavigator";
import { CURRENCY } from "constants/constants";
import commaNumber from "comma-number";

export default function GroupTripOverView() {
	// const location = useLocation();
	// const navigate = useNavigate();
	const { browserState, appNavigator } = useAppNavigator();
	const data = browserState.tripDetails;
	console.log({ data, browserState });
	// const date = new Date(data.depatureDate)?.toDateString();
	const formUrl = gotoGroupTripForm(data._id);
	const hasItinerary = !!data?.review;

	function gotoForm() {
		appNavigator(formUrl, { trip: data });
	}
	return (
		<div>
			<TripHeader data={data} />
			<OverviewArea>
				<ImageDiv>
					<img src={data.images[2]} alt="img" />
				</ImageDiv>
				<div>
					<h1>Overview</h1>
					<p>{data.details}</p>
					{!!data?.breakdown && (
						<>
							<p>
								<b>The trip has the following add-ons(At an additional cost):</b>
							</p>
							{data?.breakdown?.map((point: any, i: any) => (
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
						</>
					)}
					<h5>
						Price - {CURRENCY}
						{commaNumber(data.amount)}
					</h5>
					<JoinTripButton onClick={gotoForm}>Join Trip</JoinTripButton>
				</div>
			</OverviewArea>
			<IncludedAndExcludedArea>
				<div>
					<h3>Included</h3>
					{data?.inclusions.map((point: any, i: any) => (
						<PointsArea key={i}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="10"
								viewBox="0 0 14 10"
								fill="none"
							>
								<path
									d="M0.832031 5.27779L4.72092 9.16668L12 1"
									stroke="#F7A49D"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<p>{point}</p>
						</PointsArea>
					))}
				</div>
				<div>
					<h3>Excluded</h3>
					{data?.exclusions.map((point: any, i: any) => (
						<PointsArea key={i}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="10"
								viewBox="0 0 10 10"
								fill="none"
							>
								<g clip-path="url(#clip0_1016_102)">
									<path
										d="M0.632812 9.36919L5.00198 5.00003L9.37115 9.36919M9.37115 0.630859L5.00115 5.00003L0.632812 0.630859"
										stroke="#F7A49D"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</g>
								<defs>
									<clipPath id="clip0_1016_102">
										<rect width="10" height="10" fill="white" />
									</clipPath>
								</defs>
							</svg>
							<p>{point}</p>
						</PointsArea>
					))}
				</div>
			</IncludedAndExcludedArea>
			{hasItinerary && (
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
			)}
			<GroupImageFlex>
				<ReactSlickSlider images={data.images} />
			</GroupImageFlex>
			{hasItinerary && (
				<PaymentArea>
					<PaymentFirstSection>
						<h3>Pricing</h3>
						<p>
							<br />
							The cost of your trip is highlighted in the table. Please note that all
							displayed prices are based on double occupancy meaning you get to share
							your room/suite with a fellow adventurer. At Posh Retreats, we provide
							you the freedom to settle payments either in full or through convenient
							monthly installments.
							<br /> <br /> Feel free to join an available trip at any time, simply
							cover the deposit and any outstanding payments, then settle balances by
							their due date.
						</p>
					</PaymentFirstSection>
					<PaymentSecondFirstSection>
						<div>
							<h3>Package Price</h3>
							<h3>
								{CURRENCY}
								{commaNumber(data?.amount)}
							</h3>
						</div>
						{/* <div>
							<h3>Deposit</h3>
							<h3>
								{CURRENCY}
								{commaNumber(data?.review?.initialDeposit)}
							</h3>
						</div> */}
						{data?.review?.paymentPlan?.map((plan: any, i: number) => (
							<div key={i}>
								<h3>
									{plan?.paymentTitle} <span></span>
									{CURRENCY}
									{commaNumber(plan?.amount)}
								</h3>
								<h4>{new Date(plan?.installmentDate).toDateString()}</h4>
							</div>
						))}
					</PaymentSecondFirstSection>
				</PaymentArea>
			)}
			<Footer />
		</div>
	);
}
