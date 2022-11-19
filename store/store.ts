import { applyMiddleware, createStore, Middleware, StoreEnhancer } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import * as Process from "process";

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (Process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore: MakeStore<any> = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, {}, bindMiddleware([sagaMiddleware]));

  (store as any).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
