import { Input, Select, TextField } from "@mui/material";
import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import BrandColors from "utilities/styles/colors";

export const InputDiv = styled.div`
	margin: 3rem 0;
	width: 100%;
`;

// MUI INPUTS
export const InputStyle = styled(Input)`
	&& {
		width: 95%;
		font-size: 1.1rem;
		padding: 0.4rem;
		font-family: "Sora" !important;
		border-bottom: 2px solid;
	}
  
`;

export const TextareaStyle = styled(TextField)`
	&& {
		border-bottom: 1.5px solid ${BrandColors.black};
		font-size: 1.1rem;
		margin: 0;
		padding: 0;
		width: 95%;
		font-family: "Sora" !important;
		& label.Mui-focused {
			color: ${BrandColors.textGrey};
		}
		& .MuiInput-underline:after {
			border-bottom-color: ${BrandColors.black};
		}
		& .MuiOutlinedInput-root {
			& fieldset {
				border-color: ${BrandColors.black};
			}
			&:hover fieldset {
				border-color: ${BrandColors.black};
			}
			&.Mui-focused fieldset {
				border-color: ${BrandColors.black};
			}
		}
		
	}
`;

export const SelectStyle = styled(Select)`
	&& {
		& .MuiOutlinedInput-notchedOutline {
			border: none;
			border-bottom: 2px solid ${BrandColors.black};
			border-radius: 0;
			font-family: "Sora" !important;
			outline: none;
		}
		width: 95%;
		font-size: 1.1rem;
	}
`;

export const DatePickerStyle = styled(DatePicker)`
	&& {
		width: 95%;
		border: none;
		outline: none;
		font-family: "Sora" !important;
		& label.Mui-focused {
			color: ${BrandColors.textGrey};
		}
		& .MuiInput-underline:after {
			border-bottom-color: ${BrandColors.black};
		}
		& .MuiOutlinedInput-root {
			& fieldset {
				border-color: transparent transparent ${BrandColors.black};
        border-width: 2px;
			}
			&:hover fieldset {
				border-bottom-color: ${BrandColors.black};
			}
			&.Mui-focused fieldset {
				border-bottom-color: ${BrandColors.black};
			}
		}
		/* border-bottom: 2px solid; */
	}
`;
