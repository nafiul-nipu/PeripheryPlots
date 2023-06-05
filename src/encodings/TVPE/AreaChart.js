import React, {useState} from 'react';
import {area} from 'd3-shape';
import {scaleLinear, scaleTime} from 'd3-scale';


export const AreaChart = (props) => {
    let [areaPlot, setAreaPlot] = useState(
        () => area()
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

    areaPlot.x(d => timeScale(d[timeKey]))
        .y0(valueScale(0))
        .y1(d => valueScale(d[valueKey]));

    return(
        <g>
            <path d={areaPlot(observations)} stroke={'black'} fill={'#cce5df'}/>
        </g>
    )


};