import AdminMenu from "components/menuHeader/admin";
import React from "react";
import { AdminHomeContainer } from "../home/style";

export default function AdminGroupTrips() {
	return (
		<AdminHomeContainer>
      <AdminMenu />
			<h2>AdminGroupTrips</h2>
		</AdminHomeContainer>
	);
}
