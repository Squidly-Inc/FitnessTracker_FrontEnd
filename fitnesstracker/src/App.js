import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Navbar from './components/NavbarComp'
import Activities from './pages/ActivitiesPage';
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'


function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;