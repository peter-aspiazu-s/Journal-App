import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { JournalApp } from './JournalApp.jsx';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store.js';
import './styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
