import { ABOUT_HEADER } from "assets";
import FAQ from "components/faq";
import MenuHeader from "components/menuHeader";

export default function About() {
	return (
		<>
			<MenuHeader img={ABOUT_HEADER} />
      <FAQ />
		</>
	);
}
