import { MuiInnputField } from "components/muiInputFields";
import { TripProps } from "../types";
import { AddButton } from "components/buttons/addButton";
import { Active } from "../groupTripDetails/style";
import { ACTIVE_ICON } from "assets";

export function Images({
	groupTripDetails,
	setGroupTripDetails,
	addedFeatures,
	setAddedFeatures,
}: TripProps | any) {
	const addUrlImage = () => {
		if (!addedFeatures.image) {
			// If addedFeatures.breakDown is not defined, initialize it as an empty array
			addedFeatures.image = [];
		}

		if (!addedFeatures.image.includes(groupTripDetails.image)) {
			// Add the value to addedFeatures.breakDown
			addedFeatures.image.push(groupTripDetails.image);
			setAddedFeatures({ ...addedFeatures });
		}

		// Reset the input field
		setGroupTripDetails({ ...groupTripDetails, image: "" });
	};

	return (
		<>
			<div>
				<MuiInnputField
					value={groupTripDetails.image}
					onchange={(e) =>
						setGroupTripDetails({ ...groupTripDetails, image: e.target.value })
					}
					label="Images"
					placeholder="Enter image URLs (one per line)"
				/>

				{addedFeatures.image.length > 0 &&
					addedFeatures.image.map((items: any) => (
						<div className="included_trips">
							<section className="included_trips_condition">
								<Active alt="active" src={ACTIVE_ICON} />
								<span className="img">{items}</span>
							</section>
						</div>
					))}

				<AddButton onclick={addUrlImage} />
			</div>
		</>
	);
}
