// dataSaga.js
import { takeEvery, put, call, delay } from "redux-saga/effects";
import { fetchData, fetchDataError } from "../actions/actions";
import { apiInstance } from "../../lib/api/apiInstance"; // Import your API service

import * as actionTypes from "../actions/actionTypes";

function* fetchDataSaga(action) {
  let retries = 15; // Number of retries

  while (retries > 0) {
    try {
      const res = yield apiInstance
        .get("/fetch-gmail-data", {
          headers: {
            Authorization: `Bearer ${action.payload.token}`,
            email: action.payload.email,
          },
        })
        .then((res) => res);
      if (res.status == 200) {
        yield put({
          type: actionTypes.FETCH_DATA_SUCCESS,
          payload: res.data.items,
        });
        return;
      }
      if (res.status == 201) {
        yield put({
          type: actionTypes.FETCH_DATA_CACHE_SUCCESS,
          payload: res.data.items,
        });
      }
      retries -= 1;
      yield delay(10000);
      // Break the loop if successful
    } catch (error) {
      if (error.response) {
        const errordata = {
          status: error.response.status,
          message: error.response.data.detail,
        };
        yield put({ type: actionTypes.FETCH_DATA_ERROR, payload: errordata });
      } else yield put({ type: actionTypes.FETCH_DATA_ERROR, payload: error });
      retries -= 1;
      yield delay(10000); // Add a delay between retries (optional)
    }
  }

  yield put({
    type: actionTypes.FETCH_DATA_ERROR,
    payload: { message: "Max tries exceeded" },
  });

  // If all retries fail
  // yield put(someErrorAction("Maximum retries reached"));
  // console.log(action);
  // try {
  //   const data = yield apiInstance
  //     .get("/fetch-gmail-data", {
  //       headers: {
  //         Authorization: `Bearer ${action.payload.token}`,
  //         email: action.payload.email,
  //       },
  //     })
  //     .then((res) => res.data);
  //   yield put({ type: actionTypes.FETCH_DATA_SUCCESS, payload: data });
  // } catch (error) {
  //   console.log(error);
  //   if (error.response) {
  //     const errordata = {
  //       status: error.response.status,
  //       message: error.response.data.detail,
  //     };
  //     yield put({ type: actionTypes.FETCH_DATA_ERROR, payload: errordata });
  //   } else yield put({ type: actionTypes.FETCH_DATA_ERROR, payload: error });
  //}
}

export default function* watchFetchData() {
  yield takeEvery(actionTypes.FETCH_DATA, fetchDataSaga);
}
