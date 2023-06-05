import React, {useState} from 'react';
import {line, curveMonotoneX} from 'd3-shape';
import {scaleLinear, scaleTime} from 'd3-scale';
export const LineChart = (props) => {
    let [lineChart, setLineChart] = useState(
        () => line().curve(curveMonotoneX)
    );

    let [timeScale, setTimeScale] = useState(
        () => scaleTime()
    );

    let [valueScale, setValueScale] = useState(
        () => scaleLinear()
    );

    let {pplot} = props;

    let { timeKey, valueKey, timeDomain, valueDomain, observations, scaleRangeToBox } = pplot; 

    let scales = scaleRangeToBox(timeScale, valueScale);

    timeScale = scales.xScale;
    valueScale = scales.yScale;

    timeScale.domain(timeDomain);
    valueScale.domain(valueDomain);

    lineChart.x(d => timeScale(d[timeKey]))
        .y(d => valueScale(d[valueKey]));

    return(
        <g>
            <path d={lineChart(observations)} stroke={'black'} fill={'none'}/>
        </g>
    )


};