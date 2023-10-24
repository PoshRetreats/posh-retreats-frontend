import { LoadingButtonStyle, ButtonDiv } from "./style";

type LoadingButtonProps = {
	name: string;
    className?: string;
	onclick?: () => void
	type?: string | any;
	disabled?: boolean
	loading?: boolean
};
export function SubmitButton({className, name,onclick, type,disabled, loading }: LoadingButtonProps) {
	return (
		<ButtonDiv className={className}>
			<LoadingButtonStyle loading = {loading} disabled = {disabled} type = {type} onClick={onclick} variant="contained">{name}</LoadingButtonStyle>
		</ButtonDiv>
	);
}
