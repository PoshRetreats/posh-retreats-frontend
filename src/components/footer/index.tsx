import { FACEBOOK, INSTAGRAM, LOGO, TIKTOK, YOUTUBE } from "assets";
import { FooterContainer, FooterListDataArea, FooterLogo } from "./style";
import FooterList, { FooterListType, ListType } from "./FooterList";

const footerListData: FooterListType[] = [
	{
		header: "Group Trips",
		list: [
			{ name: "Destinations", link: "#destinations" },
			{ name: "How it Works", link: "#howItWorks" },
			{ name: "Group Trip FAQs", link: "#GroupTripsFAQ" },
		],
		listType: ListType.texts,
	},
	{
		header: "Private Trips",
		list: [
			{ name: "Destinations", link: "#destinations" },
			{ name: "How it Works", link: "#howItWorks" },
			{ name: "Group Trip FAQs", link: "#GroupTripsFAQ" },
		],
		listType: ListType.texts,
	},
	{
		header: "Contact Us",
		list: [
			{ name: "Destinations", link: "#destinations" },
			{ name: "How it Works", link: "#howItWorks" },
			{ name: "Group Trip FAQs", link: "#GroupTripsFAQ" },
		],
		listType: ListType.texts,
	},
	{
		header: "Follow Us",
		list: [
			{ name: "Destinations", link: "#destinations" },
			{ name: "How it Works", link: "#howItWorks" },
			{ name: "Group Trip FAQs", link: "#GroupTripsFAQ" },
		],
		listType: ListType.texts,
	},
	{
		header: "About Us",
		list: [INSTAGRAM, TIKTOK, YOUTUBE, FACEBOOK],
		listType: ListType.images,
	},
];

export default function Footer() {
	return (
		<FooterContainer>
			<FooterLogo src={LOGO} alt="app_logo" />
			<FooterListDataArea>
				{footerListData.map((data: FooterListType, key) => (
					<FooterList key={key} props={data} />
				))}
			</FooterListDataArea>
		</FooterContainer>
	);
}
