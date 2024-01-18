import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { LoginProvider } from './context/LoginProvider';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';
import DetailsPage from './pages/DetailsPage';
import { EnrolledCoursesProvider } from './context/EnrolledCoursesProvider';
import NavBar from './components/NavBar';

export default function App() {
  const location = useLocation();

  return (
    <LoginProvider>
      <EnrolledCoursesProvider>
        {location.pathname !== '/' && <NavBar />}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/course/:id' element={<DetailsPage />} />
        </Routes>
      </EnrolledCoursesProvider>
    </LoginProvider>
  );
}
