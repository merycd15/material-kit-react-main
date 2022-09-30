import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import Blog from './pages/Blog';
import Perfil from './pages/Perfil';
import Login from './pages/Login';
import Register from './pages/Register';
import Cursos from './pages/Cursos';
import Curso from './pages/Curso';
import Landing from './pages/Landing';
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
        { path: 'perfil', element: <Perfil /> },
        { path: 'cursos', element: <Cursos /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: 'curso',
      element: <Curso />,
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
