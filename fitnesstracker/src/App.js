import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage'
import Navbar from './components/NavbarComp'
import ActivitiesPage from './pages/ActivitiesPage';
import CreateNewActivityPage from './pages/CreateNewActivityPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/createActivity" element={<CreateNewActivityPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

      </BrowserRouter>
    </>
  )
};

export default App;