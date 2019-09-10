import { createStore, compose, combineReducers } from "redux";

import DefaultReducer from "./reducers/default";

const appReducer = combineReducers({
  default: DefaultReducer
});

const store = createStore(
  appReducer,
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  )
);

store.subscribe(() => {
  // console.log('Store changed', store.getState());
});

export default store;
