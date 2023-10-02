import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App/App";
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Map } from "immutable";

const store = createStore(uiReducer, Map(initialState), applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
//reportWebVitals();