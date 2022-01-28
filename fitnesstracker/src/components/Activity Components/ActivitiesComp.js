import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {fetchActivities} from '../../api/activitiesRequest';

const AllActivities = () => {
    const [ activities, setActivities ] = useState([]);

    useEffect( async () => {
        const allActivities = await fetchActivities();
        setActivities(allActivities);
    }, []);

    let activityElements = null;
    if(activities.length !== 0){
        activityElements = <div id="allActivitesDiv">{activities.map((activity) => {
            return (
                <div id='activity' key={activity.id}>
                    <div id='activityTitle'>{activity.name}</div>
                    <div id='description'>{activity.description}</div>
                    <button id='editBtn'><Link to={'/editActivity'} state={activity} id='edit'>Edit</Link></button>
                </div>
            )
        })}</div>
    };

    return(
        <>{activityElements}</>
    );
};

export default AllActivities;