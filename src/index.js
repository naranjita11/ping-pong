import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./data/store";

let state = store.getState();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App
        player1={ state.player1 }
        player2={ state.player2 }
        p1serving={ state.p1serving }
        handleP1Increment={ () => store.dispatch({ type: "P1_SCORES" }) }
        handleP2Increment={ () => store.dispatch({ type: "P2_SCORES" }) }
        handleReset={ () => store.dispatch({ type: "RESET" }) }
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
