import { collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { 
    addNewEmptyNote, 
    deleteNoteById, 
    savingNewNote, 
    setActiveNote, 
    setNotes, 
    setPhotoToActiveNote, 
    setSaving, 
    updateNote 
} from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";


export const startNewNote = () => {
    return async( dispatch, getState ) => {

        dispatch( savingNewNote() );

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            imageUrls: [],
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) ); 
        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        //! dispatch
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );

    }

}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        if(!uid) throw new Error('El UID del usuario no existe')

        const notes = await loadNotes( uid );
        dispatch( setNotes(notes) );
    }
}


export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };

        // Esta es una forma en javascript para eliminar una propiedad de un objeto
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}` );
        await setDoc( docRef, noteToFireStore, { merge: true } );

        dispatch( updateNote(note) );
    }
}


export const startUploadingFiles = ( files = [] ) => {
    return async(dispatch) => {
        dispatch( setSaving() );

        // await fileUpload(files[0]);
        const fileUploadPromises = [];
        for ( const file of files ) {
            fileUploadPromises.push( fileUpload(file) )
        }

        const photosUrls = await Promise.all( fileUploadPromises );

        dispatch( setPhotoToActiveNote(photosUrls) );
    }

}

export const startDeletingNote = () => {
    return async(dispatch, getState) => {
        const {uid} = getState().auth;
        const {active:note} = getState().journal;

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}` );
        await deleteDoc(docRef);

        dispatch( deleteNoteById(note.id) );
    }   
}