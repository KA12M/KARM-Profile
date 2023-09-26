import axios from "axios";

const url = import.meta.env.VITE_API_URL;

axios.defaults.baseURL = url;

axios.defaults.withCredentials = true;

const responseBody = (res) => res.data;

export const req = {
  get: (url, options = {}) => axios.get(url, options).then(responseBody),
  post: (url, data = {}) => axios.post(url, data).then(responseBody),
};

export const blogAPI = {
  getAll: () => req.get("/blogs"),
  like: (id) => req.post("/blogs/like/" + id),
};

export const karmProfileAPI = {
  getKarm: () => req.get("/karm"),
};

export const TechnologyAPI = {
  getAll: () => req.get("/technologies"),
};
