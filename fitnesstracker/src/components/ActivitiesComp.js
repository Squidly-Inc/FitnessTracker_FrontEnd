import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {fetchActivities, postActivity} from '../api/activitiesRequest';

const AllActivities = () => {
    const [ activities, setActivities ] = useState([]);

    useEffect( async () => {
        const allActivities = await fetchActivities();
        setActivities(allActivities);
    }, []);

    let activityElements = null;
    if(activities.length !== 0){
        activityElements = <div>{activities.map((activity) => {
            return (
                <div id='activity' key={activity.id}>
                    <div id='activityTitle'>{activity.id} 
                    --- {activity.name}
                    --- {activity.description}</div>
                </div>
            )
        })}</div>
    };

    return(
        <>            
            <Link to='/createActivity'><button>Create New Activity</button></Link>

            {activityElements}
        </>
        
    );
};

export default AllActivities;