import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { BoxTypographyStyled } from '../styles/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { PickerValue } from '@mui/x-date-pickers/internals/models/value';

interface InputCountProps {
    onChange: (msTime: PickerValue) => void;
    timeObj: PickerValue;
    onDisabled: boolean;
}

const InputCount = React.memo(function InputCount({ onChange, timeObj, onDisabled }: InputCountProps) {
    const handleSetTime = useCallback(
        (value: PickerValue) => {
            onChange(value);
        },
        [onChange]
    );

    return (
        <BoxTypographyStyled>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['MobileTimePicker', 'MobileTimePicker']}>
                    <MobileTimePicker
                        disabled={onDisabled}
                        label='mm-ss'
                        openTo='minutes'
                        views={['minutes', 'seconds']}
                        format='mm:ss'
                        value={timeObj}
                        onChange={handleSetTime}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </BoxTypographyStyled>
    );
});

(InputCount as any).propTypes = {
    onChange: PropTypes.func.isRequired,
    timeObj: PropTypes.object.isRequired,
    onDisabled: PropTypes.bool.isRequired,
};

export default InputCount;
