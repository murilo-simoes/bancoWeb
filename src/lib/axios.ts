import axios from "axios";

export const api = axios.create({
  baseURL: "https://banco-api.vercel.app/",
});

export const setAuthToken = (token: any) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
