import FAQ from "components/faq";
import MenuHeader from "components/menuHeader";
import { AddSpace, ImageSection, SecondSection, StyledImage, TextSection } from "./style";
import useAppNavigator from "hooks/useAppNavigator";
import { ABOUT_US_URL } from "routes/frontend";
import ScrollAnimation from "components/animateComponent/ScrollAnimation";
// import AnimateComponent from "components/animateComponent";

export function AboutComponent({ isHome = false }) {
	const { appNavigator } = useAppNavigator();
	const ABOUT1 =
		"https://res.cloudinary.com/poshretreats/image/upload/v1702126618/IMG_2461_ajpe1i.jpg";
	// const ABOUT1 =
	// 	"https://res.cloudinary.com/poshretreats/image/upload/IMG_6894_yndbhl.jpg";
	const ABOUT2 =
		"https://res.cloudinary.com/poshretreats/image/upload/v1702126619/IMG_2685_r2oian.jpg";
	const ABOUT3 =
		"https://res.cloudinary.com/poshretreats/image/upload/v1708778778/FDBBA81A-7002-42B1-9B25-AF9C861F39BD_fqasez.jpg";
	return (
		<SecondSection>
			<ScrollAnimation>
				<TextSection>
					<h1>About Us</h1>
					<p>
						Posh Retreats emerged from a profound passion for exploring the world,
						transcending the barriers of passport privilege. Our philosophy rejects
						the limitations of waiting for travel companions and instead champions
						the spirit of action. <br />
						{isHome && (
							<button onClick={() => appNavigator(ABOUT_US_URL)}>Learn more</button>
						)}
						{!isHome && (
							<>
								We warmly welcome travelers who, like us, venture to diverse global
								destinations despite the unique challenges posed by certain passport
								holders.  <br />
								<br /> Dedicated to curating exceptional journeys, our commitment
								lies in crafting experiences that are deeply rooted in culture,
								profoundly relaxing, and set against the backdrop of luxurious
								accommodations.
							</>
						)}
					</p>
				</TextSection>
			</ScrollAnimation>
			<ImageSection>
				<ScrollAnimation>
					<StyledImage r="0px" top="-120px" right="40px" src={ABOUT1} alt="about1" />
					<StyledImage top="-20px" right="200px" src={ABOUT2} alt="about2" />
					<StyledImage top="90px" right="60px" src={ABOUT3} alt="about3" />
				</ScrollAnimation>
			</ImageSection>
		</SecondSection>
	);
}

export default function About() {
	const ABOUT_HEADER =
		"https://res.cloudinary.com/poshretreats/image/upload/v1709631176/6402B13E-0A84-469D-A2C3-29DC2C230C87_1000x750_cl9obx.jpg";
	return (
		<>
			<MenuHeader
				title="About Us"
				description="At Posh Retreats, we're dedicated to crafting extraordinary travel experiences tailored to your dreams. With a blend of expertise, passion, and personalized service, we turn wanderlust into reality, one journey at a time"
				img={ABOUT_HEADER}
			/>
			<AboutComponent />
			<AddSpace />
			<FAQ />
		</>
	);
}
