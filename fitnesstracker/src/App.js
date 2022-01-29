import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Navbar from './components/Navbar/NavbarComp';
//Activity Page Imports
import ActivitiesPage from './pages/Activity Pages/All Activities Page/ActivitiesPage';
import CreateNewActivityPage from './pages/Activity Pages/CreateNewActivity Page/CreateNewActivityPage';
import EditActivityPage from './pages/Activity Pages/Edit Activity Page/EditActivityPage';

//Routine Page Imports
import RoutinesPage from './pages/Routine Pages/All Routinies Page/RoutinesPage';

//Login and Register Page Imports
import LoginPage from './pages/Login And Register Pages/LoginPage';
import RegisterPage from './pages/Login And Register Pages/RegisterPage';

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Activity Routes */}
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/createActivity" element={<CreateNewActivityPage />} />
          <Route path="/editActivity" element={<EditActivityPage />} />

          {/* Routine Routes */}
          <Route path="/routines" element={<RoutinesPage />} />

          {/* Login and Register Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

      </BrowserRouter>
    </>
  )
};

export default App;