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

export default function MiniGroupTrip({ data }: any) {
	console.log({ data });
	const percent = (data.occupied / data.total) * 100;
	return (
		<MiniGroupTripContainer img={data.image}>
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
