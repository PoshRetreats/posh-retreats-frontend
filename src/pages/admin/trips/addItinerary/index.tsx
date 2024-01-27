import { AdminContainer, AdminHomeFlexDiv, AdminTripContainer } from "../style";
import AdminMenu from "components/menuHeader/admin";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import ItineraryList from "./ItineraryList";
import DefaultInput from "components/defaultInput/DefaultInput";
import { AdminHeaderSpace } from "components/menuHeader/admin/style";
import PaymentPlan from "./PaymentPlan";
import {
	DeleteButton,
	FirstContainer,
	PaymentItem,
	PaymentPlansContainer,
	SecondContainer,
} from "./style";
import useItinerary from "./useItinerary";

export default function AddItinerary() {
	const {
		handleBudget,
		budget,
		paymentPlans,
		deletePaymentPlan,
		installmentDate,
		setInstallmentDate,
		amount,
		addPaymentPlan,
		setAmount,
		setPaymentTitle,
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
					</FirstContainer>
					<SecondContainer>
						<PaymentPlansContainer>
							<h2>Payment Plans</h2>
							{paymentPlans.map((plan, index) => (
								<PaymentItem key={index}>
									<span>{plan.installmentDate}</span>
									<span>{plan.paymentTitle}</span>
									<span>{plan.amount}</span>
									<DeleteButton onClick={() => deletePaymentPlan(index)}>
										Delete
									</DeleteButton>
								</PaymentItem>
							))}
						</PaymentPlansContainer>
					</SecondContainer>
				</AdminHomeFlexDiv>
			</AdminTripContainer>
			<ItineraryList />
		</AdminContainer>
	);
}
