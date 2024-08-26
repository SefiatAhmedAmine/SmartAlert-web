import React, { useRef, useState } from 'react';
import styles from "./RangeSlider.module.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;

const RangeSlider = ({ options, onSliderChange }) => {
  const [value, setValue] = useState([options.minValue, options.maxValue]);
  const criterion = { id: options.id, label: options.label }
  const step = useRef(Math.pow(10, Math.min(Math.floor(((value[1]-value[0])+"").length -2),3)))
  // console.log("slider range", value, step, Math.min(Math.floor(((value[1]-value[0])+"").length -2),3));
  const handleSliderChange = (event, newValue) => {
    // console.log("sliding", newValue);
    setValue(newValue);
    if (onSliderChange) onSliderChange(criterion, value)
  };

  const handleMinInputChange = (event) => {
    setValue([event.target.value === '' ? 0 : Number(event.target.value), value[1]]);
    if (onSliderChange) onSliderChange(criterion, value)
  };

  const handleMaxInputChange = (event) => {
    setValue([value[0], event.target.value === '' ? 0 : Number(event.target.value)]);
    if (onSliderChange) onSliderChange(criterion, value)
    };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
      <Grid container spacing={2} alignItems="center" justifyContent={'space-between'}>
        <Grid item xs={3}>
          <Input
            value={value[0]}
            size="medium"
            onChange={handleMinInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: step.current,
              min: options.minValue,
              max: options.maxValue,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={6} >
          <Slider
            value={value}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            min={options.minValue}
            max={options.maxValue}
            step={step.current}
            style={{ marginTop: 10 }}
          />
        </Grid>
        <Grid item xs={3}>
          <Input
            value={value[1]}
            size='medium'
            onChange={handleMaxInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: step.current,
              min: options.minValue,
              max: options.maxValue,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RangeSlider;
