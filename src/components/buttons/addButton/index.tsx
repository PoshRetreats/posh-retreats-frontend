import AddIcon from '@mui/icons-material/Add';
import { ButtonStyle } from "./style";

type AddButtonProps = {
	onclick?: () => void
}
export function AddButton(props: AddButtonProps) {
	return (
		<>
			{" "}
			<ButtonStyle onClick={props.onclick} variant="outlined" startIcon={<AddIcon />}>
				Add
			</ButtonStyle>
		</>
	);
}
