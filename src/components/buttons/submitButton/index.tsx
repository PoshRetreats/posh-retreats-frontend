import { LoadingButtonStyle, ButtonDiv } from "./style";

type LoadingButtonProps = {
	name: string;
    className?: string;
};
export function SubmitButton({className, name }: LoadingButtonProps) {
	return (
		<ButtonDiv className={className}>
			<LoadingButtonStyle  variant="contained">{name}</LoadingButtonStyle>
		</ButtonDiv>
	);
}
