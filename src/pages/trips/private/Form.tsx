// import { PRIVATE_TRIPS_HEADER } from "assets";
import MenuHeader from "components/menuHeader";
import { useState } from "react";
import { BasicInputArea, FormArea, TripForm } from "./style";
import { makePostRequestWithAxios } from "requests/requests";
import { SERVER_PRIVATE_TRIP } from "routes/server";
import LoadingButton from "components/loaders/MainLoadingButton";
import useToastStore from "components/appToast/store";
import { PRIVATE_TRIPS_URL } from "routes/frontend";
import useAppNavigator from "hooks/useAppNavigator";

export enum PRIVATE_TRIP_QUESTIONS {
	fullName = "Full Name",
	email = "Email Address",
	phone = "Phone number",
	travellingTo = "Where would you like to travel to?",
	noOfTravellers = "How many people will be traveling?",
	otherDestinations = "Are there any other destinations you would be interested in?",
	celebratingOccassion = "Are you celebrating a special occasion? If yes mention the occasion below! (optional)",
	travelDates = `What are your travel dates?/Please specify how long you want the trip to be.
  You can always change this later.`,
	budgetMinusFlight = "What is your budget per person not including flights?",
	specificActivies = "Are there any specific activities you want us to include in your trip itinerary? (optional)",
	yourThoughts = "Share any additional thoughts or notes about your dream trip! {optional)",
	whoToldYou = "How did you hear about us? (optional)",
}

export function BasicInput({ title, onChange, value, name, type = "input" }: any) {
	return (
		<BasicInputArea>
			<h3>{title}</h3>
			{type === "input" ? (
				<input name={name} value={value} onChange={(e) => onChange(e, name)} />
			) : (
				<textarea name={name} value={value} onChange={(e) => onChange(e, name)} />
			)}
		</BasicInputArea>
	);
}

export default function PrivateTripForm() {
	const [loading, setLoading] = useState(false);
	const [formObj, setFormObj] = useState({
		fullName: "",
		email: "",
		phone: "",
	});
	const toast = useToastStore();
	const { appNavigator } = useAppNavigator();
	const PRIVATE_TRIPS_HEADER =
		"https://res.cloudinary.com/poshretreats/image/upload/v1709279758/nouaeadtojoznf1enxov.jpg";

	function handleChange(e: any, name: string) {
		setFormObj({
			...formObj,
			[name]: e.target.value,
		});
	}

	async function submitPrivateTrip() {
		setLoading(true);
		try {
			if (!formObj.fullName || !formObj.email || !formObj.phone) {
				toast.showWarningToast("Please Fill in all required details");
				return;
			}
			const res: any = await makePostRequestWithAxios(SERVER_PRIVATE_TRIP, formObj);
			console.log({ res });
			if (res.success) {
				setFormObj({
					fullName: "",
					email: "",
					phone: "",
				});
				appNavigator(PRIVATE_TRIPS_URL);
				toast.showSuccessToast(
					"Successfully Submitted your form and we will get back to you shortly"
				);
			}
		} catch (err) {
			console.log({ err });
		} finally {
			setLoading(false);
		}
	}

	return (
		<div>
			<MenuHeader img={PRIVATE_TRIPS_HEADER} />
			<FormArea>
				<TripForm>
					<h1>Trip Registration</h1>
					<form>
						<BasicInput
							title={PRIVATE_TRIP_QUESTIONS.fullName}
							onChange={handleChange}
							name="fullName"
							value={formObj.fullName}
						/>
						<BasicInput
							title={PRIVATE_TRIP_QUESTIONS.email}
							onChange={handleChange}
							name="email"
							value={formObj.email}
						/>
						<BasicInput
							title={PRIVATE_TRIP_QUESTIONS.phone}
							onChange={handleChange}
							name="phone"
							value={formObj.phone}
						/>
						<BasicInput
							title={PRIVATE_TRIP_QUESTIONS.travellingTo}
							onChange={handleChange}
							name="travellingTo"
						/>
						<BasicInput
							title={PRIVATE_TRIP_QUESTIONS.noOfTravellers}
							onChange={handleChange}
							name="noOfTravellers"
						/>
						<BasicInput
							title={PRIVATE_TRIP_QUESTIONS.otherDestinations}
							onChange={handleChange}
							name="otherDestinations"
						/>
						<BasicInput
							title={PRIVATE_TRIP_QUESTIONS.celebratingOccassion}
							onChange={handleChange}
							name="celebratingOccassion"
						/>
						<BasicInput
							title={PRIVATE_TRIP_QUESTIONS.travelDates}
							onChange={handleChange}
							name="travelDates"
						/>
						<BasicInput
							title={PRIVATE_TRIP_QUESTIONS.budgetMinusFlight}
							onChange={handleChange}
							name="budgetMinusFlight"
						/>
						<BasicInput
							title={PRIVATE_TRIP_QUESTIONS.specificActivies}
							onChange={handleChange}
							name="specificActivies"
						/>
						<BasicInput
							title={PRIVATE_TRIP_QUESTIONS.yourThoughts}
							onChange={handleChange}
							name="yourThoughts"
						/>
						<BasicInput
							title={PRIVATE_TRIP_QUESTIONS.whoToldYou}
							onChange={handleChange}
							name="whoToldYou"
						/>
					</form>
					{/* <FormButton onClick={submitPrivateTrip}>Submit</FormButton> */}
					<LoadingButton
						loading={loading}
						disabled={loading}
						buttonText="Submit"
						onClickFn={submitPrivateTrip}
					/>
				</TripForm>
			</FormArea>
		</div>
	);
}
