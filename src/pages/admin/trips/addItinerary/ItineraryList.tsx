import React, { useState } from "react";

interface Itinerary {
	day: number;
	description: string;
}

const ItineraryList: React.FC = () => {
	const [itineraries, setItineraries] = useState<Itinerary[]>([]);
	const [inputValue, setInputValue] = useState<string>("");

	const handleAddItinerary = () => {
		if (inputValue.trim() === "") {
			return; // Ignore empty itineraries
		}

		const newItinerary: Itinerary = {
			day: itineraries.length + 1,
			description: inputValue,
		};

		setItineraries([...itineraries, newItinerary]);
		setInputValue("");
	};

	const handleDeleteItinerary = (day: number) => {
		const updatedItineraries = itineraries.filter(
			(itinerary) => itinerary.day !== day
		);

		// Reassign correct day numbers to the remaining itineraries
		const reorderedItineraries = updatedItineraries.map((itinerary, index) => ({
			...itinerary,
			day: index + 1,
		}));

		setItineraries(reorderedItineraries);
	};

	return (
		<div>
			<div>
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder="Enter itinerary description"
				/>
				<button onClick={handleAddItinerary}>Add Itinerary</button>
			</div>
			<div>
				{itineraries.map((itinerary) => (
					<div key={itinerary.day}>
						<p>
							Day {itinerary.day}: {itinerary.description}
							<button onClick={() => handleDeleteItinerary(itinerary.day)}>
								Delete
							</button>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ItineraryList;
