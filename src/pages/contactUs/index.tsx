import { CONTACT_US_HEADER } from "assets";
import MenuHeader from "components/menuHeader";
import {
	ContactUsContainer,
	ContactUsForm,
	ContactUsList,
	ContactUsReason,
} from "./style";
import { useEffect, useState } from "react";
import { BasicInput } from "pages/trips/private/Form";
import { FormButton } from "pages/trips/private/style";
import ComponentLoader from "components/loaders/ComponentLoader";
import { makePostRequest } from "requests/requests";
import { CONTACT_US } from "routes/server";

export default function ContactUs() {
	const [form, setForm] = useState({
		fullname: "",
		email: "",
		phone: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const reasons: string[] = [
		"Need help booking a private or group trip",
		"Would like to partner with us",
		"Have valueable information for us",
		"Have valueable information for us",
		"Have valueable information for us",
		"Have valueable information for us",
		"Have valueable information for us",
	];

	function handleChange(e: any, name: string) {
		setForm({
			...form,
			[name]: e.target.value,
		});
	}

	function sendContactMessage() {
		setLoading(true);
		makePostRequest(CONTACT_US, form)
			.then((res) => {
				setLoading(false);
				console.log({ res });
			})
			.catch((err) => {
				setLoading(false);
				console.log({ err });
			});
	}

	useEffect(() => {}, []);
	return (
		<>
			<MenuHeader
				title="Contact Us"
				description="Have a look at what it’s like taking an adventure with us.
We make every minute of your retreat worth it!"
				img={CONTACT_US_HEADER}
			/>
			<ContactUsContainer>
				<ContactUsList>
					<h1>Why Contact Us?</h1>
					<h4>You can contact us if you:</h4>
					{reasons.map((reason, i) => (
						<ContactUsReason key={i}>
							<div />
							{reason}
						</ContactUsReason>
					))}
				</ContactUsList>
				<ContactUsForm>
					<h3>Need to reach out?</h3>
					<BasicInput title={"Full name"} onChange={handleChange} name="fullName" />
					<BasicInput title={"Email Address"} onChange={handleChange} name="email" />
					<BasicInput title={"Phone Number"} onChange={handleChange} name="phone" />
					<BasicInput
						title={"Message"}
						onChange={handleChange}
						name="message"
						type="textarea"
					/>
					<FormButton onClick={sendContactMessage}>
						{loading ? <ComponentLoader /> : "Submit Form"}
					</FormButton>
				</ContactUsForm>
			</ContactUsContainer>
		</>
	);
}
