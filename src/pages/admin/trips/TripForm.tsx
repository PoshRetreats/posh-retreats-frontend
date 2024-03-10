import useAppNavigator from "hooks/useAppNavigator";
import { AdminContainer, TravellerInfoContainer } from "./style";
import AdminMenu from "components/menuHeader/admin";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import { AdminHeaderSpace } from "components/menuHeader/admin/style";
import {
	MessageContainer,
	MessageDetailsWrapper,
	MessageFlexContainer,
	MessagesListContainer,
} from "../messages/style";
import { useState } from "react";

export default function AdminTripForm() {
	const { browserState } = useAppNavigator();
	const travellers = browserState?.travellers;
	const [info, setInfo] = useState(travellers[0]?.questions);
	console.log({ browserState, travellers, info });


	return (
		<AdminContainer>
			<AdminMenu />
			<AdminHeaderTitle title="Trip Information" />
			<AdminHeaderSpace />
			<MessageFlexContainer>
				<MessagesListContainer>
					<h3>All</h3>
					{travellers.map((traveller: any, i: number) => (
						<MessageContainer onClick={() => setInfo(traveller?.questions)} key={i}>
							<h1>{traveller?.questions?.fullName}</h1>
							<p>{traveller?.questions?.email}</p>
							<p>{traveller?.questions?.age} years</p>
						</MessageContainer>
					))}
				</MessagesListContainer>
				<TravellerInfoContainer>
					<h1>Traveller's Info</h1>
					<MessageDetailsWrapper>
						<div>
							<div className="line"></div>
							<section style={{ marginTop: 12 }}>
								<h3>Name</h3>
								<p>{info?.fullName}</p>
							</section>
							<section style={{ marginTop: 12 }}>
								<h3>Email</h3>
								<p>{info?.email}</p>
							</section>
							<section style={{ marginTop: 12 }}>
								<h3>Phone</h3>
								<p>{info?.phone}</p>
							</section>
							<section style={{ marginTop: 12 }}>
								<h3>Gender</h3>
								<p>{info?.gender || "none"}</p>
							</section>
							<section style={{ marginTop: 12 }}>
								<h3>Instagram Handle</h3>
								<p>{info?.instagram || "none"}</p>
							</section>
							<section style={{ marginTop: 12 }}>
								<h3>Age</h3>
								<p>{info?.age || "none"}</p>
							</section>
							<section style={{ marginTop: 12 }}>
								<h3>Nationality</h3>
								<p>{info?.nationality || "none"}</p>
							</section>
							<section style={{ marginTop: 12 }}>
								<h3>Location</h3>
								<p>{info?.location || "none"}</p>
							</section>
							<section style={{ marginTop: 12 }}>
								<h3>Occupation</h3>
								<p>{info?.occupation || "none"}</p>
							</section>
							<section style={{ marginTop: 12 }}>
								<h3>Occupancy</h3>
								<p>{info?.occupancy || "none"}</p>
							</section>
							<section style={{ marginTop: 12 }}>
								<h3>Who Told you about this trip</h3>
								<p>{info?.findAboutTrip || "none"}</p>
							</section>
						</div>
					</MessageDetailsWrapper>
				</TravellerInfoContainer>
			</MessageFlexContainer>
		</AdminContainer>
	);
}
