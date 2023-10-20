import { LoadingButtonStyle, ButtonDiv } from "./style";

type LoadingButtonProps = {
	name: string;
    className?: string;
	onclick?: () => void
};
export function SubmitButton({className, name,onclick }: LoadingButtonProps) {
	return (
		<ButtonDiv className={className}>
			<LoadingButtonStyle onClick={onclick} variant="contained">{name}</LoadingButtonStyle>
		</ButtonDiv>
	);
}
