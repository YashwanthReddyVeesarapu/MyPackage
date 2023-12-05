import axios from "axios";

let dev = false;
let url = "https://mypackage-789471c5eba8.herokuapp.com/";

if (dev) {
  url = "http://127.0.0.1:8000/";
}

export const apiInstance = axios.create({
  baseURL: url,
});
