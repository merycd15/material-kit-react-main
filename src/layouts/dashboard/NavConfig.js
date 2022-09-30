// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'inicio',
    path: '/dashboard/home',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'CursosAlumno',
    path: '/dashboard/CursosAlumno',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'CursosProfesor',
    path: '/dashboard/CursosProfesor',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  // products --> cursos
  {
    title: 'ProfesorProfile',
    path: '/dashboard/ProfesorProfile',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'AlumnoProfile',
    path: '/dashboard/AlumnoProfile',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'SolicitudesProfesor',
    path: '/dashboard/SolicitudesProfesor',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'SolicitudesAlumnos',
    path: '/dashboard/SolicitudesAlumno',
    icon: getIcon('eva:people-fill'),
  },
];

export default navConfig;
