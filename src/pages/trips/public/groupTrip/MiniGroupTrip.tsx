import { useNavigate } from "react-router-dom";
import {
	FilledProgressBar,
	FilledText,
	MiniGroupTripContainer,
	MiniGroupTripDescriptionArea,
	ProgressBarDiv,
	TagContainer,
	TagContainerList,
	TextContainer,
} from "./style";
import { ADMIN_GROUP_TRIPS_DETAILS_URL, TRIPS_OVERVIEW_URL } from "routes/frontend";

export default function MiniGroupTrip({ data, isAdmin }: any) {
	const percent =
		(Number(data.registeredTravelers) / Number(data.totalExpectedTravelers)) * 100;
	const navigate = useNavigate();
	const date = new Date(data.depatureDate).toLocaleDateString();
	console.log({
		data,
		percent,
		reg: data.registeredTravelers,
		tot: data.totalExpectedTravelers,
	});

	function handleTripClick() {
		if (isAdmin) {
			navigate(ADMIN_GROUP_TRIPS_DETAILS_URL, {
				state: { ...data, showButton: false },
			});
			return;
		}
		navigate(TRIPS_OVERVIEW_URL, { state: { data } });
	}
	return (
		<MiniGroupTripContainer onClick={handleTripClick} img={data.images[0]}>
			<TagContainerList>
				{data.tags.map((tag: string, i: number) => (
					<TagContainer key={i}>
						<p>{tag}</p>
					</TagContainer>
				))}
			</TagContainerList>
			<MiniGroupTripDescriptionArea>
				<p>{date}</p>
				<h3>{data.title}</h3>
				<ProgressBarDiv>
					<FilledProgressBar percent={percent}>
						<TextContainer>
							<FilledText>{percent.toFixed(1)}% Capacity</FilledText>
						</TextContainer>
					</FilledProgressBar>
				</ProgressBarDiv>
			</MiniGroupTripDescriptionArea>
		</MiniGroupTripContainer>
	);
}
