import React from "react"; 
import ReactDOM from "react-dom";
import _ from "lodash"; 
// import ContainerizedDemo from "./ContainerizedDemo"; 
import DistributedDemo from "./DistributedDemo"; 
import { PeripheryPlotsTest } from "./myCompoment/PeripheryTest";

ReactDOM.render(
    <React.Fragment>
        <div>
            <p>A small sample dataset from the {<a href={'https://github.com/vega/vega/blob/master/docs/data/seattle-weather.csv'}>Vega</a>} repository</p>
            <p>The scale / center of each time "zone" is independently configurable via brushable handles on the control timeline or zoom / pan interactions (scrollwheel / drag) with the corresponding plot. </p>
            <p>For this demo, the types of visual encodings used are fixed. The PeripheryPlots component comes with a number of default visual encodings and it can be easily extended to support custom encodings. </p>
        </div>
        {/* <ContainerizedDemo/> */}
        <PeripheryPlotsTest/>
        {/* <DistributedDemo/> */}
    </React.Fragment>
    , 
    document.getElementById('DEMO')
);




