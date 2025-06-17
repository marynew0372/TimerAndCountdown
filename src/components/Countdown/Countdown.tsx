import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { BoxTypographyStyled, MainBoxStyled, TypographyStyled } from '../styles/styles';
import dayjs, { Dayjs } from 'dayjs';
import { PickerValue } from '@mui/x-date-pickers/internals/models/value';
import { grey } from '@mui/material/colors';
import InputCount from './InputCountdown';
import alarmSound from '../../assets/alarm/alarm.mp3';

const Countdown = React.memo(function Countdown() {
    const [onDisabled, setOnDisabled] = useState<boolean>(false);
    const [deadline, setDeadline] = useState<number | null>(null);
    const [timeObj, setTimeObj] = useState<PickerValue>(null);
    const [msTime, setMsTime] = useState<number>(0);
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        if (!active || !deadline) return;
        const interval = setInterval(() => {
            const left = deadline - Date.now();
            if (left <= 0) {
                setMsTime(0);
                setActive(false);
                clearInterval(interval);
                setOnDisabled(false);
                setTimeObj(null);
                const alarm = new Audio(alarmSound);
                alarm.play();
            } else {
                setMsTime(left);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [active, deadline]);

    const handleSetTime = (value: Dayjs | null) => {
        if (value) {
            setTimeObj(value);
            const minutes = (value as Dayjs).minute();
            const seconds = (value as Dayjs).second();
            const totalMs = minutes * 60000 + seconds * 1000;
            setMsTime(totalMs);
            setDeadline(null);
        }
    };

    const handleStartPause = () => {
        if (!active && msTime > 0) {
            setDeadline(Date.now() + msTime);
            setActive(true);
            setOnDisabled(true);
        } else {
            setActive(false);
            setDeadline(msTime > 0 ? Date.now() + msTime : null);
            setOnDisabled(false);
        }
    };

    const handleReset = () => {
        setMsTime(0);
        setTimeObj(null);
        setActive(false);
        setOnDisabled(false);
    };

    const display = msTime > 0 ? dayjs().startOf('day').add(msTime, 'ms') : dayjs().startOf('day');

    const formatNumber = (num: number, length: number = 2) => String(num).padStart(length, '0');

    return (
        <MainBoxStyled>
            <Typography variant='h1'>Coutdown</Typography>
            <BoxTypographyStyled>
                <TypographyStyled>{formatNumber(display.minute())}</TypographyStyled>
                <TypographyStyled>{formatNumber(display.second())}</TypographyStyled>
            </BoxTypographyStyled>
            <InputCount onChange={handleSetTime} timeObj={timeObj} onDisabled={onDisabled} />
            <Box>
                <Button sx={{ backgroundColor: grey[900] }} variant='contained' onClick={handleStartPause}>
                    {active ? 'Пауза' : 'Запустить'}
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
});

export default Countdown;
