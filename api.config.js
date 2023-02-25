export const APISettings = {
    token: '',
    headers: new Headers({
        'Accept': 'application/json'
    }),
    baseURL: import.meta.env.VITE_URL + '/api/',
}