import { useState } from "react";

interface PaymentPlan {
	installmentDate: string;
	paymentTitle: string;
	amount: string;
}

export default function useItinerary() {
	const [paymentPlans, setPaymentPlans] = useState<PaymentPlan[]>([]);
	const [installmentDate, setInstallmentDate] = useState<string>("");
	const [paymentTitle, setPaymentTitle] = useState<string>("");
	const [amount, setAmount] = useState<string>("");
	const [budget, setBudget] = useState<string>("0");

	const addPaymentPlan = () => {
		if (installmentDate && paymentTitle && amount) {
			setPaymentPlans((prevPlans) => [
				...prevPlans,
				{ installmentDate, paymentTitle, amount },
			]);

			// Clear the form
			setInstallmentDate("");
			setPaymentTitle("");
			setAmount("");
		}
	};

	const deletePaymentPlan = (index: number) => {
		setPaymentPlans((prevPlans) => prevPlans.filter((plan, i) => i !== index));
	};

	function handleBudget(e: any) {
		setBudget(e.target.value);
	}

	return {
		paymentPlans,
		addPaymentPlan,
		deletePaymentPlan,
		budget,
		handleBudget,
		installmentDate,
		setInstallmentDate,
		amount,
		setAmount,
		setPaymentTitle,
	};
}
