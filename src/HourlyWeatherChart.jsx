import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect } from 'react';

export default function DailyWeatherChart({ forecastDataState }) {

    const hourlyTemps = [];

    const hours = [];

    function formatDateWithoutYear(inputDate) {
        return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', hour: 'numeric' }).format(new Date(inputDate));
    }

    forecastDataState ? forecastDataState.timelines.hourly.map((hour) => hourlyTemps.push(hour.values.temperature)) : [];
 
    forecastDataState ? forecastDataState.timelines.hourly.map((hour) => hours.push(formatDateWithoutYear(hour.time))) : [];

    //Convert temp data to F
    hourlyTemps.map((temp, index) => hourlyTemps[index] = Math.round((temp * 9 / 5) + 32));
    

    return (
        <LineChart
            xAxis={[
                {
                    type: 'time',
                    data: hours,
                    scaleType: 'point',
                    orientation: 'bottom',

                }
            ]}
            yAxis={[
                {
                    type: 'linear',
                    orientation: 'left',
                    id: 'temperature',
                    name: 'Temperature (°F)',
                    unit: '°C',
                    label: 'Temperature (°F)',

                }
            ]}
            series={[
                {
                    curve: 'linear',
                    type: 'line',
                    data: hourlyTemps,
                    label: 'Temperature (°F)',

                    yAxisId: 'temperature',
                    name: 'Temperature',
                    color: 'lightblue',
                    strokeWidth: 3,
                    showMark: false,
                },
            ]}
            padding={{
                left: 5,
                right: 5,
                top: 20,
                bottom: 20,
            }}
            sx={{
                path: {
                    strokeWidth: 4,
                },

            }}
        />
    )
}