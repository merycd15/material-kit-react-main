import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { FormProvider, RHFTextField } from '../../components/hook-form';

// ----------------------------------------------------------------------

export default function FormContratarClase() {
  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    nameClass: Yup.string().required('Nombre del curso requerido'),
    nameProfesor: Yup.string().required('Nombre del profesor requerido'),
    lastNameProfesor: Yup.string().required('Apellido del profesor requerido'), 
    duracionClass: Yup.string().required('Duración del curso requerido'),
    frecuenciaClass: Yup.string().required('Frecuencia del curso requerido'),       
    costoClass: Yup.string().required('Costo del curso requerido'),
    telefonoAlumno: Yup.string().required('Teléfono alumno requerido'),
    mailAlumno: Yup.string().email('Email debe ser válido').required('Email requerido'),
    horarioContactoAlumno: Yup.string().required('Horario de contacto requerido'),
    mensajeAlumno: Yup.string().required('Motivo requerido'),
  });

  const defaultValues = {
    nameClass: 'Matemáticas I',
    nameProfesor: 'Micaela',
    lastNameProfesor: 'Rimoldi', 
    duracionClass: '4 meses',
    frecuenciaClass: '2 veces por semana',       
    costoClass: '$12000',
    telefonoAlumno: '',
    mailAlumno: '',
    horarioContactoAlumno: '',
    mensajeAlumno: '',        
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
          <RHFTextField name="nameClass" label="Nombre Curso" />
          <RHFTextField name="nameProfesor" label="Nombre Profesor" />
          <RHFTextField name="lastNameProfesor" label="Apellido Profesor" />
          <RHFTextField name="duracionClass" label="Duración Clase" />
          <RHFTextField name="frecuenciaClass" label="Frecuencia Clase" />
          <RHFTextField name="costoClass" label="Costo Clase" />
          <RHFTextField name="telefonoAlumno" label="Telefono Alumno" />
          <RHFTextField name="mailAlumno" label="Mail Alumno" />
          <RHFTextField name="horarioContactoAlumno" label="Horario de contacto" />
          <RHFTextField name="mensajeAlumno" label="Indica a tu profe el motivo para cursar" />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Contratá!
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}