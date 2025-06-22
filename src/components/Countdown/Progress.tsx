import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import {
    BoxStyledLinearProgress,
    BoxStyledLinearWithValue,
    BoxTypographyStyled,
    TypographyStyledLinearProgress,
    WrapperStyledLinearProgress,
} from './inputCount.styled';

interface LinearWithValueLabelProps {
    initialMsTime: number;
    onActive: boolean;
}

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <WrapperStyledLinearProgress>
            <BoxStyledLinearProgress>
                <LinearProgress variant='determinate' {...props} />
            </BoxStyledLinearProgress>
            <BoxTypographyStyled>
                <TypographyStyledLinearProgress variant='body2'>{`${Math.round(
                    props.value
                )}%`}</TypographyStyledLinearProgress>
            </BoxTypographyStyled>
        </WrapperStyledLinearProgress>
    );
}

const LinearWithValueLabel: React.FC<LinearWithValueLabelProps> = ({ initialMsTime }) => {
    return (
        <BoxStyledLinearWithValue>
            <LinearProgressWithLabel value={initialMsTime} />
        </BoxStyledLinearWithValue>
    );
};

export default LinearWithValueLabel;
