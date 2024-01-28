import useToastStore from "components/appToast/store";
import useAppNavigator from "hooks/useAppNavigator";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { GeneralResponseType, makePostRequestWithAxios } from "requests/requests";
import { ADMIN_GROUP_TRIPS_URL } from "routes/frontend";
import { SERVER_CREATE_TRIP_ITINERARY } from "routes/server";

interface PaymentPlan {
	installmentDate: string;
	paymentTitle: string;
	amount: string;
}

interface Itinerary {
	day: number;
	description: string;
}

export default function useItinerary() {
	const { tripId } = useParams();
	const [paymentPlans, setPaymentPlans] = useState<PaymentPlan[]>([]);
	const [loading, setLoading] = useState(false);
	const [installmentDate, setInstallmentDate] = useState<string>("");
	const [paymentTitle, setPaymentTitle] = useState<string>("");
	const [amount, setAmount] = useState<string>("");
	const [budget, setBudget] = useState<string>("0");
	const [itineraries, setItineraries] = useState<Itinerary[]>([]);
	const [itineraryValue, setItineraryValue] = useState<string>("");
	const toast = useToastStore();
	const { appNavigator } = useAppNavigator();
	async function createItinerary(e: any) {
		try {
			setLoading(true);
			e.preventDefault();
			console.log({ budget, paymentPlans, itineraries, tripId });
			const data = {
				trip: tripId,
				initialDeposit: budget,
				paymentPlan: paymentPlans,
				itinerary: itineraries,
			};
			const res = (await makePostRequestWithAxios(
				SERVER_CREATE_TRIP_ITINERARY,
				data
			)) as GeneralResponseType;
			if (res.success) {
				toast.showSuccessToast("Itinerary Created Successfully");
        appNavigator(ADMIN_GROUP_TRIPS_URL)
			} else {
				throw res;
			}
		} catch (err: any) {
			toast.showFailedToast(err?.message);
		} finally {
			setLoading(false);
		}
	}

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

	const handleAddItinerary = () => {
		if (itineraryValue.trim() === "") {
			return; // Ignore empty itineraries
		}

		const newItinerary: Itinerary = {
			day: itineraries.length + 1,
			description: itineraryValue,
		};

		setItineraries([...itineraries, newItinerary]);
		setItineraryValue("");
	};

	const handleDeleteItinerary = (day: number) => {
		const updatedItineraries = itineraries.filter(
			(itinerary) => itinerary.day !== day
		);

		// Reassign correct day numbers to the remaining itineraries
		const reorderedItineraries = updatedItineraries.map((itinerary, index) => ({
			...itinerary,
			day: index + 1,
		}));

		setItineraries(reorderedItineraries);
	};

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
		itineraryValue,
		setItineraryValue,
		handleAddItinerary,
		itineraries,
		handleDeleteItinerary,
		createItinerary,
		loading,
	};
}
