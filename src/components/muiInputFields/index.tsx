import {
	InputLabel,
	MenuItem,
	SelectChangeEvent,
	TextField,
} from "@mui/material";
import {
	AutocompleteStyle,
	DatePickerStyle,
	InputDiv,
	InputStyle,
	SelectStyle,
	TextareaStyle,
} from "./style";
import {
	DateValidationError,
	PickerChangeHandlerContext,
} from "@mui/x-date-pickers";

type InputProps = {
	placeholder: string;
	type?: string;
	startAdornment?: any;
	label?: string;
	onchange?:
		| React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
		| undefined;
	value?: string;
	name?: string;
	dateOnChange?:
		| ((
				value: unknown,
				context: PickerChangeHandlerContext<DateValidationError>
		  ) => void)
		| undefined;
};

// INPUTS
export function MuiInnputField(props: InputProps) {
	return (
		<>
			<InputDiv>
				<InputStyle
					name={props.name}
					disableUnderline={true}
					value={props.value}
					onChange={props.onchange}
					startAdornment={props.startAdornment}
					type={props.type}
					placeholder={props.placeholder}
				/>
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
					onChange={props.onchange}
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
	onchange: (event: SelectChangeEvent<any>) => void;
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
			<DatePickerStyle
				onChange={props.dateOnChange}
				value={props.value}
				label={props.placeholder}
			/>
		</InputDiv>
	);
}

type AutoCompleteProps = {
	option: any;
	onChange: any;
	value: string;
	placeholder: string;
};

export const AutoComplete = (props: AutoCompleteProps) => {
	return (
		<InputDiv>
			<InputLabel>{props.placeholder}</InputLabel>
			<AutocompleteStyle
				disablePortal
				id="combo-box-demo"
				onChange={props.onChange}
				value={props.value}
				options={props.option}
				renderInput={(params) => <TextField {...params}/>}
			/>
		</InputDiv>
	);
};
