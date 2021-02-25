import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from './reducer/StateProvider.js';
import { initialState, reducer } from './reducer/reducer.js';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
          <App />
      </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

