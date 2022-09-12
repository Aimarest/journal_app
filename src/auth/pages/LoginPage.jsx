import { TextField, Typography } from '@mui/material';
import {Grid} from '@mui/material';

export const LoginPage = () => {
  return (
  <Grid 
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight:'100vh', backgroundColor: 'primary.main', padding:4}}>
<Grid item
className='box-shadow'
xs={3}
sx={{backgroundColor:'white', padding:3, borderRadius: 2}}>
  <Typography variant='h5' sx={{ mb:1 }}>Login</Typography>
  <form>
    <Grid container>
      <Grid item xs={12} md={6} sx={{mt:2}}>
        <TextField 
        label="Correo" 
        type="email" 
        placeholder='correo@google.com'
        fullwidth 
        />
           <Grid item xs={12} md={6} sx={{mt:2}}>
        <TextField 
        label="Password" 
        type="password" 
        placeholder='Contraseña'
        fullwidth 
        />
      </Grid>
      </Grid>
    </Grid>
  </form>
</Grid>
  </Grid>
   ) 
}
