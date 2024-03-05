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
import ComponentLoader from "components/loaders/ComponentLoader";
import { makePostRequestWithAxios } from "requests/requests";
import { CONTACT_US } from "routes/server";
import useToastStore from "components/appToast/store";

export default function ContactUs() {
	const toast = useToastStore();
	// const CONTACT_US_HEADER =
	// 	"https://res.cloudinary.com/poshretreats/image/upload/v1708778781/IMG_2685_upy9bl.jpg";
	const [form, setForm] = useState({
		fullName: "",
		email: "",
		phone: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const reasons: string[] = [
		"Need help booking a group trip",
		"Would like to partner with us",
		"Need help planning your next trip",
		"Want more information about a trip",
		"Need clarification on any of our offerings",
	];

	function handleChange(e: any, name: string) {
		setForm({
			...form,
			[name]: e.target.value,
		});
	}

	async function sendContactMessage() {
		try {
			setLoading(true);
			if (!form.fullName || !form.email || !form.message || !form.phone) {
				toast.showWarningToast("Please fill in all fields");
				return;
			}
			const res = await makePostRequestWithAxios(CONTACT_US, form);
			setForm({
				fullName: "",
				email: "",
				phone: "",
				message: "",
			});
			toast.showSuccessToast("Message sent successfully");
			console.log({ res });
		} catch (err) {
			toast.showFailedToast("Messages could not be delivered at the moment");
		} finally {
			setLoading(false);
		}
	}

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
					<BasicInput
						title={"Full name"}
						value={form.fullName}
						onChange={handleChange}
						name="fullName"
					/>
					<BasicInput
						title={"Email Address"}
						value={form.email}
						onChange={handleChange}
						name="email"
					/>
					<BasicInput
						title={"Phone Number"}
						value={form.phone}
						onChange={handleChange}
						name="phone"
					/>
					<BasicInput
						title={"Message"}
						value={form.message}
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
