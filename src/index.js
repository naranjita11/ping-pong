import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

const initialState = {
  player1: 0,
  player2: 0,
  p1serving: true,
  winner: 0
};

const player1incr = currentState => ({ ...currentState, player1: currentState.player1 + 1 });
const player2incr = currentState => ({ ...currentState, player2: currentState.player2 + 1 });

const chooseServer = currentState => {
  const total = currentState.player1 + currentState.player2;
  return {
    ...currentState,
    p1serving: total % 5 === 0 ? !currentState.p1serving : currentState.p1serving ,
  };
};

const win = currentState => {
  if (currentState.player1 === 21) {
    return {
      ...currentState,
      winner: 1,
    };
  }
  if (currentState.player2 === 21) {
    return {
      ...currentState,
      winner: 2,
    };
  }
  else return currentState;
}

const reducer = (currentState, action) => {
  switch (action.type) {
    case "P1_SCORES": return win(chooseServer(player1incr(currentState)));
    case "P2_SCORES": return win(chooseServer(player2incr(currentState)));
    case "RESET": return initialState;
    default: return currentState;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// we update subscribe to call the ReactDOM.render
// method whenever the state changes
const render = () => {
  let state = store.getState();

  // pass in state.value as a value prop
  ReactDOM.render(
    <App
      player1={ state.player1 }
      player2={ state.player2 }
      p1serving={ state.p1serving }
      winner={ state.winner }
      handleP1Increment={ () => store.dispatch({ type: "P1_SCORES" }) }
      handleP2Increment={ () => store.dispatch({ type: "P2_SCORES" }) }
      handleReset={ () => store.dispatch({ type: "RESET" }) }
    />,
    document.getElementById("root")
  );
};

store.subscribe(render); // render when state changes
render(); // render when page loads using initial state

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
