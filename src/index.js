import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './Css/App.css'
import DataProvider from './redux/Store'




ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

