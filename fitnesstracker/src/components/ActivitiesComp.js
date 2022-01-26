import React, { useState, useEffect } from "react";
import {fetchActivities} from '../api/activitiesRequest'

const AllActivities = () => {
    const [ activities, setActivities ] = useState([]);

    useEffect( async () => {
        const allActivities = await fetchActivities();
        setActivities(allActivities);
    }, []);

    // TEMP FUNCTION
    function consoleLogActivities(){
        if (activities.length == 0){
            //pass
        }
        else(console.log(activities))
    }

    return(
        <>
            {/* TEMP FUNCTION >> */ } {consoleLogActivities()}

            <div>This is the activities component</div>
            
            <button onClick={() => {
                console.log(activities)
            }}>Fetch Activities</button>
        </>
        
    );
}

export default AllActivities;