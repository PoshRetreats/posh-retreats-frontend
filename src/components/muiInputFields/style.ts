import { Input, Select, TextareaAutosize } from "@mui/material"
import styled from "styled-components"

export const InputDiv = styled.div`
margin: 3rem 0;
width: 100%;
`

// MUI INPUTS
export const InputStyle = styled(Input)`
&&{
    width: 95%;
    font-size: 1.1rem;
    padding: .4rem;
}
`

export const TextareaStyle = styled(TextareaAutosize)`
&&{
    border: none;
    border-bottom: 1px solid #000;
    width: 95%;
    font-size: 1.1rem;
    padding: 2rem 0 4rem;
}
`

export const SelectStyle = styled(Select)`
  && {
    & .MuiOutlinedInput-notchedOutline {
      border: none;
      border-bottom: 1px solid #000;
      border-radius: 0; /* Optional: Removes border radius */
    }
    width: 95%;
    font-size: 1.1rem;
    /* Add other styles here if needed */
  }
`;