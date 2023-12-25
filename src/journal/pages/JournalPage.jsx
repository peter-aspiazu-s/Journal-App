import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedview";

import IconButton from "@mui/material/IconButton";
import AddOutlined from "@mui/icons-material/AddOutlined";

import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { NoteView } from "../views/NoteView";


export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {
    
    dispatch( startNewNote() );

  }

  return (
    <JournalLayout>
      
      {
        (!!active)
        ? <NoteView />
        : <NothingSelectedView />
      }
      

      <IconButton 
        onClick={ onClickNewNote }
        size='large'
        disabled={isSaving}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>

  )
}
