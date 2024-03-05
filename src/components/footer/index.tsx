import { FACEBOOK, INSTAGRAM, LOGO, TIKTOK, TWITTER } from "assets";
import { FooterContainer, FooterListDataArea, FooterLogo } from "./style";
import FooterList, { FooterListType, ListType } from "./FooterList";
// import { CONTACT_US_URL } from "routes/frontend";

const tiktokLink = "https://www.tiktok.com/@posh.retreats?_t=8jfaklTKkdc&_r=1";
const instagramLink =
	"https://www.instagram.com/poshretreats?igsh=MWx4YW1tdHJhM2F2cA%3D%3D&utm_source=qr";
const facebookLink = " https://www.facebook.com/poshretreats1";
const twitterLink = " https://x.com/posh_retreats?s=21&t=X9eCifkrm07k0kzt6mXLUA";
const footerListData: FooterListType[] = [
	// {
	// 	header: "Group Trips",
	// 	list: [
	// 		{ name: "Destinations", link: "#destinations" },
	// 		{ name: "How it Works", link: "#howItWorks" },
	// 		{ name: "Group Trip FAQs", link: "#GroupTripsFAQ" },
	// 	],
	// 	listType: ListType.texts,
	// },
	// {
	// 	header: "Private Trips",
	// 	list: [
	// 		{ name: "Destinations", link: "#destinations" },
	// 		{ name: "How it Works", link: "#howItWorks" },
	// 		{ name: "Group Trip FAQs", link: "#GroupTripsFAQ" },
	// 	],
	// 	listType: ListType.texts,
	// },
	// {
	// 	header: "Contact Us",
	// 	list: [
	// 		{ name: "Form", link: CONTACT_US_URL },
	// 		// { name: "How it Works", link: "#howItWorks" },
	// 		// { name: "Group Trip FAQs", link: "#GroupTripsFAQ" },
	// 	],
	// 	listType: ListType.texts,
	// },
	// {
	// 	header: "Follow Us",
	// 	list: [
	// 		{ name: "Destinations", link: "#destinations" },
	// 		{ name: "How it Works", link: "#howItWorks" },
	// 		{ name: "Group Trip FAQs", link: "#GroupTripsFAQ" },
	// 	],
	// 	listType: ListType.texts,
	// },
	{
		header: "Follow Us",
		list: [INSTAGRAM, TIKTOK, TWITTER, FACEBOOK],
		link: [instagramLink, tiktokLink, twitterLink, facebookLink],
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
