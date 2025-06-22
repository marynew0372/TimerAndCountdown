import styled from "styled-components"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


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

export const BoxStyledLinearWithValue = styled(Box)`
    width: 350px;
`

export const WrapperStyledLinearProgress = styled(Box)`
    display: flex;
    align-items: center;
`

export const BoxStyledLinearProgress = styled(Box)`
    width: 300px;
    margin: 5px;

    .MuiLinearProgress-determinate {
        background-color: #bfc3c7;
    }

    .MuiLinearProgress-bar {
        background-color: black;
    }
`

export const TypographyStyledLinearProgress = styled(Typography)`
    color: black;
`

export const BoxTypographyStyled = styled(Box)`
    min-width: 35px;
`