import { HOME_HEADER } from "assets";
import FAQ from "components/faq";
import HowWeWork from "components/howWeWork";
import MenuHeader from "components/menuHeader";

export default function Home() {
	return (
		<>
			<MenuHeader img={HOME_HEADER} />
      <HowWeWork />
      <FAQ />
		</>
	);
}
