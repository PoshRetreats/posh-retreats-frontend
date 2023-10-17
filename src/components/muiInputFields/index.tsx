import { InputLabel, MenuItem, SelectChangeEvent } from "@mui/material";
import { DatePickerStyle, InputDiv, InputStyle, SelectStyle, TextareaStyle } from "./style";

type InputProps = {
	placeholder: string;
	type?: string;
	startAdornment?: any;
	label?: string;
	onchange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
	value?: string;
};

// INPUTS
export function MuiInnputField(props: InputProps) {
	return (
		<>
			<InputDiv>
				<InputStyle disableUnderline = {true} value={props.value} onChange={props.onchange} startAdornment={props.startAdornment} type={props.type} placeholder={props.placeholder} />
			</InputDiv>
		</>
	);
}

// TEXTAREA
export function MuiTextArea(props: InputProps) {
	return (
		<>
			<InputDiv>
				<h3>{props.label}</h3>
				<TextareaStyle
					label={props.placeholder}
					id="standard-multiline-static"
					multiline
					// rows={4}
					value={props.value}
					variant="standard"

				/>
				{/* <TextareaStyle placeholder={props.placeholder} /> */}
			</InputDiv>
		</>
	);
}

// MULTI SELECT

type MultiSelectProps = {
	names: string[];
	selectValue: string[] | string;
	placeholder: string;
	onchange:(event: SelectChangeEvent<any>) => void;
};

export function MuiMultiSelect(props: MultiSelectProps) {
	return (
		<>
			<InputDiv>
				<InputLabel>{props.placeholder}</InputLabel>
				<SelectStyle onChange={props.onchange} value={props.selectValue}>
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

// DATE 
export function DatePickerr(props: InputProps) {
	return (
		<InputDiv>
			<DatePickerStyle label={props.placeholder} />
		</InputDiv>
	)
}
