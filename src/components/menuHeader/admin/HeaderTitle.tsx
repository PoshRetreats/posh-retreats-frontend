import React from "react";
import { AdminHeaderTitleDiv, ButtonFlex, CreateTripButton } from "./style";
import useAppNavigator from "hooks/useAppNavigator";
import { ADMIN_CREATE_GROUP_TRIPS_URL } from "routes/frontend";

type AdminHeaderProps = {
	title?: string;
};

export enum ROLE {
	ADMIN = 1,
	SUPER_ADMIN = 2,
}

export default function AdminHeaderTitle({ title = "Dashboard" }: AdminHeaderProps) {
	const { appNavigator, browserState } = useAppNavigator();
	const canCreateAdmin = browserState.user.adminLevel === ROLE.SUPER_ADMIN;
	console.log({ browserState });
	return (
		<AdminHeaderTitleDiv>
			<div>
				<p>Welcome, {browserState?.user?.firstName}</p>
				<h3>{title}</h3>
			</div>
			<ButtonFlex>
				<CreateTripButton onClick={() => appNavigator(ADMIN_CREATE_GROUP_TRIPS_URL)}>
					Create Trip
				</CreateTripButton>
				{canCreateAdmin && (
					<CreateTripButton
						onClick={() => appNavigator(ADMIN_CREATE_GROUP_TRIPS_URL)}
					>
						Create Admin
					</CreateTripButton>
				)}
			</ButtonFlex>
		</AdminHeaderTitleDiv>
	);
}
