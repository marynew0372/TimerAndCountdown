import styled from "styled-components"
import TextField from '@mui/material/TextField';


export const TextFieldStyled = styled(TextField)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 75px;
    padding: 15px;
    border-radius: 10px;

    .MuiInputBase-root {
        justify-content: center;

        input {
            display: flex;
            justify-content: center;
        }
    }
`