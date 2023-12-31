import { PRIVATE_TRIPS_HEADER } from "assets";
import useToastStore from "components/appToast/store";
import LoadingButton from "components/loaders/MainLoadingButton";
import MenuHeader from "components/menuHeader";
import TripHeader from "components/menuHeader/TripHeader";
import { BasicInput } from "pages/trips/private/Form";
import { FormArea, TripForm } from "pages/trips/private/style";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { makePostRequestWithAxios } from "requests/requests";
import { SERVER_JOIN_PUBLIC_TRIPS } from "routes/server";

export enum PUBLIC_TRIP_QUESTIONS {
	fullName = "Full Name",
	email = "Email Address",
	phone = "Phone number (include country code)",
	gender = "gender",
	age = "Age",
	nationality = "Nationality",
	location = "Location",
	instagram = `Instagram handle`,
	occupation = "Occupation",
	dietryRestrictions = "Dietry restrictions",
	occupancy = "Occupancy(double or single)",
	sleepingArrangements = "Any sleeping arrangement notes",
	shirtSize = "Shirt Size (XXS, XS, S, M, L, XL, XXL, XXXL, XXXXL)",
	findAboutTrip = "How Did You Find Out About This Trip?",
}

export default function GroupForm() {
	const [loading, setLoading] = useState(false);
	const [formObj, setFormObj] = useState({
		fullName: "",
		email: "",
		phone: "",
	});
	const toast = useToastStore();
  const location = useLocation();
  const { trip } = location.state;
	const params = useParams();
	console.log({ params });
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
			const res: any = await makePostRequestWithAxios(SERVER_JOIN_PUBLIC_TRIPS, {
				questions: { ...formObj },
				tripType: "public",
				trip: params?.tripID,
			});
			console.log({ res });
			if (res.success) {
				setFormObj({
					fullName: "",
					email: "",
					phone: "",
				});
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
			<TripHeader data={trip} />
			<FormArea>
				<TripForm>
					<h1>Trip Registration</h1>
					<form>
						<BasicInput
							title={PUBLIC_TRIP_QUESTIONS.fullName}
							onChange={handleChange}
							name="fullName"
							value={formObj.fullName}
						/>
						<BasicInput
							title={PUBLIC_TRIP_QUESTIONS.email}
							onChange={handleChange}
							name="email"
							value={formObj.email}
						/>
						<BasicInput
							title={PUBLIC_TRIP_QUESTIONS.phone}
							onChange={handleChange}
							name="phone"
							value={formObj.phone}
						/>
						<BasicInput
							title={PUBLIC_TRIP_QUESTIONS.gender}
							onChange={handleChange}
							name="gender"
						/>
						<BasicInput
							title={PUBLIC_TRIP_QUESTIONS.age}
							onChange={handleChange}
							name="age"
						/>
						<BasicInput
							title={PUBLIC_TRIP_QUESTIONS.nationality}
							onChange={handleChange}
							name="nationality"
						/>
						<BasicInput
							title={PUBLIC_TRIP_QUESTIONS.location}
							onChange={handleChange}
							name="location"
						/>
						<BasicInput
							title={PUBLIC_TRIP_QUESTIONS.instagram}
							onChange={handleChange}
							name="instagram"
						/>
						<BasicInput
							title={PUBLIC_TRIP_QUESTIONS.occupation}
							onChange={handleChange}
							name="occupation"
						/>
						<BasicInput
							title={PUBLIC_TRIP_QUESTIONS.dietryRestrictions}
							onChange={handleChange}
							name="dietryRestrictions"
						/>
						<BasicInput
							title={PUBLIC_TRIP_QUESTIONS.occupancy}
							onChange={handleChange}
							name="occupancy"
						/>
						<BasicInput
							title={PUBLIC_TRIP_QUESTIONS.sleepingArrangements}
							onChange={handleChange}
							name="sleepingArrangements"
						/>
						<BasicInput
							title={PUBLIC_TRIP_QUESTIONS.shirtSize}
							onChange={handleChange}
							name="shirtSize"
						/>
						<BasicInput
							title={PUBLIC_TRIP_QUESTIONS.findAboutTrip}
							onChange={handleChange}
							name="findAboutTrip"
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
