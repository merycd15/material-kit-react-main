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
  motivo: sample([
    'me parece interesante',
    'me sirve en lo profesional',
    'curiosidad',
    'porque si',
  ]),
  mail:faker.internet.email(),
  telefono: faker.phone.number('+54 911 #### ####'), 
  horario: sample([
    'Lunes a la mañana',
    'Todos los miércoles',
    'Solo fin de semanas',
    'Cualquier día después de las 18',
  ]),
}));

export default users;
