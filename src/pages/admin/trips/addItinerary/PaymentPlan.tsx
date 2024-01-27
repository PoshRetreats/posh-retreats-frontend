import React from "react";
import { PaymentPlanForm, StyledDateInput } from "./style";
import { SubmitButton } from "components/buttons/submitButton";

type PaymentPlanFormProps = {
	installmentDate: string;
	setInstallmentDate: React.Dispatch<React.SetStateAction<string>>;
	paymentTitle: string;
	setPaymentTitle: React.Dispatch<React.SetStateAction<string>>;
	amount: string;
	setAmount: React.Dispatch<React.SetStateAction<string>>;
	addPaymentPlan: () => void;
};

const PaymentPlan: any = ({
	installmentDate,
	setInstallmentDate,
	paymentTitle,
	setPaymentTitle,
	amount,
	setAmount,
	addPaymentPlan,
}: PaymentPlanFormProps) => {
	return (
		<PaymentPlanForm>
			<h2>Add Payment Plan</h2>
			<p>Installment Date:</p>
			<StyledDateInput
				type="date"
				id="installmentDate"
				value={installmentDate}
				onChange={(e) => setInstallmentDate(e.target.value)}
				required
			/>

			<p>Title:</p>
			<input
				type="text"
				id="title"
				value={paymentTitle}
				onChange={(e) => setPaymentTitle(e.target.value)}
				required
			/>

			<p>Amount:</p>
			<input
				type="number"
				id="amount"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
				required
			/>
      <SubmitButton onclick={addPaymentPlan} name="Add Payment Plan" />
		</PaymentPlanForm>
	);
};

export default PaymentPlan;
