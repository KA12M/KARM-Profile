const baseUrl = import.meta.env.VITE_API_URL;

export async function GetData() {
  const url = baseUrl + "/blogs";
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.data);
}
