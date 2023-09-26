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
import { TRIPS_OVERVIEW_URL } from "routes/frontend";

export default function MiniGroupTrip({ data }: any) {
	console.log({ data });
	const percent = (data.occupied / data.total) * 100;
	const navigate = useNavigate();

	function handleTripClick() {
		navigate(TRIPS_OVERVIEW_URL, { state: { data } });
	}
	return (
		<MiniGroupTripContainer onClick={handleTripClick} img={data.image}>
			<TagContainerList>
				{data.tags.map((tag: string, i: number) => (
					<TagContainer key={i}>
						<p>{tag}</p>
					</TagContainer>
				))}
			</TagContainerList>
			<MiniGroupTripDescriptionArea>
				<p>{data.date.toLocaleDateString()}</p>
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
