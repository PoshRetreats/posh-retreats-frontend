import { LoadingButtonStyle, ButtonDiv } from "./style";

type LoadingButtonProps = {
	name: string;
    className?: string;
	onclick?: () => void
	type?: string | any;
	disabled?: boolean
};
export function SubmitButton({className, name,onclick, type,disabled }: LoadingButtonProps) {
	return (
		<ButtonDiv className={className}>
			<LoadingButtonStyle disabled = {disabled} type = {type} onClick={onclick} variant="contained">{name}</LoadingButtonStyle>
		</ButtonDiv>
	);
}
