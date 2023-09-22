const baseUrl = import.meta.env.VITE_API_URL;

export async function GetAllTechnologies() {
  const url = baseUrl + "/technologies";
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.data);
}
