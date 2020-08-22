import axios from 'axios'
const api = axios.create({
  method: 'get',
  baseURL: 'https://www.katanise.com/api/v1/',
  timeout: 40000,
  withCredentials: false,
  responseType: 'json',
  maxContentLength: 2000000,
  maxRedirects: 3
})

// CUSTOMER ME
export const getRoutesApi = async () => {
    return await api.get('bus/route')
  }

