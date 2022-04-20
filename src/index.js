import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, {initialState} from "./Components/Reducer/Reducer";
import {StateProvider} from "./Components/StateProvider/StateProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
          <App />
      </StateProvider>
  </React.StrictMode>
);





