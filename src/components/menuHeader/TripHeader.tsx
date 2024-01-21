import { useEffect, useState } from "react";
import {
	DescriptionArea,
	JoinTripButton,
	LogoArea,
	MenuArea,
	MenuHeaderContainer,
	MenuHeaderWrapper,
	MenuOverlay,
} from "./style";
import { HAMBURGER, LOGO } from "assets";
import TopNavigation from "./navigation/TopNavigation";
import SideMenu from "./navigation/sideMenu";
import { Hamburger } from "./navigation/sideMenu/style";
import BrandColors from "utilities/styles/colors";
import { Link } from "react-router-dom";
import { HOME_URL, gotoGroupTripForm } from "routes/frontend";
import { TagContainer, TagContainerList } from "pages/trips/public/groupTrip/style";
import useAppNavigator from "hooks/useAppNavigator";
import { dateModifierWithYear } from "utilities/helpers";

type MainTripHeaderProps = {
	data?: any;
	componentData?: any[];
	showJoinButton?: boolean;
	isComponent?: boolean;
};

function SingleTripHeader({ data, showJoinButton, isComponent = false }: any) {
	const [sideMenu, setSideMenu] = useState(false);
	const [scrolling, setScrolling] = useState(false);
	const { appNavigator } = useAppNavigator();
	const formUrl = gotoGroupTripForm(data._id);

	function gotoForm() {
		appNavigator(formUrl, { trip: data });
	}
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const backgroundColor = scrolling ? BrandColors.main1 : "transparent";
	const color = scrolling ? "black" : "white";
	const date = dateModifierWithYear(new Date(data.depatureDate));
	const returnDate = dateModifierWithYear(new Date(data.returnDate));
	console.log({ data });
	return (
		<MenuOverlay>
			<MenuHeaderContainer img={data.images[1]}>
				{!isComponent && (
					<MenuArea style={{ backgroundColor }}>
						<Link style={{ position: "fixed", top: 10, zIndex: 300 }} to={HOME_URL}>
							<LogoArea src={LOGO} alt="logo" />
						</Link>
						<TopNavigation textColor={color} />
						<Hamburger
							onClick={() => setSideMenu(true)}
							src={HAMBURGER}
							alt="hamburger"
						/>
					</MenuArea>
				)}
				{!isComponent && (
					<>
						<MenuHeaderWrapper style={{ backgroundColor }} />
					</>
				)}
				<DescriptionArea>
					<TagContainerList>
						{data.tags.map((tag: string, i: number) => (
							<TagContainer key={i}>
								<p style={{ marginTop: "unset" }}>{tag}</p>
							</TagContainer>
						))}
					</TagContainerList>
					<p style={{ marginTop: 10 }}>{`${date} - ${returnDate}`}</p>
					<h3>{data.title}</h3>
					{showJoinButton && (
						<JoinTripButton onClick={gotoForm}>Join Trip</JoinTripButton>
					)}
				</DescriptionArea>
				<SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
			</MenuHeaderContainer>
		</MenuOverlay>
	);
}

export default function TripHeader({
	data,
	showJoinButton = false,
	isComponent = false,
}: MainTripHeaderProps) {
	// if (data) {
	return (
		<SingleTripHeader
			isComponent={isComponent}
			data={data}
			showJoinButton={showJoinButton}
		/>
	);
	// }

	// return null;
}
