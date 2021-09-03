const api = async (url: string) => {
  const apiBase = 'http://localhost:3000'

  const res = await fetch(`${apiBase}${url}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`);
  }
  return await res.json();
}
export const getBanks = async () => {
  return await api('/banks')
}

export const getActions = async () => {
  return await api('/action')
}
