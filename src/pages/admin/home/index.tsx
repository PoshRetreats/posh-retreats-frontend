import AdminMenu from "components/menuHeader/admin";
import { AdminContainer, AdminHomeContainer } from "./style";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";

import React from 'react'

export function AllTripsCard() {
  return (
    <div>
      <h1>All Trips</h1>
    </div>
  )
}


export default function AdminHome() {
	return (
		<AdminContainer>
			<AdminMenu />
			<AdminHomeContainer>
				<AdminHeaderTitle />
			</AdminHomeContainer>
		</AdminContainer>
	);
}
