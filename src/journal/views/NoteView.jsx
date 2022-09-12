import {Grid, Typography, Button, TextField} from '@mui/material';
import {SaveOutlined} from '@mui/icons-material';
import { ImageGallery } from '../components';
export const NoteView = () => {
  return (
   <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
<Grid item>
    <Typography fontSize={ 39 } fontWeight='light' >28 de agosto, 2024</Typography>
</Grid>
<Grid item>
    <Button color="primary" sx={{ padding: 2 }}>
        <SaveOutlined sx={{fontSize:30, mr:1 }}/>
        Guardar
    </Button>
</Grid>
<Grid container>
<TextField
type='text'
variant='filled'
fullWidth
placeholder='Ingrese un título'
label='Título'
sx={{border:'none', mb: 1 }}
></TextField>
<TextField
type='text'
variant='filled'
fullWidth
multiline
placeholder='¿Qué sucedió hoy?'
minRows={5}

></TextField>
</Grid>

{/** Image gallery **/}
<ImageGallery/>
   </Grid>
  )
}