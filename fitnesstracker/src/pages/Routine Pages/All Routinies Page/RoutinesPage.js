import React from 'react';
import AllRoutines from '../../../components/Routine Components/RoutinesComp';

import './routinesPage.css';

function RoutinesPage() {

//   const buttonLogic = async () => {

//     let userExists = await checkUserExists();
//     if (userExists){
//       navigate('/createActivity');
      
//     }
//     else{
//       window.alert(`Error! You must be logged in to create a new activity!`);
//     };
//   };

  return (
      <>
        {/* <div id='buttonDiv'><button onClick={buttonLogic}>Create New Activity</button></div> */}
        <AllRoutines />
      </>
  );
};

export default RoutinesPage;