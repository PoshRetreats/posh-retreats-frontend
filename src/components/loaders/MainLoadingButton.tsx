import React from "react";
import { ButtonSpinner } from "./LoadingButton";
import { Button } from "./style";
import BrandColors from "utilities/styles/colors";

export default function LoadingButton({
	id,
	loading,
	onClickFn,
	buttonText,
	disabled,
}: any) {
	return (
		<Button
			id={id}
			style={{
				backgroundColor: disabled ? BrandColors.grey : BrandColors.main1,
			}}
			onClick={onClickFn}
			disabled={disabled || loading}
		>
			{loading ? <ButtonSpinner /> : buttonText}
		</Button>
	);
}
