import { FAQContainer, FAQWrapper } from "./style";
import { Link } from "react-router-dom";
import { CONTACT_US_URL } from "routes/frontend";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const data = [
	{
		title: "Do you book flights?",
		content: `No, we do not book flights. However, upon signing up for a trip, 
			you will be added to a dedicated WhatsApp group where we regularly share valuable 
			travel tips and alert you to the best flight deals as we come across them. 
			Our experience has shown that Tuesdays and Wednesdays typically offer the most 
			budget-friendly flight options for your convenience.`,
	},
	{
		title: "Are Pets Allowed on Your Trips?",
		content: `At Posh Retreats, we strive to create an inclusive and enjoyable experience for every traveler in our groups. 
			To ensure the comfort and well-being of all participants, we do not permit pets on our trips. 
			This policy helps maintain a comfortable and considerate environment for everyone to fully enjoy their travel adventures. 
			If you have any specific concerns or questions related to our policies, please don't hesitate to reach out to our team. 
			We're here to assist you in planning a memorable journey.`,
	},
	{
		title: "Are Couples Welcome on Your Trips?",
		content: `Absolutely, we extend a warm welcome to couples on all our trips! Additionally, we are delighted to offer 
			customized private trips designed exclusively for couples, ensuring a tailored and intimate experience.`,
	},
	{
		title: "Do you offer Single Occupancy?",
		content: `Certainly! We understand that some of our clients may prefer to enjoy their own space and privacy. 
			To accommodate individual preferences, we offer both single and double occupancy options for our trips. 
			Whether you're seeking solitude or sharing the adventure with a companion, we have you covered`,
	},
	{
		title: "Do you process visa applications?",
		content: `No, we do not process visas directly. However, once you sign up for a trip, you will be included in a 
			dedicated WhatsApp group where we facilitate discussions and provide guidance on the visa application process. 
			While the visa applications are submitted individually, our community ensures that travelers are well-informed 
			and supported throughout the application journey, fostering a collaborative approach to visa procurement.`,
	},
];
const groupData = [
	{
		title: "What's Included in Your Travel Packages?",
		content: `When you embark on a journey with us, you'll receive a comprehensive itinerary that serves as your passport 
		to adventure. This carefully crafted itinerary not only outlines everything that's included in your package, from accommodations 
		and excursions to special experiences, but also transparently lists any items or activities that are not covered. We believe in 
		full transparency so you can embark on your journey with confidence, knowing exactly what to expect every step of the way.`,
	},
	{
		title: "Can I Customize the Itinerary to My Preferences?",
		content: `Absolutely! While our group trips are thoughtfully curated 
		to offer a well-rounded experience, we recognize that individual preferences vary. 
		To cater to your unique tastes, we provide the option to customize your itinerary 
		further. You can choose from a selection of additional activities and experiences 
		that can be seamlessly integrated into your journey as paid add-ons. This way, you 
		can tailor your adventure to perfectly match your interests and desires. 
		Your travel, your way!`,
	},
	{
		title: "How Do I Make Payments for My Travel Package?",
		content: `Once you're satisfied with your itinerary and payment plan, 
		we'll send you a secure payment link for your trip's deposit. 
		Then, you'll receive links for future payments as they come due. 
		Travel planning made easy!`,
	},
	{
		title: "Do You Provide Travel Insurance?",
		content: `While we do not directly offer travel insurance, we insist that you secure 
		travel insurance coverage before embarking on your journey. Your safety and peace of mind are paramount to us, 
		and travel insurance provides valuable protection for unexpected situations, ensuring you can fully enjoy your 
		adventure worry-free. We're here to assist and guide you in choosing the right insurance option for your trip, 
		so feel free to reach out if you have any questions or need assistance in this regard.`,
	},
];

const FAQData: any = {
	home: [...data],
	group: [...groupData],
};

export default function FAQ({ type = "home" }) {
	return (
		<FAQContainer>
			<h5>Got Any Questions?</h5>
			<FAQWrapper>
				<Accordion allowZeroExpanded>
					{FAQData[type].map((item: any, i: number) => (
						<AccordionItem key={i}>
							<AccordionItemHeading>
								<AccordionItemButton>{item.title}</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>{item.content}</AccordionItemPanel>
						</AccordionItem>
					))}
				</Accordion>
			</FAQWrapper>
			<h6>Have a Question We Haven't Answered?</h6>
			<Link to={CONTACT_US_URL}>
				<button>Ask A Question</button>
			</Link>
		</FAQContainer>
	);
}
