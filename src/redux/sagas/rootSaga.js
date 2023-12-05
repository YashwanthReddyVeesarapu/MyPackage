import { all } from "redux-saga/effects";

import dataSaga from "./dataSaga";

// Root Saga
export default function* rootSaga() {
  yield all([dataSaga()]);
  // Other sagas can be added here
}
