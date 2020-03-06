import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
// import { response } from 'express';

function* rootSaga() {
  yield takeEvery("FETCH_GIF", fetchGifs);
  yield takeEvery("FAVORITE_GIF", addToFavorites);
}

function* fetchGifs(action) {
  const serachResults = yield axios.get(`/api/search/${action.payload}`);
  console.log("in fetchGifs", serachResults);
  console.log("payload", serachResults.data.data);

  yield put({ type: "GET_GIF", payload: serachResults.data.data });
}

function* addToFavorites(action) {
  try {
    yield axios.post("/api/favorite", action.payload);
      console.log('from addToFavorites', action.payload);
      
  } catch (error) {
    console.log(error);
  }
}

const gifReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_GIF":
      return action.payload;
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();
const storeInstance = createStore(
  combineReducers({
    gifReducer
  }),

  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);
