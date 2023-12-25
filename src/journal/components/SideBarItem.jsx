import { useMemo } from 'react';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';

export const SideBarItem = ({title = '', body, id, date, imageUrls = []}) => {

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch(setActiveNote({ title, body, id, date, imageUrls }));
    }

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title
    }, [title]);

    const newBody = useMemo(() => {
        return body.length > 30
            ? body.substring(0,30) + '...'
            : body
    }, [title]);

  return (
    <ListItem key={id} disablePadding>
        <ListItemButton onClick={onClickNote}>
            <ListItemIcon>
                <BookmarkBorderIcon />
            </ListItemIcon>

            <Grid container>
                <ListItemText primary={newTitle} />
                <ListItemText secondary={newBody} />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
