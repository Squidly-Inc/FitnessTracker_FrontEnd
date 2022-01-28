import React, {useState} from 'react';
import { postActivity } from '../../api/activitiesRequest';
import { useNavigate } from 'react-router-dom';


function CreateNewActivityComp() {
    
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        let token = localStorage.getItem("token");
        

        if (token){
            await postActivity(name, description);
            navigate('/activities');
            window.location.reload();
        }
        else {
            window.alert(`Error! Please enter a different username :D`)
        }

     
    };

    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                className="activityName"
                value={name}
                placeholder="Enter Activity Name"
                onChange={(event) => setName(event.target.value)}>
            </input>

            <input 
                type="text"
                className="activityDescription"
                value={description}
                placeholder="Enter Activity Description"
                onChange={(event) => setDescription(event.target.value)}>
            </input>

            <button type="submit">Create Activity</button>
        </form>
    );
};

export default CreateNewActivityComp;
