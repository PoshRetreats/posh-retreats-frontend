import useToastStore from "components/appToast/store";
// import { Checkbox } from "components/checkbox";
import LoadingButton from "components/loaders/MainLoadingButton";
import TripHeader from "components/menuHeader/TripHeader";
import { BasicInput } from "pages/trips/private/Form";
import { FormArea, TripForm } from "pages/trips/private/style";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
// import { makePostRequestWithAxios, makePutRequestWithAxios } from "requests/requests";
import { SERVER_JOIN_PUBLIC_TRIPS } from "routes/server";
// import { CheckboxHeader, CheckboxList } from "./style";
import useAppNavigator from "hooks/useAppNavigator";
import { TRIPS_URL } from "routes/frontend";
import { makePutRequestWithAxios } from "requests/requests";

export enum PUBLIC_TRIP_QUESTIONS {
	fullName = "Full Name",
	email = "Email Address",
	phone = "Phone number (include country code)",
	gender = "Gender",
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

const defaultObj = {
	fullName: "",
	email: "",
	phone: "",
	gender: "",
	age: "",
	nationality: "",
	location: "",
	instagram: ``,
	occupation: "",
	dietryRestrictions: "",
	occupancy: "",
	sleepingArrangements: "",
	shirtSize: "",
	findAboutTrip: "",
};

const personalityObj = {
	keepOnAC: {
		label: "I keep the AC on",
		value: false,
	},
	roomWarm: {
		label: "I like my room warm",
		value: false,
	},
	readyToTalk: {
		label: "I wake up ready to talk",
		value: false,
	},
	morningTalks: {
		label: "I don't like to speak in the morning",
		value: false,
	},
	alwaysLate: {
		label: "I am always late",
		value: false,
	},
	alwaysOnTime: {
		label: "I am always on time",
		value: false,
	},
	getAlong: {
		label: "I get along with everyone easy",
		value: false,
	},
	introverted: {
		label: "I am pretty introverted",
		value: false,
	},
	superSocial: {
		label: "I am super social",
		value: false,
	},
	aloneTime: {
		label: "I need plenty of alone time",
		value: false,
	},
	roomateGender: {
		label: "I am open to any gender roommate",
		value: false,
	},
	snorer: {
		label: "I am a snorer",
		value: false,
	},
	perfectSilence: {
		label: "I need perfect silence to sleep",
		value: false,
	},
	noSleep: {
		label: "I am team no sleep (catch me outside)",
		value: false,
	},
	sleeper: {
		label: "I am team SLEEP (find me in bed)",
		value: false,
	},
	noGuest: {
		label: "My room has a no extra guest policy",
		value: false,
	},
	allow: {
		label: "My room is open to new friends (travel baes etc)",
		value: false,
	},
};

export default function GroupForm() {
	const [loading, setLoading] = useState(false);
	const [formObj, setFormObj] = useState<typeof defaultObj>({
		...defaultObj,
	});
	const [checkboxObj, setCheckboxObj] =
		useState<typeof personalityObj>(personalityObj);
	const toast = useToastStore();
	const location = useLocation();
	const { appNavigator } = useAppNavigator();
	const { trip } = location.state;
	const params = useParams();

	function handleChange(e: any, name: string) {
		setFormObj({
			...formObj,
			[name]: e.target.value,
		});
	}

	// function handleCheckboxChange(state: boolean, name: string, label: string) {
	// 	console.log({ state, name, label });
	// 	setCheckboxObj({
	// 		...checkboxObj,
	// 		[name]: {
	// 			label,
	// 			value: state,
	// 		},
	// 	});
	// }
	// console.log({ checkboxObj });
	async function submitPrivateTrip() {
		try {
			setLoading(true);
			const personalityLabels = Object.entries(checkboxObj)
				.filter((data: any) => data[1].value === true)
				.map((data: any) => data[1].label);
			if (!formObj.fullName || !formObj.email || !formObj.phone) {
				toast.showWarningToast("Please Fill in all required details");
				return;
			}
			const res: any = await makePutRequestWithAxios(SERVER_JOIN_PUBLIC_TRIPS, {
				questions: { ...formObj, personality: [...personalityLabels] },
				tripType: "public",
				trip: params?.tripID,
			});
			console.log({ res });
			if (res.success) {
				setFormObj({ ...defaultObj, ...personalityObj });
				setCheckboxObj({
					...checkboxObj,
				});
				appNavigator(TRIPS_URL);
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
						{/* <CheckboxHeader>
							Please select your rooming/personality preferences
						</CheckboxHeader>
						<CheckboxList>
							{Object.entries(checkboxObj).map(([key, { label, value }]) => (
								<Checkbox
									key={key}
									label={label}
									name={key}
									onChange={(state: boolean, name: string) =>
										handleCheckboxChange(state, name, label)
									}
								/>
							))}
						</CheckboxList> */}
					</form>
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
