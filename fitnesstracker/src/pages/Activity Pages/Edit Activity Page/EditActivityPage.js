import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateActivity } from '../../../api/activitiesRequest';
import { checkUserExists } from '../../../api/checkUserRequest'

function EditActivityPage(){
    const navigate = useNavigate();

    const location = useLocation();
    let singularActivity = location.state;
    console.log(singularActivity);

    const [name, setName] = useState(singularActivity.name);
    const [description, setDescription] = useState(singularActivity.description);

    const buttonLogic = async () => {

        let userExists = await checkUserExists();
        if (userExists){
            //pass
        }
        else{
            window.alert(`Error! You must be logged in to edit an activity!`);
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let activityID = singularActivity.id;
        await updateActivity(activityID, name, description);
        navigate('/activities');
        window.location.reload();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                className="activityName"
                value={name}
                placeholder="Enter New Activity Name"
                onChange={(event) => setName(event.target.value)}>
            </input>

            <input 
                type="text"
                className="activityDescription"
                value={description}
                placeholder="Enter New Activity Description"
                onChange={(event) => setDescription(event.target.value)}>
            </input>

            <button type="submit" onClick={buttonLogic}>Update Activity</button>
        </form>
    );
    
};

export default EditActivityPage;