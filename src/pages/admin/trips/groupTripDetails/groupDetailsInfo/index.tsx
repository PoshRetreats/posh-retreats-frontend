import AdminMenu from "components/menuHeader/admin";
import { AdminContainer, AdminHomeFlexDiv, AdminTripContainer } from "../../style";
import AdminHeaderTitle from "components/menuHeader/admin/HeaderTitle";
import { AdminHeaderSpace } from "components/menuHeader/admin/style";
import { useLocation } from "react-router-dom";
import { AdminGroudInfoMain, InfoHeader } from "./style";
import { BACK_ICON } from "assets";
import useAppNavigator from "hooks/useAppNavigator";

export const AdminGroupDetailInfoComponent = ({ data }: any) => {
	console.log(data);
	return (
		<AdminGroudInfoMain>
			{data && (
				<div key={data?.trip}>
					<div className="AdminGroudInfoMain">
						<h3 className="name">Name:</h3>
						<span>{data?.questions.fullName}</span>
					</div>
					<div className="AdminGroudInfoMain">
						<h3 className="name">Email address:</h3>
						<span>{data?.questions.email}</span>
					</div>
					<div className="AdminGroudInfoMain">
						<h3 className="name">Phone number:</h3>
						<span>{data?.questions.phone}</span>
					</div>
					<div className="AdminGroudInfoMain">
						<h3 className="name">Gender:</h3>
						<span>{data?.questions.gender}</span>
					</div>
					<div className="AdminGroudInfoMain">
						<h3 className="name">Age:</h3>
						<span>{data?.questions.age}</span>
					</div>
					<div className="AdminGroudInfoMain">
						<h3 className="name">Nationality:</h3>
						<span>{data?.questions.nationality}</span>
					</div>
					<div className="AdminGroudInfoMain">
						<h3 className="name">Location:</h3>
						<span>{data?.questions.location}</span>
					</div>
					<div className="AdminGroudInfoMain">
						<h3 className="name">Instagram Handle:</h3>
						<span>{data?.questions.instagram}</span>
					</div>
					<div className="AdminGroudInfoMain">
						<h3 className="name">Occupation:</h3>
						<span>{data?.questions.occupation}</span>
					</div>
					<div className="AdminGroudInfoMain">
						<h3 className="name">Occupancy (double or single):</h3>
						<span>{data?.questions.occupancy}</span>
					</div>
					<ul>
						<h3 className="list">personality preferences:</h3>
						{data?.questions.personality.map((personality: any) => (
							// <div className="AdminGroudInfoMain">
							<li key={personality}>{personality}</li>
							// </div>
						))}
					</ul>
				</div>
			)}
		</AdminGroudInfoMain>
	);
};

export const GroupDetailsInfo = () => {
	const { appNavigator } = useAppNavigator();
	const location = useLocation();
	console.log(location.state);
	return (
		<>
			<AdminContainer>
				<AdminMenu />
				<AdminHeaderTitle title="Group Trip Details" />
				<AdminHeaderSpace />
				<AdminTripContainer>
					<InfoHeader>
						<img onClick={() => appNavigator(-1)} src={BACK_ICON} alt="" />
						<h2>Registration</h2>
					</InfoHeader>
					<AdminHomeFlexDiv>
						<AdminGroupDetailInfoComponent data={location.state} />
					</AdminHomeFlexDiv>
				</AdminTripContainer>
			</AdminContainer>
		</>
	);
};
