import React, { useState, useEffect} from "react";

const ExpandedData = (props) => {
    const [ expandedData, setExpandedData ] = useState([]);

    useEffect( async () => {
        setExpandedData(props.activityList);
    }, []);

    let expandedDataReturn = null;
    if(expandedData.length !== 0){
        expandedDataReturn = <>{expandedData.map((data) => {
            return (
                <div id='data' key={data.id}>
                    <div id='dataName' className="activityData"><div className="activityDescriber">Activity Name: </div> <div>{data.name}</div></div>
                    <div id='dataDescription' className="activityData"><div className="activityDescriber">Activity Description: </div> <div>{data.description}</div></div>
                    <div id='dataDuration' className="activityData"><div className="activityDescriber">Activity Duration: </div> <div>{data.duration}</div></div>
                    <div id='dataCount' className="activityData"><div className="activityDescriber">Activity Count: </div> <div>{data.count}</div></div>
                </div>
            );
        })}</>
    };

    return(
        <>{expandedDataReturn}</>
    );
};

export default ExpandedData;