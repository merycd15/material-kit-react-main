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

export default function FormClase() {
  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    nameClass: Yup.string().required('Nombre del curso requerido'),
    descriptionClass: Yup.string().required('Descripción del curso required'),
    valoracionClass: Yup.string().required('Valoración del curso required'),
    nameProfesor: Yup.string().required('Nombre del profesor requerido'),
    lastNameProfesor: Yup.string().required('Apellido del profesor requerido'), 
    experienciasProfesor: Yup.string().required('Experiencias requerido'),
    duracionClass: Yup.string().required('Duración del curso requerido'),
    frecuenciaClass: Yup.string().required('Nombre del curso requerido'),       
    costoClass: Yup.string().required('Nombre del curso requerido'),
  });

  const defaultValues = {
    nameClass: '',
    descriptionClass: '',
    valoracionClass: '',
    nameProfesor: '',
    lastNameProfesor: '', 
    experienciasProfesor: '',
    duracionClass: '',
    frecuenciaClass: '',       
    costoClass: '',
    comentariosClass: '',
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
    navigate('/dashboard/CursosProfesor', { replace: true });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
          <RHFTextField name="nameClass" label="Nombre Curso" />
          <RHFTextField name="descriptionClass" label="Descripción Clase" />
          <RHFTextField name="valoracionClass" label="Valoración Clase" />
          <RHFTextField name="nameProfesor" label="Nombre Profesor" />
          <RHFTextField name="lastNameProfesor" label="Apellido Profesor" />
          <RHFTextField name="experienciasProfesor" label="Experiencia Profesor" />
          <RHFTextField name="duracionClass" label="Duración Clase" />
          <RHFTextField name="frecuenciaClass" label="Frecuencia Clase" />
          <RHFTextField name="costoClass" label="Costo Clase" />
          <RHFTextField name="comentariosClass" label="Comentarios Clase" />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Publicar
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}