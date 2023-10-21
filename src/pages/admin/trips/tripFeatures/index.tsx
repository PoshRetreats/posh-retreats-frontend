import { MuiInnputField } from "components/muiInputFields";
import { CreateTripCardList, GreyText } from "../style";
import { AddButton } from "components/buttons/addButton";
import { TripProps } from "../types";
import { Active } from "../tripDetails/style";
import { ACTIVE_ICON } from "assets";

// FEATURES
export function TripFeatures({ groupTripDetails, setGroupTripDetails, addedFeatures, setAddedFeatures }: TripProps | any) {

	const addBreakdown = () => {
		if (!addedFeatures.breakDown) {
			// If addedFeatures.breakDown is not defined, initialize it as an empty array
			addedFeatures.breakDown = [];
		}

		if (!addedFeatures.breakDown.includes(groupTripDetails.breakDown)) {
			// Add the value to addedFeatures.breakDown
			addedFeatures.breakDown.push(groupTripDetails.breakDown);
			setAddedFeatures({ ...addedFeatures });
		}

		// Reset the input field
		setGroupTripDetails({ ...groupTripDetails, breakDown: "" });
	}


	// console.log(addedFeatures.breakDown);

	return (
		<>
			<div>
				<h3>Features</h3>
				<GreyText>What are the rules for this trip?</GreyText>
				<CreateTripCardList>
					<MuiInnputField
						onchange={(e) =>
							setGroupTripDetails({
								...groupTripDetails,
								breakDown: e.target.value,
							})
						}
						value={groupTripDetails.breakDown}
						type="text"
						placeholder="Breakdown"
					/>
					{addedFeatures.breakDown.length > 0 && addedFeatures.breakDown.map((items: any) =>
					(
						<div className="included_trips">
							<section className="included_trips_condition">
								<Active alt="active" src={ACTIVE_ICON} />
								<span>{items}</span>
							</section>
						</div>))}
					<AddButton onclick={addBreakdown} />
					<MuiInnputField
						onchange={(e) =>
							setGroupTripDetails({ ...groupTripDetails, inclusion: e.target.value })
						}
						value={groupTripDetails.inclusion}
						type="text"
						placeholder="Inclusions"
					/>
					<AddButton />
					<MuiInnputField
						onchange={(e) =>
							setGroupTripDetails({ ...groupTripDetails, exclusion: e.target.value })
						}
						value={groupTripDetails.exclusion}
						type="text"
						placeholder="Exclusions"
					/>
					<AddButton />
				</CreateTripCardList>
			</div>
		</>
	);
}
