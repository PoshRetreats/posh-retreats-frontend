import { ABOUT_HEADER } from "assets";
import FAQ from "components/faq";
import MenuHeader from "components/menuHeader";

export default function About() {
	return (
		<>
			<MenuHeader
				title="About Us"
				description="Have a look at what it’s like taking an adventure with us.
We make every minute of your retreat worth it!"
				img={ABOUT_HEADER}
			/>
			<FAQ />
		</>
	);
}
