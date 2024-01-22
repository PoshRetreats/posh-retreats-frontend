import React, { useEffect, useState } from "react";
import { CreateButton, CreateContainer, CreateForm } from "./style";
import { LOGO } from "assets";
import useAppNavigator from "hooks/useAppNavigator";
import DefaultInput from "components/defaultInput/DefaultInput";
import useToastStore from "components/appToast/store";
import { GeneralResponseType, makePostRequestWithAxios } from "requests/requests";
import { SERVER_CREATE_ADMIN } from "routes/server";
import { ADMIN_GROUP_TRIPS_URL } from "routes/frontend";
import { ROLE } from "components/menuHeader/admin/HeaderTitle";

export default function CreateAdmin() {
	const [form, setForm] = useState<any>({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		adminLevel: null,
		password: "",
		token: "",
	});
	const [formErr, setFormErr] = useState("");
	const [loading, setLoading] = useState(false);
	const toast = useToastStore();
	const [errors, setErrors] = useState({});
	const { appNavigator, browserState } = useAppNavigator();

	function handleFormChange(e: any) {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	}

	function validateForm() {
		const newErrors: any = {};
		Object.keys(form).forEach((key) => {
			if (key !== "token" && !form[key]) {
				newErrors[key] = "This field is required";
			}
		});
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	}

	async function handleCreateAdmin(e: any) {
		try {
			setLoading(true);
			e.preventDefault();
			console.log({ form });
			if (validateForm()) {
				const res = (await makePostRequestWithAxios(
					SERVER_CREATE_ADMIN,
					form
				)) as GeneralResponseType;
				toast.showSuccessToast(res.message);
				appNavigator(ADMIN_GROUP_TRIPS_URL);
				return;
			} else {
				toast.showFailedToast("Fill in all required fields");
				console.log("Form is invalid", { errors });
				return;
			}
		} catch (err: any) {
			toast.showFailedToast(err.message);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		const isNotAllowed = browserState.user.adminLevel < ROLE.SUPER_ADMIN;
		console.log({ browserState });
		isNotAllowed && appNavigator(ADMIN_GROUP_TRIPS_URL);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<CreateContainer>
			<CreateForm>
				<h3>Create Admin</h3>
				<img src={LOGO} alt="logo" />
				<DefaultInput
					required={true}
					name="username"
					type="text"
					label="Username*"
					handlechange={handleFormChange}
				/>
				<DefaultInput
					required={true}
					name="firstName"
					type="text"
					label="First Name*"
					handlechange={handleFormChange}
				/>
				<DefaultInput
					required={true}
					name="lastName"
					type="text"
					label="Last Name*"
					handlechange={handleFormChange}
				/>
				<DefaultInput
					required={true}
					name="email"
					type="text"
					label="Email*"
					handlechange={handleFormChange}
				/>
				<DefaultInput
					required={true}
					name="adminLevel"
					type="number"
					label="Admin Level*"
					handlechange={handleFormChange}
				/>
				<DefaultInput
					required={true}
					name="password"
					type="password"
					label="Password*"
					err={formErr}
					handleFocus={() => setFormErr("")}
					handlechange={handleFormChange}
				/>
				<DefaultInput
					required={true}
					name="token"
					type="text"
					label="Authorization"
					handlechange={handleFormChange}
				/>
				<CreateButton
					disabled={loading}
					loading={loading}
					onClick={handleCreateAdmin}
				>
					{loading ? "loading..." : "Login"}
				</CreateButton>
			</CreateForm>
		</CreateContainer>
	);
}
