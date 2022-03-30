import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { firebase } from '../firebase-firestore/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from "../actions/auth";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState( true );
    const [ isLoggeIn, setIsLoggeIn ] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( async(user) => {
            
            if(user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggeIn( true );
                
                dispatch( startLoadingNotes( user.uid ) );
            } else {
                setIsLoggeIn( false );
            }

            setChecking(false);
        });
    }, [ dispatch, setChecking, setIsLoggeIn ])

    if( checking ){
        return (
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <Routes>
            {    
                isLoggeIn ? <Route path="*" element={ <JournalScreen /> } />
                : <Route path="*" element={ <AuthRouter /> } />
            }    
            </Routes>
        </BrowserRouter>
    )
}