import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./dataReducer.js";
import userReducer from "./userReducer.js";

const rootReducer = combineReducers({
  data: dataReducer,
  user: userReducer,
});

export default rootReducer;
