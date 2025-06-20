import { useState, useEffect, useRef, useCallback } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { BoxTypographyStyled, MainBoxStyled, TypographyStyled } from '../styles/styles';
import { grey } from '@mui/material/colors';

const Timer = () => {
    const formatNumber = (num: number, length: number = 2) => String(num).padStart(length, '0');

    const [onDisabled, setOnDisabled] = useState<boolean>(false);
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);

    const startRef = useRef<number | null>(null);
    const savedTimeRef = useRef(0);

    useEffect(() => {
        let interval: NodeJS.Timer | null = null;
        if (active) {
            setOnDisabled(true);
            startRef.current = Date.now();
            interval = setInterval(() => {
                startRef.current !== null && setTime(savedTimeRef.current + (Date.now() - startRef.current));
            }, 10);
        }
        return () => {
            interval && clearInterval(interval);
            if (active && startRef.current !== null) {
                savedTimeRef.current += Date.now() - startRef.current;
            }
            startRef.current = null;
            setOnDisabled(false);
        };
    }, [active]);

    const toggleStartPause = () => {
        setActive(prev => !prev);
    };

    const handleReset = () => {
        setActive(false);
        savedTimeRef.current = 0;
        setTime(0);
    };

    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return (
        <MainBoxStyled>
            <Typography variant='h1'>Timer</Typography>
            <BoxTypographyStyled>
                <TypographyStyled>{formatNumber(minutes)}</TypographyStyled>
                <TypographyStyled>{formatNumber(seconds)}</TypographyStyled>
                <TypographyStyled>{formatNumber(milliseconds)}</TypographyStyled>
            </BoxTypographyStyled>
            <Box>
                <Button sx={{ backgroundColor: grey[900] }} variant='contained' onClick={toggleStartPause}>
                    {active ? 'Пауза' : time === 0 ? 'Старт' : 'Возобновить'}
                </Button>
                <Button
                    disabled={onDisabled}
                    variant='outlined'
                    onClick={handleReset}
                    sx={{ ml: 2, borderColor: grey[900], color: grey[900] }}
                >
                    Сброс
                </Button>
            </Box>
        </MainBoxStyled>
    );
};

export default Timer;
