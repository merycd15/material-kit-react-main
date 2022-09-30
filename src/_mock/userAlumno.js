import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.findName(),
  status: sample(['Aceptado', 'Solicitado', 'Finalizado','Cancelado']),
  role: sample([
    'Matematica',
    'Fisica',
    'Filosofia',
    'Programacion',
  ]),
}));

export default users;
