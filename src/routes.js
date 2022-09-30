import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
// import Blog from './pages/Blog';
import ProfesorProfile from './pages/ProfesorProfile';
import AlumnoProfile from './pages/AlumnoProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import CursosProfesor from './pages/CursosProfesor';
import CursosAlumno from './pages/CursosAlumno';
import CursoProfesor from './pages/CursoProfesor';
import CursoAlumno from './pages/CursoAlumno';
import CursoAlumnoContratar from './pages/CursoAlumnoContratar';
import Landing from './pages/Landing';
import SolicitudesProfesor from './pages/SolicitudesProfesor';
import SolicitudesAlumno from './pages/SolicitudesAlumno';
import DashboardApp from './pages/DashboardApp';
import Page404 from './pages/Page404';
import ForgotPassword from './pages/ForgotPassword';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
  
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/dashboard', element: <Navigate to="/dashboard/home" /> },
        { path: 'home', element: <DashboardApp /> },
        { path: 'AlumnoProfile', element: <AlumnoProfile /> },
        { path: 'CursosAlumno', element: <CursosAlumno /> },
        { path: 'CursosProfesor', element: <CursosProfesor /> },
        { path: 'ProfesorProfile', element: <ProfesorProfile /> },
        { path: 'SolicitudesProfesor', element: <SolicitudesProfesor /> },
        { path: 'SolicitudesAlumno', element: <SolicitudesAlumno /> },
      ],
    },
    {
      path: 'CursoProfesor',
      element: <CursoProfesor />,
    },      
    {
      path: 'CursoAlumnoContratar',
      element: <CursoAlumnoContratar />,
    },
    {
      path: 'CursoAlumno',
      element: <CursoAlumno />,
    },    
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'forgotPassword',
      element: <ForgotPassword />,
    },
    {
    path: '/404',
    element: <Page404 />,
    },
    {
      path: '/',
      element: <Landing  />,
      children: [
        { path: '/', element: <Navigate to="/landing" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
