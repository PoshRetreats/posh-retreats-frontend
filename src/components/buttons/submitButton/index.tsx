import { LoadingButtonStyle, ButtonDiv } from "./style";

type LoadingButtonProps = {
	name: string;
    className?: string;
	onclick?: () => void
	type?: string | any;
};
export function SubmitButton({className, name,onclick, type }: LoadingButtonProps) {
	return (
		<ButtonDiv className={className}>
			<LoadingButtonStyle type = {type} onClick={onclick} variant="contained">{name}</LoadingButtonStyle>
		</ButtonDiv>
	);
}
