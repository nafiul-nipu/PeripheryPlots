import React, {useState} from 'react';
import { timeMonth } from 'd3-time';
import { format } from 'd3-format';
import { extent } from 'd3-array';
import loadData from '../loadData';
import PeripheryPlots, {LineGroup, LineChart} from "../../../src/index.js";

export const PeripheryPlotsTest = (props) => {
    const [data, setData] = useState(loadData());
    console.log(data)

    const config = {

        trackwiseObservations: [data, data, data],
        trackwiseTimeKeys: ['date', 'date', 'date'], 
        trackwiseValueKeys: ['temp_max', 'precipitation', 'wind'], 
        trackwiseTypes: ['continuous', 'continuous', 'continuous'],
        trackwiseUnits: ['celsius', 'inches', 'km / hr'],
        trackwiseValueDomainComputers: [null, null, (observations) => ([0,50])], 
        trackwiseNumAxisTicks: [3, 3, 3], 
        trackwiseAxisTickFormatters: [format(",.1f"), null, format(",.1f")], 
        trackwiseEncodings: [
            [
                [LineChart], [LineChart], [LineChart]
            ], 
            [
                [LineChart], [LineChart], [LineChart]            
            ], 
            [
                [LineChart], [LineChart], [LineChart]            
            ]
        ],

        distributedMode: true, 
        fixedWidth: 800, 
    
        contextWidthRatio: .15, 
        numContextsPerSide: 1, 
        applyContextEncodingsUniformly: true,
        tickInterval: timeMonth.every(3), 
        timeExtentDomain: extent(data.map(d => d.date)),  
        msecsPadding: 1000 * 86400 * 14, // two weeks
        timeDomains: [
            ['07/02/2012', '02/01/2013'].map(dateStr => new Date(dateStr)),
            ['02/02/2013', '02/01/2014'].map(dateStr => new Date(dateStr)),
            ['02/02/2014', '02/01/2015'].map(dateStr => new Date(dateStr))
        ], 
    
        controlTimelineHeight: 70, 
        verticalAlignerHeight: 40
    
    }
    return(
        <div style={{width: '100%'}}>
            {
                data ? 
                    (<PeripheryPlots config={config}/>) : null
            }
        </div>
    )
};