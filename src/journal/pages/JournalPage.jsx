

import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NoteView } from "../views"
import { IconButton} from '@mui/material';
import {AddOutlined} from '@mui/icons-material';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/*   <Typography >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </Typography>*/}
      <NothingSelectedView/> 
     {/**    <NoteView />*/}


     <IconButton
     size='large'
     sx={{
      color:'white', backgroundColor:'error.main', ':hover':{ backgroundColor:'error.main', opacity:0.9},
      position: 'fixed',
      right:50,
      bottom:50
     }}>
  <AddOutlined sx={{fontSize:30}}/>
     </IconButton>
    </JournalLayout>
  )
}
