import { MuiInnputField } from "components/muiInputFields";
import { CreateTripCardList, GreyText } from "../style";
import { AddButton } from "components/buttons/addButton";
import { TripProps } from "../types";
import { Active } from "../groupTripDetails/style";
import { ACTIVE_ICON } from "assets";

// FEATURES
export function TripFeatures({
	groupTripDetails,
	setGroupTripDetails,
	addedFeatures,
	setAddedFeatures,
}: TripProps | any) {


	
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
	};

	const addInclusions = () => {
		if (!addedFeatures.inclusion) {
			// If addedFeatures.breakDown is not defined, initialize it as an empty array
			addedFeatures.inclusion = [];
		}

		if (!addedFeatures.inclusion.includes(groupTripDetails.inclusion)) {
			// Add the value to addedFeatures.breakDown
			addedFeatures.inclusion.push(groupTripDetails.inclusion);
			setAddedFeatures({ ...addedFeatures });
		}

		// Reset the input field
		setGroupTripDetails({ ...groupTripDetails, inclusion: "" });
	};

	const addExclusions = () => {
		if (!addedFeatures.exclusion) {
			// If addedFeatures.breakDown is not defined, initialize it as an empty array
			addedFeatures.exclusion = [];
		}

		if (!addedFeatures.exclusion.includes(groupTripDetails.exclusion)) {
			// Add the value to addedFeatures.breakDown
			addedFeatures.exclusion.push(groupTripDetails.exclusion);
			setAddedFeatures({ ...addedFeatures });
		}

		// Reset the input field
		setGroupTripDetails({ ...groupTripDetails, exclusion: "" });
	};

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
					{addedFeatures.breakDown.length > 0 &&
						addedFeatures.breakDown.map((items: any) => (
							<div className="included_trips">
								<section className="included_trips_condition">
									<Active alt="active" src={ACTIVE_ICON} />
									<span>{items}</span>
								</section>
							</div>
						))}
					<AddButton onclick={addBreakdown} />
					<MuiInnputField
						onchange={(e) =>
							setGroupTripDetails({ ...groupTripDetails, inclusion: e.target.value })
						}
						value={groupTripDetails.inclusion}
						type="text"
						placeholder="Inclusions"
					/>
					{addedFeatures.inclusion.length > 0 &&
						addedFeatures.inclusion.map((items: any) => (
							<div className="included_trips">
								<section className="included_trips_condition">
									<Active alt="active" src={ACTIVE_ICON} />
									<span>{items}</span>
								</section>
							</div>
						))}
					<AddButton onclick={addInclusions} />
					<MuiInnputField
						onchange={(e) =>
							setGroupTripDetails({ ...groupTripDetails, exclusion: e.target.value })
						}
						value={groupTripDetails.exclusion}
						type="text"
						placeholder="Exclusions"
					/>
					{addedFeatures.exclusion.length > 0 &&
						addedFeatures.exclusion.map((items: any) => (
							<div className="included_trips">
								<section className="included_trips_condition">
									<Active alt="active" src={ACTIVE_ICON} />
									<span>{items}</span>
								</section>
							</div>
						))}
					<AddButton onclick={addExclusions} />
				</CreateTripCardList>
			</div>
		</>
	);
}
