// import AnimateComponent from "components/animateComponent";
import { HowWeWorkContainer, HowWeWorkWrapper, WrapperContainer } from "./style";

const data: any = [
	{
		title: "Connect",
		description: `Start by sharing your travel vision 
		through our easy form. Whether you're after relaxation, 
		culture, thrills, or something else entirely, consider it done. 
		Your desires set the stage.`,
	},
	{
		title: "Schedule",
		description: `Our expert team takes your input
		and creates a personalized itinerary that's a 
		perfect fit. Activities, accommodations, and 
		local gems – we're weaving your dream adventure`,
	},
	{
		title: "Pay",
		description: `Budgeting is no sweat with our convenient 
		payment plan. You're in for an experience that's as seamless 
		as your journey. Our predefined installment structure ensures 
		a stress-free approach to securing your adventure.`,
	},
	{
		title: "Travel",
		description: `As your adventure takes flight, your role is simple – 
		embrace every moment. Let the landscapes, cultures, and experiences 
		envelop you while we handle the behind-the-scenes magic.`,
	},
];

const groupData: any = [
	{
		title: "Fill out Form",
		description: `Start by clicking on the trip you're interested in. 
		Fill out the attached form with your details, including the number 
		of travelers and any special requests.`,
	},
	{
		title: "We'll Get in Touch",
		description: `Our team will promptly review your form and trip details. 
		We'll reach out to you with all the necessary information, including pricing, 
		availability, and any additional details you need to know.`,
	},
	{
		title: "Confirmation and Payment",
		description: `If you're happy with the details, we'll guide you through the 
		booking process, which typically involves confirming your reservation and arranging 
		payment according to your chosen plan.`,
	},
	{
		title: "Pack Your Bags",
		description: `With the booking complete, it's time to get excited about your upcoming 
		adventure! We'll provide you with all the information you need to prepare for your journey.`,
	},
];

const privateData: any = [
	{
		title: "Share Your Preferences",
		description: `Begin your journey by filling out our easy-to-use form. Let us in on your 
		travel dreams - share your desired destination, budget, group size, and preferred activities. 
		We're here to make your vision a reality.`,
	},
	{
		title: "Tailored Itinerary Creation",
		description: `Our expert team will carefully review your preferences and reach out to you with 
		a fully customized itinerary. Feel free to discuss any changes or special requests; we're here 
		to make your trip uniquely yours.`,
	},
	{
		title: "Easy Payment Setup",
		description: `Once you're satisfied with the proposed itinerary, we'll set up your personalized 
		payment link. You can sit back while we take care of all the arrangements and preparations, 
		leaving you with peace of mind and excitement for your upcoming adventure.
`,
	},
	{
		title: "Get Ready to Explore",
		description: `Connect with us by creating an account and checking out all our
		amazing membership choices and offers`,
	},
];

const howWeWorkData: any = {
	home: [...data],
	group: [...groupData],
	private: [...privateData],
};

export default function HowWeWork({ type = "home" }) {
	return (
		// <AnimateComponent>
			<HowWeWorkContainer>
				<h1>How We Work</h1>
				<HowWeWorkWrapper>
					{howWeWorkData[type].map((workData: any, i: number) => (
						<WrapperContainer key={i}>
							<h2>{i + 1}</h2>
							<h3>{workData.title}</h3>
							<p>{workData.description}</p>
						</WrapperContainer>
					))}
				</HowWeWorkWrapper>
			</HowWeWorkContainer>
		// </AnimateComponent>
	);
}
