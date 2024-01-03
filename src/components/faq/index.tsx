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

const data = {
	title: "",
	rows: [
		{
			title: "Lorem ipsum dolor sit amet,",
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
		},
		{
			title: "Nunc maximus, magna at ultricies elementum",
			content:
				"Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
		},
		{
			title: "Curabitur laoreet, mauris vel blandit fringilla",
			content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
		},
		{
			title: "What is the package version",
			content: <p>current version is 1.2.1</p>,
		},
	],
};

// const styles = {
// 	// bgColor: 'white',
// 	titleTextColor: "#020E07",
// 	rowTitleColor: "#020E07",
// 	// rowContentColor: 'grey',
// 	// arrowColor: "red",
// };

// const config = {
// 	animate: true,
// 	openOnload: true,
// 	// arrowIcon: "V",
// 	tabFocus: true,
// };

export default function FAQ() {
	return (
		<FAQContainer>
			<h5>Got Any Questions?</h5>
			<FAQWrapper>
				<Accordion allowZeroExpanded>
					{data.rows.map((item, i) => (
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
