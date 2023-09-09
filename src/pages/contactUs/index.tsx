import { CONTACT_US_HEADER } from "assets";
import MenuHeader from "components/menuHeader";
import {
	ContactUsContainer,
	ContactUsForm,
	ContactUsList,
	ContactUsReason,
} from "./style";
import { useState } from "react";
import { BasicInput } from "pages/trips/private/Form";
import { FormButton } from "pages/trips/private/style";

export default function ContactUs() {
	const [form, setForm] = useState({
		fullname: "",
		email: "",
		phone: "",
		message: "",
	});
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
	return (
		<>
			<MenuHeader img={CONTACT_US_HEADER} />
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
					<BasicInput
						title={'Full name'}
						onChange={handleChange}
						name="fullName"
					/>
					<BasicInput
						title={'Email Address'}
						onChange={handleChange}
						name="email"
					/>
					<BasicInput
						title={'Phone Number'}
						onChange={handleChange}
						name="phone"
					/>
					<BasicInput
						title={'Message'}
						onChange={handleChange}
						name="message"
					/>
          <FormButton>Submit</FormButton>
				</ContactUsForm>
			</ContactUsContainer>
		</>
	);
}
