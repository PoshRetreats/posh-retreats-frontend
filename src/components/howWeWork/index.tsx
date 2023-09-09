import MenuHeader from "components/menuHeader";
import { HowWeWorkContainer, HowWeWorkWrapper, WrapperContainer } from "./style";

const data: any = [
	{
		title: "Connect",
		description: `Connect with us by creating an 
    account and checking out all our
    amazing membership choices and
    offers`,
	},
	{
		title: "Schedule",
		description: `Connect with us by creating an 
    account and checking out all our
    amazing membership choices and
    offers`,
	},
	{
		title: "Pay",
		description: `Connect with us by creating an 
    account and checking out all our
    amazing membership choices and
    offers`,
	},
	{
		title: "Travel",
		description: `Connect with us by creating an 
    account and checking out all our
    amazing membership choices and
    offers`,
	},
];

export default function HowWeWork() {
	return (
		<HowWeWorkContainer>
			<h1>How We Work</h1>
			<HowWeWorkWrapper>
				{data.map((workData: any, i: number) => (
					<WrapperContainer key={i}>
						<h2>{i + 1}</h2>
						<h3>{workData.title}</h3>
						<p>{workData.description}</p>
					</WrapperContainer>
				))}
			</HowWeWorkWrapper>
		</HowWeWorkContainer>
	);
}
