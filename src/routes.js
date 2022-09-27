import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
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
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
      ],
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
