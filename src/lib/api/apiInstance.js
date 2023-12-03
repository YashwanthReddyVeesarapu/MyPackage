import axios from "axios";

let dev = true;
let url = "";

if (dev) {
  url = "http://127.0.0.1:8000/";
}

export const apiInstance = axios.create({
  baseURL: url,
});
