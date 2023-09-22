const url = import.meta.env.VITE_API_URL;

export function GetKARMProfile() {
  return fetch(url + "/karm")
    .then((res) => res.json())
    .then((data) => data.data);
}
