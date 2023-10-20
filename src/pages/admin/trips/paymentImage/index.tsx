import { MuiInnputField, MuiTextArea } from "components/muiInputFields";
import { CreateTripCardList } from "../style";
import { InputAdornment } from "@mui/material";
import { TripProps } from "../types";

export function Images({ groupTripDetails, setGroupTripDetails }: TripProps) {
	return (
		<>
			<div>
				<MuiTextArea
					value={groupTripDetails.image}
					onchange={(e) =>
						setGroupTripDetails({ ...groupTripDetails, image: e.target.value })
					}
					label="Images"
					placeholder="Enter image URLs (one per line)"
				/>
				<CreateTripCardList>
					<MuiInnputField
						value={groupTripDetails.payment}
						onchange={(e) =>
							setGroupTripDetails({ ...groupTripDetails, payment: e.target.value })
						}
						type="text"
						placeholder="Payment"
						startAdornment={<InputAdornment position="start">$</InputAdornment>}
					/>
				</CreateTripCardList>
			</div>
		</>
	);
}