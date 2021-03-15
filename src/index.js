import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

const initialState = {
  player1: 0,
  player2: 0,
};

// the reducer gets given the current version of the state
// and the action that called it, which has a "type" property
const reducer = (currentState, action) => {
  // depending on what the action's type property is
  // we can do different things
  switch (action.type) {
    // using object spread to create a new object
    // with the same properties
    case "INCREMENT": return { ...currentState, player1: currentState.player1 + 1 };
    
    default: return currentState;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// subscribe to any changes
store.subscribe(() => {
  // get the current state using the getState method
  // we can get the state, but not update it
  let state = store.getState();

  // for now, just log the new count
  console.log(state.player1);
});

// we update subscribe to call the ReactDOM.render
// method whenever the state changes
const render = () => {
  let state = store.getState();

  // pass in state.value as a value prop
  ReactDOM.render(
    <App player1={ state.player1 } />,
    document.getElementById("root")
  );
};

store.subscribe(render); // render when state changes
render(); // render when page loads using initial state

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
