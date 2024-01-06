import React from "react";
import { AdminHeaderTitleDiv, CreateTripButton } from "./style";
import useAppNavigator from "hooks/useAppNavigator";
import { ADMIN_CREATE_GROUP_TRIPS_URL } from "routes/frontend";

type AdminHeaderProps = {
	title?: string;
};
export default function AdminHeaderTitle({ title = "Dashboard" }: AdminHeaderProps) {
	const { appNavigator } = useAppNavigator();
	return (
		<AdminHeaderTitleDiv>
			<div>
				<p>Welcome, Bukky</p>
				<h3>{title}</h3>
			</div>
			<CreateTripButton onClick={() => appNavigator(ADMIN_CREATE_GROUP_TRIPS_URL)}>
				Create Trip
			</CreateTripButton>
		</AdminHeaderTitleDiv>
	);
}
