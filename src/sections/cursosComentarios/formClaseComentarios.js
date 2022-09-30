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

export default function FormComentariosClase() {
  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    nameClass: Yup.string().required('Nombre del curso requerido'),
    nombreAlumno: Yup.string().required('Nombre del alumno requerido'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    comentariosClass: Yup.string().required('Comentario del alumno sobre el curso requerido'),
    motivoProfesor: Yup.string().required('Motivo de aceptación o rechazo del comentario requerido'),
  });

  const defaultValues = {
    nameClass: 'Matemáticas I',
    nombreAlumno: 'Mauro',
    email: 'mail@uade.edu.ar',
    comentariosClass: 'Excelente curso!',
    motivoProfesor: '',
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
        <RHFTextField name="nombreAlumno" label="Nombre Alumno" />
        <RHFTextField name="email" label="Email address" />
        <RHFTextField name="comentariosClass" label="Comentarios Clase" />
        <RHFTextField name="motivoProfesor" label="Motivo" />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Aceptar
        </LoadingButton>
        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Cancelar
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}