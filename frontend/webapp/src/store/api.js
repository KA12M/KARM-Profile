const url = import.meta.env.VITE_API_URL;

const get = (url) => fetch(url).then((res) => res.json());

export const blogAPI = {
  getAll: get(url + "/blogs"),
};
