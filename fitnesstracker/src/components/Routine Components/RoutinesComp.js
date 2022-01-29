import React, { useState, useEffect} from "react";
import { fetchRoutines } from '../../api/routinesRequest';
import ExpandedData from './ExpandDataComp';

const AllRoutines = () => {
    const [ routines, setRoutines ] = useState([]);

    useEffect( async () => {
        const allRoutines = await fetchRoutines();
        setRoutines(allRoutines);
    }, []);

    let routineElements = null;
    if(routines.length !== 0){
        routineElements = <div id="allRoutinesDiv">{routines.map((routine) => {

            console.log(routine.activities.length)

            if (routine.isPublic === true){
                return (
                    <div id='routine' key={routine.id}>
                        <div id='routineData'> 
                            <div id='routineTitle'>{routine.name}</div>
                            <div id='goal'>{routine.goal}</div>
                            {/* <button id='editBtn'><Link to={'/editRoutine'} state={routine} id='edit'>Edit</Link></button> */}
                        </div>
                        {routine.activities.length ? 
                            (<div id='activityDetails'>
                                <div id='theWordActivities'>Activities:</div>
                                <div><ExpandedData activityList={routine.activities} /></div>
                            </div>)
                            : null}
                    </div>
                );
            };
        })}</div>
    };

    return(
        <>{routineElements}</>
    );
};

export default AllRoutines;