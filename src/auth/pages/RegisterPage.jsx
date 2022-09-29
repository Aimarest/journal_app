import { Grid, TextField, Typography, Button, Link } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';


const formData = {
  email: 'amarcosestevez@gmail.com',
  password: '123456',
  displayName: 'Ana Marcos'
}

export const RegisterPage = () => {

  const { onInputChange, email, password, displayName, formState } = useForm(formData);
   const onsSubmit = (ev) => {

    ev.preventDefault();
    console.log(formState);
   }
  return (
    <AuthLayout title="Register">
      <form onSubmit={onsSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder='Nombre completo'
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type='submit' variant='contained' fullWidth>
                Register
              </Button>
            </Grid>
          </Grid>


          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">

              Ingresar
            </Link>
          </Grid>

        </Grid>


      </form>

    </AuthLayout>
  )
}
