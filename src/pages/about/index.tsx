import { ABOUT1, ABOUT2, ABOUT3, ABOUT_HEADER } from "assets";
import FAQ from "components/faq";
import MenuHeader from "components/menuHeader";
import { ImageSection, SecondSection, StyledImage, TextSection } from "./style";
import useAppNavigator from "hooks/useAppNavigator";
import { ABOUT_US_URL } from "routes/frontend";

export function AboutComponent({ isHome = false }) {
	const { appNavigator } = useAppNavigator();
	return (
		<SecondSection>
			<TextSection>
				<h1>About Us</h1>
				<p>
					Posh Retreats emerged from a profound passion for exploring the world,
					transcending the barriers of passport privilege. Our philosophy rejects the
					limitations of waiting for travel companions and instead champions the
					spirit of action. <br />
					{isHome && <button onClick={() => appNavigator(ABOUT_US_URL)}>Learn more</button>}
					{!isHome && (
						<>
							We warmly welcome travelers who, like us, venture to diverse global
							destinations despite the unique challenges posed by certain passport
							holders.  <br />
							<br /> Dedicated to curating exceptional journeys, our commitment lies
							in crafting experiences that are deeply rooted in culture, profoundly
							relaxing, and set against the backdrop of luxurious accommodations.
						</>
					)}
				</p>
			</TextSection>
			<ImageSection>
				<StyledImage r="0px" top="-120px" right="40px" src={ABOUT1} alt="about1" />
				<StyledImage top="-20px" right="200px" src={ABOUT2} alt="about2" />
				<StyledImage top="90px" right="60px" src={ABOUT3} alt="about3" />
			</ImageSection>
		</SecondSection>
	);
}

export default function About() {
	return (
		<>
			<MenuHeader
				title="About Us"
				description="Have a look at what it’s like taking an adventure with us.
We make every minute of your retreat worth it!"
				img={ABOUT_HEADER}
			/>
			<AboutComponent />
			<FAQ />
		</>
	);
}
