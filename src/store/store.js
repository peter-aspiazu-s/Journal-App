import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer';
import { uiReducer } from '../reducers/uiReducer';
// esto trae el redux

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    // le pasamos el primer reducer que sera el que resolvera
    // la autenticacion
    ui: uiReducer,
    notes: notesReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
// el createStore solo recibe un reducer nada mas
// por esa razon importamos el combineReducers 
// para que alli almacenemos mas reducers 