import { useState } from "react";
import { HiddenCheckbox, StyledCheckbox, StyledCheckmark } from "./style";

export const Checkbox = ({ label, onChange, name }: any) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		const newCheckedState = !isChecked;
		setIsChecked(newCheckedState);
		onChange(newCheckedState, name);
	};

	return (
		<StyledCheckbox>
			<HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
			<StyledCheckmark checked={isChecked} />
			<p>{label}</p>
		</StyledCheckbox>
	);
};
