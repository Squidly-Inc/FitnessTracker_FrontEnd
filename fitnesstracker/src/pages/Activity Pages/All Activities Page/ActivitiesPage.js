import React from 'react';
import { useNavigate } from 'react-router-dom';
import AllActivities from '../../../components/Activity Components/ActivitiesComp';
import { checkUserExists } from '../../../api/checkUserRequest';

import './activitiesPage.css';

function ActivitiesPage() {
  const navigate = useNavigate();

  const buttonLogic = async () => {

    let userExists = await checkUserExists();
    if (userExists){
      navigate('/createActivity');
      
    }
    else{
      window.alert(`Error! You must be logged in to create a new activity!`);
    };
  };

  return (
      <>
        <div id='buttonDiv'><button onClick={buttonLogic}>Create New Activity</button></div>
        <AllActivities />
      </>
  );
};

export default ActivitiesPage;
