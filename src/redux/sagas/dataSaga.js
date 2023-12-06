// dataSaga.js
import { takeEvery, put, call } from "redux-saga/effects";
import { fetchData, fetchDataError } from "../actions/actions";
import { apiInstance } from "../../lib/api/apiInstance"; // Import your API service

import * as actionTypes from "../actions/actionTypes";

function* fetchDataSaga(action) {
  console.log(action);
  try {
    const data = yield apiInstance
      .get("/fetch-gmail-data", {
        headers: {
          Authorization: `Bearer ${action.payload.token}`,
          UserId: action.payload.email,
        },
      })
      .then((res) => res.data);
    yield put({ type: actionTypes.FETCH_DATA_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    if (error.response) {
      const errordata = {
        status: error.response.status,
        message: error.response.data.detail,
      };
      yield put({ type: actionTypes.FETCH_DATA_ERROR, payload: errordata });
    } else yield put({ type: actionTypes.FETCH_DATA_ERROR, payload: error });
  }
}

export default function* watchFetchData() {
  yield takeEvery(actionTypes.FETCH_DATA, fetchDataSaga);
}
