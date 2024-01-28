import React from "react";
import { AddItineraryDataContainer } from "./style";
import { SubmitButton } from "components/buttons/submitButton";

type ItineraryListType = {
	itineraryValue: string;
	setItineraryValue: React.Dispatch<React.SetStateAction<string>>;
	handleAddItinerary: () => void;
};

const AddItineraryData: React.FC<ItineraryListType> = ({
	itineraryValue,
	setItineraryValue,
	handleAddItinerary,
}) => {
	return (
		<AddItineraryDataContainer>
			<h2>Add Itinerary</h2>
			<textarea
				value={itineraryValue}
				onChange={(e) => setItineraryValue(e.target.value)}
				placeholder="Enter itinerary description"
			/>
			<SubmitButton onclick={handleAddItinerary} name="Add Itinerary" />
		</AddItineraryDataContainer>
	);
};

export default AddItineraryData;
