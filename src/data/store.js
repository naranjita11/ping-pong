import { createStore, applyMiddleware, compose } from "redux";
import initial from "./initial";
import reducers from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
  reducers,
  initial,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;