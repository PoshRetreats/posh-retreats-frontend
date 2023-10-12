import AddIcon from '@mui/icons-material/Add';
import { ButtonStyle } from "./style";

export function AddButton() {
	return (
		<>
			{" "}
			<ButtonStyle variant="outlined" startIcon={<AddIcon />}>
				Add
			</ButtonStyle>
		</>
	);
}
