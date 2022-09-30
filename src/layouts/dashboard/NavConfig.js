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
    title: 'Cursos',
    path: '/dashboard/cursos',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  // products --> cursos
  {
    title: 'Perfil',
    path: '/dashboard/perfil',
    icon: getIcon('eva:people-fill'),
  },
];

export default navConfig;
