import AdminMenu from "components/menuHeader/admin";
import React from "react";
import { AdminContainer } from "../home/style";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";

export default function AdminGroupTrips() {
	return (
		<AdminContainer>
			<AdminMenu />
      <div>
      <AdminHeaderTitle title="Group Trips" />
      </div>
		</AdminContainer>
	);
}
