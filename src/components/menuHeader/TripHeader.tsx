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
import { HOME_URL } from "routes/frontend";
import { TagContainer, TagContainerList } from "pages/trips/public/groupTrip/style";

type MainTripHeaderProps = {
	data?: any;
	multipleData?: any[];
	showJoinButton?: boolean;
};

function SingleTripHeader({ data, showJoinButton }: any) {
	const [sideMenu, setSideMenu] = useState(false);
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				// Change background color when user scrolls down
				setScrolling(true);
			} else {
				// Reset background color when user scrolls back to the top
				setScrolling(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		// return () => {
		// 	window.removeEventListener("scroll", handleScroll);
		// };
	}, []);

	const backgroundColor = scrolling ? BrandColors.main1 : "transparent";
	const color = scrolling ? "black" : "white";
	const date = new Date(data.depatureDate).toLocaleDateString();

	return (
		<MenuOverlay>
			<MenuHeaderContainer img={data.images[1]}>
				<MenuHeaderWrapper style={{ backgroundColor }} />
				<Hamburger
					onClick={() => setSideMenu(true)}
					src={HAMBURGER}
					alt="hamburger"
				/>
				<DescriptionArea>
					<TagContainerList>
						{data.tags.map((tag: string, i: number) => (
							<TagContainer key={i}>
								<p style={{ marginTop: "unset" }}>{tag}</p>
							</TagContainer>
						))}
					</TagContainerList>
					<p style={{ marginTop: 10 }}>{date}</p>
					<h3>{data.title}</h3>
					{showJoinButton && <JoinTripButton>Join Trip</JoinTripButton>}
				</DescriptionArea>
				<SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
				<MenuArea style={{ backgroundColor }}>
					<Link style={{ position: "fixed", top: 10 }} to={HOME_URL}>
						<LogoArea src={LOGO} alt="logo" />
					</Link>
					<TopNavigation textColor={color} />
				</MenuArea>
			</MenuHeaderContainer>
		</MenuOverlay>
	);
}

export default function TripHeader({ data, showJoinButton=false }: MainTripHeaderProps) {
	if (data) {
		return <SingleTripHeader data={data} showJoinButton={showJoinButton} />;
	}

	return null;
}
