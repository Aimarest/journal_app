import { Google } from '@mui/icons-material';
import { Grid, TextField, Typography, Button , Link} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch } from 'react-redux';
import {checkingAuthentication} from '../../store/auth';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { onInputChange, email, password } = useForm({
      email: 'amarcosestevez@gmail.com',
      password: '123456'
    })

    const onSubmit = (ev) => {
      ev.preventDefault();
      dispatch(checkingAuthentication())
      console.log(email, password)
    }
    const onGoogleSignIn = () => {
      console.log('onGoogleSignIn')
    }

  return (
    <AuthLayout title="Login">
    <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
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

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
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
          
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button type='submit' variant='contained' fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button onClick={onGoogleSignIn} variant='contained' fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>


          <Grid container direction='row' justifyContent='end'>
            <Link component={ RouterLink } color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>


      </form>

  </AuthLayout>
   ) 
}
