import styled from 'styled-components';
import { Typography, Button, Box } from '@mui/material';


export const MainBoxStyled = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 700px;
    height: 600px;
    background-color: #ffffff;
    border-radius: 20px;
    gap: 35px;

    h1 {
        position: absolute;
        top: 10px;
    }
`;

export const BoxTypographyStyled = styled(Box)`
    display: flex;
    flex-direction: row;
    gap: 15px;

    p {
        color: white;
        font-size: 50px;
    }
`

export const TypographyStyled = styled(Typography)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 75px;
    padding: 15px;
    border-radius: 10px;
    background-color: #18171c;
`