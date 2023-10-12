import { InputLabel, MenuItem } from "@mui/material";
import { InputDiv, InputStyle, SelectStyle, TextareaStyle } from "./style";

type InputProps = {
	placeholder: string;
    type?: string;
};

// INPUTS
export function MuiInnputField(props: InputProps) {
	return (
		<>
			<InputDiv>
				<InputStyle type={props.type} placeholder={props.placeholder} />
			</InputDiv>
		</>
	);
}


// TEXTAREA
export function MuiTextArea(props: InputProps) {
	return (
		<>
			<InputDiv>
				<TextareaStyle placeholder={props.placeholder} />
			</InputDiv>
		</>
	);
}

// MULTI SELECT

type MultiSelectProps = {
	names: string[];
	selectValue: string[];
	placeholder: string;
};

export function MuiMultiSelect(props: MultiSelectProps) {
	return (
		<>
			<InputDiv>
            <InputLabel>{props.placeholder}</InputLabel>
				<SelectStyle multiple value={props.selectValue}>
					{/* <MenuItem disabled value="">
						<em>Placeholder</em>
					</MenuItem> */}
					{props.names.map((name) => (
						<MenuItem key={name} value={name}>
							{name}
						</MenuItem>
					))}
				</SelectStyle>
			</InputDiv>
		</>
	);
}
