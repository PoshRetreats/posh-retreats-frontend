import { MuiInnputField } from "components/muiInputFields";
import { CreateTripCardList, GreyText } from "../style";
import { AddButton } from "components/buttons/addButton";
import { TripProps } from "../types";

// FEATURES
export function TripFeatures({ groupTripDetails, setGroupTripDetails }: TripProps) {
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
								breakthrough: e.target.value,
							})
						}
						value={groupTripDetails.breakthrough}
						type="text"
						placeholder="Breakdown"
					/>
					<AddButton />
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