export const FETCH_DATA = "FETCH_DATA";
import * as actionTypes from "./actionTypes";

export const fetchData = (payload) => ({
  type: actionTypes.FETCH_DATA,
  payload,
});

export const fetchDataSuccess = (items) => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  payload: items,
});

export const fetchDataCacheSuccess = (items) => ({
  type: actionTypes.FETCH_DATA_CACHE_SUCCESS,
  payload: items,
});

export const fetchDataError = (error) => ({
  type: actionTypes.FETCH_DATA_ERROR,
  payload: error,
});

export const clearData = () => ({
  type: actionTypes.CLEAR_DATA,
});

export const fetchUserData = (payload) => ({
  type: actionTypes.FETCH_USER_DATA,
  payload: payload,
});

export const logoutUser = () => ({
  type: actionTypes.LOGOUT_USER,
});
