import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
// import Email from "@material-ui/icons/Email";
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';
// import {login} from "../../../controllers/appController.controller";

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Your password is too short.'),
  });

  const defaultValues = {
    email: '',
    password: '',
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    navigate('/dashboard', { replace: true });
  };

  // const loginUser=()=>
  // {
  //   if (email!=="" && password!=="")
  //   {
  //     validarLogin();
  //   }
  //   else
  //   {
  //     alert("Debe completar Usuario Y paassword");
  //   }
    
  // }
  // const redirect= ()=>{
  //   if (usuarioValido){
  //     return <Redirect to='/Main' />
  //   }
  // }
  // const validarLogin= async function()
  // {
  //   let datos ={
  //     email: email,
  //       password: password
  //   }
  //   let getLogin = await login(datos);
  //   if (getLogin.rdo===0 )
  //   {
  //     setUsuarioValido(true);
  //   }
  //   if (getLogin.rdo===1)
  //   {
  //     alert(getLogin.mensaje)
  //   }
  // }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="email" label="Email address" />
        {/* <RHFTextField 
          
                  labelText="Mail..."
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (event) => handleEmail(event),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email name="email" label="Email address" />
                      </InputAdornment>
                    )
                  }}
          
        /> */}

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" >
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <RHFCheckbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover" href='/forgotPassword'>
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        Login
      </LoadingButton>
    </FormProvider>
  );
}
