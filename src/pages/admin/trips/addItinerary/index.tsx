import { AdminContainer, AdminHomeFlexDiv, AdminTripContainer } from "../style";
import AdminMenu from "components/menuHeader/admin";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import DefaultInput from "components/defaultInput/DefaultInput";
import { AdminHeaderSpace } from "components/menuHeader/admin/style";
import PaymentPlan from "./PaymentPlan";
import {
	DeleteButton,
	FirstContainer,
	ItenaryListContainer,
	PaymentItem,
	PaymentPlansContainer,
	SecondContainer,
	SubmitItemButton,
} from "./style";
import useItinerary from "./useItinerary";
import AddItineraryData from "./ItineraryList";

export function ItineraryDetails({
	budget,
	paymentPlans,
	itineraries,
	toView = false,
}: any) {
	const { deletePaymentPlan, handleDeleteItinerary } = useItinerary();
	console.log({
		budget,
		paymentPlans,
		itineraries,
		toView,
	});
	return (
		<div>
			<h2>Initial Deposit: {budget}</h2>
			{paymentPlans?.length > 0 && (
				<PaymentPlansContainer>
					<h2>Payment Plans</h2>
					{paymentPlans?.map((plan: any, index: number) => (
						<PaymentItem key={index}>
							{toView && (
								<span>{new Date(plan.installmentDate).toLocaleDateString()}</span>
							)}
							{!toView && <span>{plan.installmentDate}</span>}
							<span>{plan.paymentTitle}</span>
							<span>{plan.amount}</span>
							{!toView && (
								<DeleteButton onClick={() => deletePaymentPlan(index)}>
									Remove
								</DeleteButton>
							)}
						</PaymentItem>
					))}
				</PaymentPlansContainer>
			)}
			{itineraries?.length > 0 && (
				<ItenaryListContainer>
					<h2>Itinerary List:</h2>
					{itineraries?.map((itinerary: any) => (
						<div key={itinerary.day}>
							<h3>Day {itinerary.day}:</h3>
							<p>{itinerary.description}</p>
							{!toView && (
								<button onClick={() => handleDeleteItinerary(itinerary.day)}>
									Remove
								</button>
							)}
						</div>
					))}
				</ItenaryListContainer>
			)}
		</div>
	);
}

export default function AddItinerary() {
	const {
		handleBudget,
		budget,
		paymentPlans,
		installmentDate,
		setInstallmentDate,
		amount,
		addPaymentPlan,
		setAmount,
		setPaymentTitle,
		itineraries,
		itineraryValue,
		setItineraryValue,
		handleAddItinerary,
		createItinerary,
		loading,
	} = useItinerary();

	return (
		<AdminContainer>
			<AdminMenu />
			<AdminHeaderTitle title="Add Itinerary and Price" />
			<AdminHeaderSpace />
			<AdminTripContainer>
				<AdminHomeFlexDiv style={{ marginTop: 50 }}>
					<FirstContainer>
						<DefaultInput
							type="string"
							placeholder="initial amount to pay"
							label="Initial Deposit"
							name="initialDeposit"
							handlechange={handleBudget}
							value={budget}
							required={true}
						/>
						<PaymentPlan
							setInstallmentDate={setInstallmentDate}
							installmentDate={installmentDate}
							amount={amount}
							setAmount={setAmount}
							addPaymentPlan={addPaymentPlan}
							setPaymentTitle={setPaymentTitle}
						/>
						<AddItineraryData
							itineraryValue={itineraryValue}
							setItineraryValue={setItineraryValue}
							handleAddItinerary={handleAddItinerary}
						/>
						<SubmitItemButton onClick={createItinerary}>
							{loading ? "Creating..." : "Create Itinerary"}
						</SubmitItemButton>
					</FirstContainer>
					<SecondContainer>
						<ItineraryDetails
							budget={budget}
							paymentPlans={paymentPlans}
							itineraries={itineraries}
						/>
					</SecondContainer>
				</AdminHomeFlexDiv>
			</AdminTripContainer>
		</AdminContainer>
	);
}
