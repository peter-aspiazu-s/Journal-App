import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";
import { JournalEntries } from "./JournalEntries";
//import { firebase } from '../../firebase/firebase-config';

export const Sidebar = () => {

    //const { displayName } = firebase.auth().currentUser;
    const {name} = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    const handleAddNew = () => {
        dispatch( startNewNote() );
    }

    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> { name }</span>
                </h3>
            

                <button
                    className="btn"
                    onClick={ handleLogout }
                >
                    Logout
                </button>
            </div>

            <div 
                className="journal__new-entry"
                onClick={ handleAddNew }
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries />

        </aside>
    )
}